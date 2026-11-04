import * as THREE from "three";
import { PalaceArchitecture } from "./PalaceArchitecture";

export interface ToranDiya {
  group: THREE.Group;
  flameCore: THREE.Mesh;
  flameAura: THREE.Mesh;
  light: THREE.PointLight;
  flickerSpeed: number;
  flickerOffset: number;
  baseLightIntensity: number;
}

export class ToranGarland {
  public group: THREE.Group;
  public diyas: ToranDiya[] = [];
  private bellMeshes: THREE.Mesh[] = [];
  private hangingPendants: { group: THREE.Group; swaySpeed: number; swayOffset: number }[] = [];
  private materials: THREE.Material[] = [];
  private geometries: THREE.BufferGeometry[] = [];

  constructor(palace?: PalaceArchitecture) {
    this.group = new THREE.Group();
    this.group.name = "ArchToranGarland";
    this.initArchToran(palace);
  }

  /**
   * Generates a procedural ruffled Marigold blossom geometry with visible crinkled petals
   */
  private createMarigoldGeometry(radius: number): THREE.BufferGeometry {
    const geo = new THREE.IcosahedronGeometry(radius, 4);
    const pos = geo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      vertex.fromBufferAttribute(pos, i);
      const r = vertex.length();
      const phi = Math.atan2(vertex.z, vertex.x);
      const theta = Math.acos(Math.max(-1, Math.min(1, vertex.y / r)));

      const ruffles =
        Math.sin(phi * 14) * Math.cos(theta * 10) * 0.16 +
        Math.sin(theta * 18) * 0.1 +
        Math.cos(phi * 8 + theta * 12) * 0.08 +
        (Math.random() - 0.5) * 0.04;

      vertex.multiplyScalar(1 + ruffles);
      pos.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geo.computeVertexNormals();
    this.geometries.push(geo);
    return geo;
  }

  /**
   * Traditional Indian Brass Bell (Lathe profile)
   */
  private createBrassBellGeometry(): THREE.BufferGeometry {
    const points: THREE.Vector2[] = [
      new THREE.Vector2(0, 0.45),
      new THREE.Vector2(0.08, 0.42),
      new THREE.Vector2(0.12, 0.28),
      new THREE.Vector2(0.22, 0.08),
      new THREE.Vector2(0.28, 0.02),
      new THREE.Vector2(0.26, -0.04),
      new THREE.Vector2(0.04, -0.04),
      new THREE.Vector2(0, -0.04),
    ];
    const geo = new THREE.LatheGeometry(points, 16);
    this.geometries.push(geo);
    return geo;
  }

