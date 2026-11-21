import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/* ───────────────────────── Procedural textures ───────────────────────── */

/** Hammered-brass bump map: hundreds of soft dimples. */
function hammeredTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "#808080";
  g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * 512, y = Math.random() * 512, r = 6 + Math.random() * 14;
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, "rgba(40,40,40,0.55)");
    grad.addColorStop(1, "rgba(128,128,128,0)");
    g.fillStyle = grad;
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(6, 2);
  return t;
}

/** Leaf colour map: gradient blade, lighter midrib, side veins. */
function leafTexture(base: string, light: string) {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 512;
  const g = c.getContext("2d")!;
  const grad = g.createLinearGradient(0, 512, 256, 0);
  grad.addColorStop(0, base);
  grad.addColorStop(1, light);
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 512);
  // edge darkening
  const edge = g.createLinearGradient(0, 0, 256, 0);
  edge.addColorStop(0, "rgba(0,30,0,0.35)");
  edge.addColorStop(0.25, "rgba(0,0,0,0)");
  edge.addColorStop(0.75, "rgba(0,0,0,0)");
  edge.addColorStop(1, "rgba(0,30,0,0.35)");
  g.fillStyle = edge;
  g.fillRect(0, 0, 256, 512);
  g.strokeStyle = "rgba(220,240,190,0.75)";
  g.lineWidth = 5;
  g.beginPath();
  g.moveTo(128, 512);
  g.lineTo(128, 0);
  g.stroke();
  g.lineWidth = 2;
  g.strokeStyle = "rgba(210,235,180,0.45)";
  for (let y = 470; y > 40; y -= 38) {
    g.beginPath();
    g.moveTo(128, y);
    g.quadraticCurveTo(170, y - 30, 250, y - 70);
    g.moveTo(128, y);
    g.quadraticCurveTo(86, y - 30, 6, y - 70);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Soft round contact shadow. */
function shadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, "rgba(60,40,10,0.55)");
  grad.addColorStop(0.5, "rgba(60,40,10,0.18)");
  grad.addColorStop(1, "rgba(60,40,10,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

/* ───────────────────────── Geometry builders ───────────────────────── */

function leafGeometry(len: number, width: number, serrated = false) {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  if (serrated) {
    const steps = 9;
    for (let i = 1; i <= steps; i++) {
      const t = i / (steps + 1);
      const w = Math.sin(t * Math.PI) * width * 0.5 * (i % 2 ? 1 : 0.82);
      s.lineTo(w, t * len);
    }
    s.lineTo(0, len);
    for (let i = steps; i >= 1; i--) {
      const t = i / (steps + 1);
      const w = Math.sin(t * Math.PI) * width * 0.5 * (i % 2 ? 1 : 0.82);
      s.lineTo(-w, t * len);
    }
    s.lineTo(0, 0);
  } else {
    s.bezierCurveTo(width * 0.62, len * 0.18, width * 0.55, len * 0.78, 0, len);
    s.bezierCurveTo(-width * 0.55, len * 0.78, -width * 0.62, len * 0.18, 0, 0);
  }
  const geo = new THREE.ShapeGeometry(s, 20);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const uv = geo.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    // cup across the blade + gentle arch along it
    const z = (x / (width * 0.5)) ** 2 * width * 0.16 + (y / len) ** 2 * len * 0.12;
    pos.setZ(i, z);
    uv.setXY(i, x / width + 0.5, y / len);
  }
  geo.computeVertexNormals();
  return geo;
}

type FlyLeaf = { mesh: THREE.Mesh; r: number; phase: number; h: number; spin: number };
type Ripple = { t0: number; x: number; z: number };