  /**
   * Traditional Indian Diya bowl
   */
  private createDiyaBowlGeometry(): THREE.BufferGeometry {
    const points: THREE.Vector2[] = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.24, 0.02),
      new THREE.Vector2(0.44, 0.09),
      new THREE.Vector2(0.52, 0.20),
      new THREE.Vector2(0.50, 0.26),
      new THREE.Vector2(0.44, 0.28),
      new THREE.Vector2(0.38, 0.24),
      new THREE.Vector2(0.30, 0.14),
      new THREE.Vector2(0.14, 0.08),
      new THREE.Vector2(0, 0.06),
    ];
    const geo = new THREE.LatheGeometry(points, 20);
    geo.scale(1.15, 0.85, 0.9);
    this.geometries.push(geo);
    return geo;
  }

  /**
   * Curved teardrop flame geometry
   */
  private createFlameGeometry(height: number, radius: number): THREE.BufferGeometry {
    const geo = new THREE.ConeGeometry(radius, height, 16, 8);
    const pos = geo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      vertex.fromBufferAttribute(pos, i);
      const normalizedY = (vertex.y + height / 2) / height;
      const bulge = Math.sin(normalizedY * Math.PI) * 1.35;
      vertex.x *= bulge;
      vertex.z *= bulge;

      if (normalizedY > 0.7) {
        vertex.x += (normalizedY - 0.7) * 0.12;
      }
      pos.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geo.computeVertexNormals();
    geo.translate(0, height / 2, 0);
    this.geometries.push(geo);
    return geo;
  }

  /**
   * Curved Sacred Mango Leaf
   */
  private createMangoLeafGeometry(): THREE.BufferGeometry {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.12, 0.3, 0.16, 0.6, 0.0, 0.95);
    shape.bezierCurveTo(-0.16, 0.6, -0.12, 0.3, 0, 0);

    const geo = new THREE.ShapeGeometry(shape, 10);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      pos.setZ(i, -Math.abs(x) * 0.25);
    }
    geo.computeVertexNormals();
    this.geometries.push(geo);
    return geo;
  }

  private initArchToran(palace?: PalaceArchitecture) {
    // 1. Materials
    const crimsonMarigoldMat = new THREE.MeshStandardMaterial({
      color: 0xc42410,
      roughness: 0.85,
      metalness: 0.05,
    });
    this.materials.push(crimsonMarigoldMat);

    const goldenMarigoldMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      roughness: 0.82,
      metalness: 0.05,
    });
    this.materials.push(goldenMarigoldMat);

    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x145a32,
      roughness: 0.45,
      metalness: 0.15,
      side: THREE.DoubleSide,
    });
    this.materials.push(leafMat);

    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.25,
      metalness: 0.88,
    });
    this.materials.push(brassMat);

    const diyaMat = new THREE.MeshStandardMaterial({
      color: 0xa04c1a,
      roughness: 0.45,
      metalness: 0.6,
    });
    this.materials.push(diyaMat);

    const flameCoreMat = new THREE.MeshBasicMaterial({ color: 0xfffae0 });
    const flameAuraMat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    this.materials.push(flameCoreMat, flameAuraMat);

    // Geometries
    const marigoldGeo = this.createMarigoldGeometry(0.24);
    const bellGeo = this.createBrassBellGeometry();
    const diyaBowlGeo = this.createDiyaBowlGeometry();
    const flameCoreGeo = this.createFlameGeometry(0.42, 0.09);
    const flameAuraGeo = this.createFlameGeometry(0.55, 0.14);
    const leafGeo = this.createMangoLeafGeometry();

    // Helper to evaluate arch curve point
    const getPoint = (t: number): THREE.Vector3 => {
      if (palace) return palace.getArchPoint(t);
      // Fallback arch formula
      const span = 17.6;
      const x = -8.8 + t * span;
      const normX = x / 8.8;
      const parabolic = 1 - normX * normX;
      const scallops = Math.sin(Math.abs(normX) * Math.PI * 5) * 0.22 * Math.pow(parabolic, 0.5);
      const centerPoint = Math.exp(-Math.abs(normX) * 6.0) * 0.45;
      const y = 5.2 + parabolic * 2.0 + scallops + centerPoint;
      return new THREE.Vector3(x, y, 8.6);
    };

    // --- 2. String of Marigolds & Leaves along the Palace Arch Contour ---
    const flowerCount = 56;
    for (let i = 0; i < flowerCount; i++) {
      const t = i / (flowerCount - 1);
      const pt = getPoint(t);

      // Blossom placed along arch face
      const isCrimson = i % 2 === 0;
      const flower = new THREE.Mesh(
        marigoldGeo,
        isCrimson ? crimsonMarigoldMat : goldenMarigoldMat
      );
      // Position slightly in front of the stone arch molding
      flower.position.set(pt.x, pt.y - 0.18, pt.z + 0.35);
      flower.rotation.set(
        Math.sin(i * 1.5) * 0.3,
        Math.cos(i * 2) * Math.PI,
        Math.sin(i * 0.8) * 0.2
      );
      this.group.add(flower);

      // Hanging Mango Leaf pointing downwards every alternate flower
      if (i % 2 === 1) {
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.position.set(pt.x, pt.y - 0.32, pt.z + 0.38);
        leaf.rotation.set(0.15, 0, Math.PI + (Math.random() - 0.5) * 0.2);
        leaf.scale.set(0.55, 0.65, 0.55);
        this.group.add(leaf);
      }
    }

    // --- 3. Hanging Pendants, Brass Bells & Diyas at the 5 Cusps of the Palace Arch ---
    // The cusps naturally occur at t = 0.1, 0.3, 0.5, 0.7, 0.9
    const cuspTValues = [0.08, 0.28, 0.5, 0.72, 0.92];

    cuspTValues.forEach((tVal, idx) => {
      const pt = getPoint(tVal);
      const pendantGroup = new THREE.Group();
      pendantGroup.position.set(pt.x, pt.y - 0.2, pt.z + 0.35);

      // Vertical string of 4 marigolds
      const pendantFlowers = idx === 2 ? 6 : 4;
      for (let f = 0; f < pendantFlowers; f++) {
        const flower = new THREE.Mesh(
          marigoldGeo,
          f % 2 === 0 ? crimsonMarigoldMat : goldenMarigoldMat
        );
        flower.position.set(0, -f * 0.35, 0);
        pendantGroup.add(flower);
      }

      const endY = -pendantFlowers * 0.35;

      // Ornate Brass Bell
      const bell = new THREE.Mesh(bellGeo, brassMat);
      bell.position.set(0, endY - 0.25, 0);
      bell.castShadow = true;
      pendantGroup.add(bell);
      this.bellMeshes.push(bell);

      // Suspended Diya with Living Flame
      const diyaGroup = new THREE.Group();
      diyaGroup.position.set(0, endY - 0.72, 0.05);

      const diyaBowl = new THREE.Mesh(diyaBowlGeo, diyaMat);
      diyaGroup.add(diyaBowl);

      const flameGroup = new THREE.Group();
      flameGroup.position.set(0, 0.16, 0.14);

      const flameCore = new THREE.Mesh(flameCoreGeo, flameCoreMat);
      const flameAura = new THREE.Mesh(flameAuraGeo, flameAuraMat);
      flameGroup.add(flameCore);
      flameGroup.add(flameAura);
      diyaGroup.add(flameGroup);

      // Soft dynamic golden point light illuminating the carved palace arch
      const diyaLight = new THREE.PointLight(0xffaa33, 1.6, 9, 1.8);
      diyaLight.position.set(0, 0.35, 0.25);
      diyaGroup.add(diyaLight);

      pendantGroup.add(diyaGroup);

      this.diyas.push({
        group: diyaGroup,
        flameCore,
        flameAura,
        light: diyaLight,
        flickerSpeed: 7 + Math.random() * 4,
        flickerOffset: Math.random() * Math.PI * 2,
        baseLightIntensity: 1.6,
      });

      this.hangingPendants.push({
        group: pendantGroup,
        swaySpeed: 1.0 + idx * 0.1,
        swayOffset: idx * 0.8,
      });

      this.group.add(pendantGroup);
    });
  }

  public update(time: number) {
    // Subtle pendular sway of the hanging pendants
    this.hangingPendants.forEach((p) => {
      const angle = Math.sin(time * p.swaySpeed + p.swayOffset) * 0.025;
      p.group.rotation.z = angle;
      p.group.rotation.x = Math.cos(time * p.swaySpeed * 0.8 + p.swayOffset) * 0.01;
    });

    // Bell subtle counter-sway
    this.bellMeshes.forEach((bell, i) => {
      bell.rotation.z = Math.sin(time * 2.2 + i) * 0.04;
    });

    // Living Diya flame flickering
    this.diyas.forEach((diya) => {
      const flickerTime = time * diya.flickerSpeed + diya.flickerOffset;
      const scaleY = 1.0 + Math.sin(flickerTime) * 0.14 + Math.cos(flickerTime * 2.3) * 0.07;
      const scaleX = 1.0 + Math.cos(flickerTime * 1.8) * 0.09;
      diya.flameCore.scale.set(scaleX, scaleY, scaleX);
      diya.flameAura.scale.set(scaleX * 1.05, scaleY * 1.08, scaleX * 1.05);

      const tipWobble = Math.sin(flickerTime * 1.5) * 0.05;
      diya.flameCore.rotation.z = tipWobble;
      diya.flameAura.rotation.z = tipWobble * 1.1;

      if (diya.light) {
        const lightPulse =
          diya.baseLightIntensity +
          Math.sin(flickerTime * 1.7) * 0.35 +
          (Math.random() - 0.5) * 0.15;
        diya.light.intensity = Math.max(1.0, lightPulse);
      }
    });
  }

  public dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
  }
}