export class BowlScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  private bowlGroup = new THREE.Group();
  private oil!: THREE.Mesh;
  private oilBase!: Float32Array;
  private oilY = 0.7;
  private oilR = 1.45;
  private drop!: THREE.Mesh;
  private ripples: Ripple[] = [];
  private floaters: THREE.Object3D[] = [];
  private flyers: FlyLeaf[] = [];
  private clock = new THREE.Clock();
  private nextDrop = 1.2;
  private raf = 0;
  private running = false;
  private mouse = new THREE.Vector2();
  private mouseL = new THREE.Vector2();
  private distScale = 1;
  /** driven by scroll */
  state = { dive: 0, fly: 0, intro: 0 };
  /** where the bowl sits on screen before the dive: fraction of width (→) / height (↑) */
  private shift = { x: 0, y: 0 };

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();

    this.buildLights();
    this.buildBowl();
    this.buildOil();
    this.buildHerbs();
    this.buildDrop();
    this.scene.add(this.bowlGroup);
    this.resize();
  }

  private buildLights() {
    this.scene.add(new THREE.HemisphereLight(0xfff6e5, 0xd9c7a3, 0.9));
    const key = new THREE.DirectionalLight(0xfff1dc, 2.4);
    key.position.set(3.5, 7, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -5;
    key.shadow.camera.right = 5;
    key.shadow.camera.top = 5;
    key.shadow.camera.bottom = -5;
    key.shadow.radius = 6;
    key.shadow.bias = -0.0004;
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xffd9a8, 1.2);
    rim.position.set(-5, 3, -4);
    this.scene.add(rim);

    // ground: real shadows + a soft painted contact shadow
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: 0.16 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
    const contact = new THREE.Mesh(
      new THREE.PlaneGeometry(5.6, 5.6),
      new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false })
    );
    contact.rotation.x = -Math.PI / 2;
    contact.position.y = 0.002;
    this.scene.add(contact);
  }

  private buildBowl() {
    const outer = new THREE.SplineCurve([
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.62, 0.0),
      new THREE.Vector2(1.02, 0.1),
      new THREE.Vector2(1.36, 0.3),
      new THREE.Vector2(1.58, 0.56),
      new THREE.Vector2(1.7, 0.84),
      new THREE.Vector2(1.74, 0.98),
    ]).getPoints(48);
    const inner = new THREE.SplineCurve([
      new THREE.Vector2(1.68, 0.98),
      new THREE.Vector2(1.64, 0.86),
      new THREE.Vector2(1.52, 0.6),
      new THREE.Vector2(1.3, 0.36),
      new THREE.Vector2(0.96, 0.18),
      new THREE.Vector2(0.55, 0.09),
      new THREE.Vector2(0.0, 0.08),
    ]).getPoints(48);
    const profile = [...outer, ...inner];
    // oil sits where the inner wall crosses oilY
    for (let i = 1; i < inner.length; i++) {
      if (inner[i].y <= this.oilY) {
        this.oilR = inner[i].x - 0.01;
        break;
      }
    }

    const bump = hammeredTexture();
    const brass = new THREE.MeshPhysicalMaterial({
      color: 0xd6a648,
      metalness: 1,
      roughness: 0.27,
      clearcoat: 0.35,
      clearcoatRoughness: 0.2,
      bumpMap: bump,
      bumpScale: 0.9,
    });
    const bowl = new THREE.Mesh(new THREE.LatheGeometry(profile, 160), brass);
    bowl.castShadow = true;
    bowl.receiveShadow = true;
    this.bowlGroup.add(bowl);

    const plain = new THREE.MeshPhysicalMaterial({ color: 0xd9a94c, metalness: 1, roughness: 0.2, clearcoat: 0.5 });
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.71, 0.045, 24, 160), plain);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.985;
    rim.castShadow = true;
    this.bowlGroup.add(rim);

    const foot = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.06, 20, 100), plain);
    foot.rotation.x = Math.PI / 2;
    foot.position.y = 0.04;
    this.bowlGroup.add(foot);

    // the uruli's two ring handles
    [-1, 1].forEach((side) => {
      const h = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.038, 18, 60), plain);
      h.position.set(side * 1.9, 0.86, 0);
      h.castShadow = true;
      this.bowlGroup.add(h);
      const lug = new THREE.Mesh(new THREE.SphereGeometry(0.07, 20, 20), plain);
      lug.position.set(side * 1.73, 0.9, 0);
      this.bowlGroup.add(lug);
    });
  }

  private buildOil() {
    const geo = new THREE.RingGeometry(0.0001, this.oilR, 128, 40);
    this.oilBase = new Float32Array(geo.attributes.position.array);
    // depth gradient: deep amber in the middle, bright gold where it meets the brass
    const deep = new THREE.Color(0x6b2f00), edge = new THREE.Color(0xf0a531);
    const cols = new Float32Array(geo.attributes.position.count * 3);
    for (let i = 0; i < geo.attributes.position.count; i++) {
      const d = Math.hypot(this.oilBase[i * 3], this.oilBase[i * 3 + 1]) / this.oilR;
      const c = deep.clone().lerp(edge, Math.pow(d, 2.2));
      cols.set([c.r, c.g, c.b], i * 3);
    }
    geo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
    // Medicated oil reads best as "liquid gold": a polished amber surface whose
    // reflections are tinted by its own colour (no white haze on top).
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      metalness: 0.7,
      roughness: 0.035,
      emissive: 0x3a1800,
      emissiveIntensity: 0.4,
    });
    this.oil = new THREE.Mesh(geo, mat);
    this.oil.rotation.x = -Math.PI / 2;
    this.oil.position.y = this.oilY;
    this.oil.receiveShadow = true;
    this.bowlGroup.add(this.oil);
  }

  private buildHerbs() {
    const tulsiTex = leafTexture("#2f5f24", "#4f8a34");
    const neemTex = leafTexture("#3d7a2c", "#77ad46");
    const tulsiMat = new THREE.MeshStandardMaterial({ map: tulsiTex, roughness: 0.55, side: THREE.DoubleSide });
    const neemMat = new THREE.MeshStandardMaterial({ map: neemTex, roughness: 0.5, side: THREE.DoubleSide });
    const tulsi = leafGeometry(0.55, 0.34);
    const neem = leafGeometry(0.8, 0.22, true);

    const add = (geo: THREE.BufferGeometry, mat: THREE.Material, p: [number, number, number], r: [number, number, number], s = 1, parent: THREE.Object3D = this.scene) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(...p);
      m.rotation.set(...r);
      m.scale.setScalar(s);
      m.castShadow = true;
      m.receiveShadow = true;
      parent.add(m);
      return m;
    };

    // floating on the oil
    const floatSpots: [number, number, number][] = [
      [0.45, 0.25, 0.4],
      [-0.55, -0.35, 2.4],
      [0.1, -0.6, 4.1],
    ];
    floatSpots.forEach(([x, z, rot], i) => {
      const leaf = add(i === 1 ? neem : tulsi, i === 1 ? neemMat : tulsiMat, [x, this.oilY + 0.012, z], [-Math.PI / 2 + 0.05, 0, rot], 1.05, this.bowlGroup);
      this.floaters.push(leaf);
    });

    // jasmine on the oil + on the table
    const petal = new THREE.Shape();
    petal.moveTo(0, 0);
    petal.bezierCurveTo(0.07, 0.04, 0.06, 0.16, 0, 0.19);
    petal.bezierCurveTo(-0.06, 0.16, -0.07, 0.04, 0, 0);
    const petalGeo = new THREE.ShapeGeometry(petal, 10);
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xfffaf0, roughness: 0.45, emissive: 0xfff3dc, emissiveIntensity: 0.15, side: THREE.DoubleSide });
    const heartMat = new THREE.MeshStandardMaterial({ color: 0xf2c94c, roughness: 0.6 });
    const flower = (pos: [number, number, number], parent: THREE.Object3D) => {
      const f = new THREE.Group();
      for (let k = 0; k < 5; k++) {
        const p = new THREE.Mesh(petalGeo, petalMat);
        p.rotation.z = (k / 5) * Math.PI * 2;
        p.rotation.x = 0.25;
        p.castShadow = true;
        f.add(p);
      }
      const heart = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 12), heartMat);
      f.add(heart);
      f.rotation.x = -Math.PI / 2;
      f.position.set(...pos);
      parent.add(f);
      return f;
    };
    this.floaters.push(flower([-0.2, this.oilY + 0.02, 0.55], this.bowlGroup));
    flower([2.35, 0.02, 0.9], this.scene);
    flower([-1.0, 0.02, -2.4], this.scene);

    // leaves scattered on the table
    const ground: [number, number, number, number, boolean][] = [
      [2.2, 1.4, 0.4, 1.1, false],
      [2.7, 0.3, -0.6, 1.2, true],
      [-2.4, -1.4, 2.2, 1.0, true],
      [-0.6, 2.4, 1.1, 1.2, false],
      [0.9, 2.3, -1.4, 1.1, false],
      [-2.6, -0.4, 0.6, 1.1, false],
    ];
    ground.forEach(([x, z, rot, s, isNeem]) => add(isNeem ? neem : tulsi, isNeem ? neemMat : tulsiMat, [x, 0.012, z], [-Math.PI / 2, 0, rot], s));

    // turmeric roots + a cut slice showing the bright core
    const rootMat = new THREE.MeshStandardMaterial({ color: 0x8f5420, roughness: 0.85, bumpMap: hammeredTexture(), bumpScale: 2 });
    const coreMat = new THREE.MeshStandardMaterial({ color: 0xf59a0b, roughness: 0.5, emissive: 0x7a3a00, emissiveIntensity: 0.25 });
    const root = (x: number, z: number, rot: number) => {
      const g = new THREE.Group();
      [[0, 0, 0], [0.22, 0.02, 0.7], [-0.18, 0.01, -0.9]].forEach(([dx, dy, a]) => {
        const seg = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.32, 8, 16), rootMat);
        seg.rotation.set(Math.PI / 2, 0, a);
        seg.position.set(dx, 0.075 + dy, 0);
        seg.castShadow = true;
        g.add(seg);
      });
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      this.scene.add(g);
    };
    root(1.7, 2.1, 0.5);
    root(-1.4, -2.3, -0.4);
    [[1.25, 2.55], [1.5, 2.85]].forEach(([x, z], i) => {
      const slice = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.035, 24), [rootMat, coreMat, coreMat]);
      slice.position.set(x, 0.02, z);
      slice.rotation.set(0, 0, i ? 0.2 : 0);
      slice.castShadow = true;
      this.scene.add(slice);
    });

    // leaves that spiral up around the bowl on scroll
    for (let i = 0; i < 12; i++) {
      const isNeem = i % 3 === 0;
      const m = new THREE.Mesh(isNeem ? neem : tulsi, isNeem ? neemMat : tulsiMat);
      m.castShadow = true;
      m.scale.setScalar(0);
      this.scene.add(m);
      this.flyers.push({ mesh: m, r: 2.3 + (i % 4) * 0.35, phase: (i / 12) * Math.PI * 2, h: 0.6 + (i % 5) * 0.55, spin: 0.6 + (i % 3) * 0.4 });
    }
  }

  private buildDrop() {
    this.drop = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 24, 24),
      new THREE.MeshPhysicalMaterial({ color: 0xe0a020, roughness: 0.05, clearcoat: 1, emissive: 0x6a3a00, emissiveIntensity: 0.4 })
    );
    this.drop.visible = false;
    this.scene.add(this.drop);
  }

  setPointer(x: number, y: number) {
    this.mouse.set(x, y);
  }

  resize() {
    const w = this.canvas.clientWidth || 1;
    const h = this.canvas.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    const portrait = this.camera.aspect < 1;
    this.distScale = portrait ? 0.85 / Math.max(0.5, this.camera.aspect) : 1;
    // desktop: bowl sits right of the headline; phone: bowl sits above the text
    this.shift = portrait ? { x: 0, y: 0.2 } : { x: 0.19, y: 0.02 };
    this.camera.updateProjectionMatrix();
  }

  start() {
    if (this.running) return;
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      this.tick();
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private tick() {
    const t = this.clock.getElapsedTime();

    /* oil drops from above every ~3s → ripple */
    const cycle = 3.2;
    const local = (t - this.nextDrop) % cycle;
    if (t > this.nextDrop) {
      const fall = 0.75;
      if (local < fall) {
        const k = local / fall;
        this.drop.visible = true;
        this.drop.position.set(0.05, 4.2 - (4.2 - this.oilY) * k * k, 0.05);
        this.drop.scale.set(0.9, 1.0 + k * 0.9, 0.9);
      } else {
        if (this.drop.visible) this.ripples.push({ t0: t, x: 0.05, z: 0.05 });
        this.drop.visible = false;
      }
    }
    this.ripples = this.ripples.filter((r) => t - r.t0 < 6);

    /* ripple the oil surface */
    const pos = this.oil.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < pos.count; i++) {
      const x = this.oilBase[i * 3], y = this.oilBase[i * 3 + 1];
      let h = Math.sin(x * 3.1 + t * 0.9) * 0.007 + Math.cos(y * 2.7 + t * 0.7) * 0.007;
      for (const r of this.ripples) {
        const age = t - r.t0;
        const d = Math.hypot(x - r.x, y + r.z);
        const front = age * 0.85;
        if (d < front + 0.1) {
          h += 0.045 * Math.exp(-age * 0.7) * Math.exp(-d * 0.9) * Math.sin(16 * (d - front));
        }
      }
      const edge = 1 - (Math.hypot(x, y) / this.oilR) ** 6; // pinned at the bowl wall
      arr[i * 3 + 2] = h * edge;
    }
    pos.needsUpdate = true;
    this.oil.geometry.computeVertexNormals();

    /* floating herbs bob on the swell */
    this.floaters.forEach((f, i) => {
      f.position.y = this.oilY + 0.015 + Math.sin(t * 1.2 + i * 2) * 0.008;
      f.rotation.z += 0.0008 * (i % 2 ? 1 : -1);
    });

    /* scroll: leaves spiral up around the bowl */
    const fly = this.state.fly;
    this.flyers.forEach((l, i) => {
      const k = THREE.MathUtils.clamp(fly * 1.6 - i * 0.04, 0, 1);
      const a = l.phase + t * 0.25 * l.spin + k * 2.4;
      l.mesh.position.set(Math.cos(a) * l.r, 0.1 + l.h * k + Math.sin(t + i) * 0.08 * k, Math.sin(a) * l.r);
      l.mesh.rotation.set(t * 0.5 * l.spin + i, a + Math.PI / 2, Math.sin(t * 0.8 + i) * 0.6);
      l.mesh.scale.setScalar(k);
    });

    /* camera: gentle orbit + pointer parallax, then a dive into the oil */
    this.mouseL.lerp(this.mouse, 0.05);
    const intro = this.state.intro;
    const dive = this.state.dive;
    const orbit = t * 0.06 + this.mouseL.x * 0.35;
    const dist = THREE.MathUtils.lerp(10.8, 3.0, dive) * this.distScale * (1 + (1 - intro) * 0.35);
    const height = THREE.MathUtils.lerp(5.6 - this.mouseL.y * 0.8, 6.8, dive);
    this.camera.position.set(Math.sin(orbit) * dist * (1 - dive * 0.75), height, Math.cos(orbit) * dist * (1 - dive * 0.75) + dive * 0.4);
    this.camera.lookAt(0, THREE.MathUtils.lerp(0.35, this.oilY, dive), 0);
    const w = this.canvas.clientWidth || 1, hgt = this.canvas.clientHeight || 1;
    const k = 1 - dive;
    this.camera.setViewOffset(w, hgt, -this.shift.x * k * w, this.shift.y * k * hgt, w, hgt);
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.stop();
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(mat)) mat.forEach((x) => x.dispose());
      else mat?.dispose();
    });
    this.scene.environment?.dispose();
    this.renderer.dispose();
  }
}
