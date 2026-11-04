import * as THREE from "three";

export class HappyDiwaliCenterpiece {
  public group: THREE.Group;
  private flameCore!: THREE.Mesh;
  private flameMid!: THREE.Mesh;
  private flameAura!: THREE.Mesh;
  private flameLight!: THREE.PointLight;
  private happyLight!: THREE.PointLight;
  private stars: { mesh: THREE.Mesh; spinSpeed: number; floatSpeed: number; baseY: number }[] = [];
  private sparkPoints!: THREE.Points;
  private sparkGeo!: THREE.BufferGeometry;
  private sparkPositions!: Float32Array;
  private sparkVelocities!: Float32Array;
  private sparkLifetimes!: Float32Array;
  private sparkMaxLife = 1.5;
  private sparkCount = 35;
  private materials: THREE.Material[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private wAnchorX = -0.04;
  private wAnchorY = 0.08;
  private happyAnchorX = -1.2;
  private happyAnchorY = 1.1;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = "HappyDiwaliCenterpiece";
    this.initCenterpiece();
  }

  private create4PointStarShape(outerRadius: number, innerRadius: number): THREE.Shape {
    const shape = new THREE.Shape();
    const points = 4;
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }

  /**
   * Procedural flame geometry with teardrop swell and a pointed base and tip.
   * Translated so y = 0 is the exact bottom tip of the flame.
   */
  private createFlameGeometry(height: number, radius: number): THREE.BufferGeometry {
    const geo = new THREE.ConeGeometry(radius, height, 24, 16);
    const pos = geo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      vertex.fromBufferAttribute(pos, i);
      const normalizedY = (vertex.y + height / 2) / height;

      // Natural teardrop profile:
      // Tapers to a point at bottom (y = 0)
      // Swells out around 35%-45%
      // Tapers to a fine tip at the top (y = 1)
      const swell = Math.sin(Math.pow(normalizedY, 0.72) * Math.PI) * 1.45;
      vertex.x *= swell;
      vertex.z *= swell;

      // Subtle organic tip flicker curve
      if (normalizedY > 0.62) {
        vertex.x += Math.pow(normalizedY - 0.62, 1.8) * 0.12;
      }

      pos.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geo.computeVertexNormals();
    geo.translate(0, height / 2, 0); // Bottom tip is now at y = 0
    this.geometries.push(geo);
    return geo;
  }

  private createTypographyTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Precise Measurement for "Diwali"
    const diwaliY = 620;
    ctx.font = "bold italic 340px 'Cinzel', 'Georgia', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const totalW = ctx.measureText("Diwali").width;
    const diW = ctx.measureText("Di").width;
    const diwW = ctx.measureText("Diw").width;
    const wCharW = diwW - diW;

    const startX = 1024 - totalW / 2;
    // The middle corner/peak of 'w' is located right in the center of 'w'
    const wMidPx = startX + diW + wCharW * 0.5;

    // 2. "H A P P Y" Typography — BRIGHT, GLOWING & FIERY
    // Sits above "Di" to the left of the flame
    const happyText = "H  A  P  P  Y";
    const happyX = startX + diW * 0.55;
    const happyY = 245;

    // Radiant Fiery Flame Aura behind "H A P P Y"
    const happyGlow = ctx.createRadialGradient(happyX, happyY, 15, happyX, happyY, 260);
    happyGlow.addColorStop(0, "rgba(255, 175, 20, 0.65)");
    happyGlow.addColorStop(0.35, "rgba(255, 80, 0, 0.35)");
    happyGlow.addColorStop(0.7, "rgba(255, 30, 0, 0.12)");
    happyGlow.addColorStop(1, "rgba(255, 20, 0, 0)");
    ctx.fillStyle = happyGlow;
    ctx.beginPath();
    ctx.arc(happyX, happyY, 260, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = "bold 100px 'Cinzel', 'Georgia', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Deep fiery chocolate shadow border
    ctx.lineWidth = 18;
    ctx.strokeStyle = "#280600";
    ctx.lineJoin = "round";
    ctx.strokeText(happyText, happyX, happyY);

    // Burning saffron flame contour
    ctx.lineWidth = 9;
    ctx.strokeStyle = "#ff4400";
    ctx.strokeText(happyText, happyX, happyY);

    // Fiery Molten Gold Gradient (white-hot core to burning ruby-amber)
    const happyGrad = ctx.createLinearGradient(0, happyY - 48, 0, happyY + 48);
    happyGrad.addColorStop(0, "#ffffff"); // Incandescent white-hot top
    happyGrad.addColorStop(0.18, "#fff8d0"); // Luminous brilliant gold
    happyGrad.addColorStop(0.5, "#ffba00"); // Rich fiery gold
    happyGrad.addColorStop(0.82, "#ff5900"); // Blazing saffron
    happyGrad.addColorStop(1, "#c62828"); // Fiery ruby ember
    ctx.fillStyle = happyGrad;
    ctx.fillText(happyText, happyX, happyY);

    // Crisp white-hot hairline highlight for bright burning edge
    ctx.lineWidth = 3.5;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
    ctx.strokeText(happyText, happyX, happyY);

    // 3. "Diwali" Lettering (Radiant Saffron-to-Gold Calligraphy)
    ctx.font = "bold italic 340px 'Cinzel', 'Georgia', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Outer dark bevel shadow border
    ctx.lineWidth = 34;
    ctx.strokeStyle = "#110400";
    ctx.lineJoin = "round";
    ctx.strokeText("Diwali", 1024, diwaliY);

    // Warm deep amber contour
    ctx.lineWidth = 18;
    ctx.strokeStyle = "#4e1b02";
    ctx.strokeText("Diwali", 1024, diwaliY);

    // Radiant Festive Saffron-to-Gold Gradient
    const diwaliGrad = ctx.createLinearGradient(0, diwaliY - 170, 0, diwaliY + 120);
    diwaliGrad.addColorStop(0, "#e63900");
    diwaliGrad.addColorStop(0.25, "#ff6400");
    diwaliGrad.addColorStop(0.65, "#ffa800");
    diwaliGrad.addColorStop(1, "#ffd54f");

    ctx.fillStyle = diwaliGrad;
    ctx.fillText("Diwali", 1024, diwaliY);

    // Crisp inner golden hairline highlight
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgba(255, 255, 220, 0.45)";
    ctx.strokeText("Diwali", 1024, diwaliY);

    // 4. Determine Exact Top Pixel of the Middle Corner of 'w'
    let wTopPx = diwaliY - 110;
    try {
      const sampleX = Math.round(wMidPx);
      const sampleW = 20;
      const startScanY = Math.max(0, Math.round(diwaliY - 220));
      const scanH = 220;
      const imgData = ctx.getImageData(sampleX - Math.floor(sampleW / 2), startScanY, sampleW, scanH);

      for (let row = 0; row < scanH; row++) {
        let found = false;
        for (let col = 0; col < sampleW; col++) {
          const alpha = imgData.data[(row * sampleW + col) * 4 + 3];
          if (alpha > 80) {
            found = true;
            break;
          }
        }
        if (found) {
          wTopPx = startScanY + row;
          break;
        }
      }
    } catch {
      wTopPx = diwaliY - 105;
    }

    // 5. Soft golden light bloom painted directly on the middle corner of 'w'
    const glowRadius = 120;
    const wGlow = ctx.createRadialGradient(wMidPx, wTopPx + 15, 6, wMidPx, wTopPx + 15, glowRadius);
    wGlow.addColorStop(0, "rgba(255, 235, 140, 0.65)");
    wGlow.addColorStop(0.35, "rgba(255, 140, 20, 0.35)");
    wGlow.addColorStop(1, "rgba(255, 100, 0, 0)");
    ctx.fillStyle = wGlow;
    ctx.beginPath();
    ctx.arc(wMidPx, wTopPx + 15, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // Convert canvas coordinates to 3D Plane coordinates (Plane is 8.6 x 4.3, centered at 0, 0)
    this.wAnchorX = ((wMidPx - 1024) / 2048) * 8.6;
    this.wAnchorY = ((512 - wTopPx) / 1024) * 4.3;

    this.happyAnchorX = ((happyX - 1024) / 2048) * 8.6;
    this.happyAnchorY = ((512 - happyY) / 1024) * 4.3;

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = true;
    return texture;
  }

  private initCenterpiece() {
    // Perfectly centered optical position: x: 0, y: 2.8, z: 9.6
    this.group.position.set(0, 2.8, 9.6);

    // 1. Sleek 3D Signboard (8.6 x 4.3 units) with warm fiery emissive response
    const texture = this.createTypographyTexture();
    const planeGeo = new THREE.PlaneGeometry(8.6, 4.3);
    this.geometries.push(planeGeo);

    const planeMat = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.05,
      roughness: 0.35,
      metalness: 0.25,
      emissive: new THREE.Color(0x441400),
      emissiveIntensity: 0.45,
      side: THREE.DoubleSide,
    });
    this.materials.push(planeMat);

    const typographyMesh = new THREE.Mesh(planeGeo, planeMat);
    this.group.add(typographyMesh);

    // 2. Living 3D Animated Flame (Rests directly on the middle corner of 'w')
    const flameCoreGeo = this.createFlameGeometry(0.85, 0.14);
    const flameMidGeo = this.createFlameGeometry(1.05, 0.22);
    const flameAuraGeo = this.createFlameGeometry(1.25, 0.32);

    const flameCoreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const flameMidMat = new THREE.MeshBasicMaterial({
      color: 0xffcc00,
      transparent: true,
      opacity: 0.88,
    });
    const flameAuraMat = new THREE.MeshBasicMaterial({
      color: 0xff4800,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    this.materials.push(flameCoreMat, flameMidMat, flameAuraMat);

    this.flameCore = new THREE.Mesh(flameCoreGeo, flameCoreMat);
    this.flameMid = new THREE.Mesh(flameMidGeo, flameMidMat);
    this.flameAura = new THREE.Mesh(flameAuraGeo, flameAuraMat);

    const flameGroup = new THREE.Group();
    // Positioned DIRECTLY on the middle corner of the letter 'w'!
    flameGroup.position.set(this.wAnchorX, this.wAnchorY, 0.05);
    flameGroup.add(this.flameCore);
    flameGroup.add(this.flameMid);
    flameGroup.add(this.flameAura);
    this.group.add(flameGroup);

    // 3. Delicate point light shining DIRECTLY ON the middle corner of 'w'
    this.flameLight = new THREE.PointLight(0xff9900, 3.4, 7.5, 1.6);
    this.flameLight.position.set(this.wAnchorX, this.wAnchorY + 0.12, 0.22);
    this.group.add(this.flameLight);

    // 4. Dedicated Fiery Light illuminating "H A P P Y"
    this.happyLight = new THREE.PointLight(0xffaa20, 2.6, 6.0, 1.6);
    this.happyLight.position.set(this.happyAnchorX, this.happyAnchorY, 0.22);
    this.group.add(this.happyLight);

    // 5. Rising Golden Spark Embers from the flame tip
    this.sparkGeo = new THREE.BufferGeometry();
    this.sparkPositions = new Float32Array(this.sparkCount * 3);
    this.sparkVelocities = new Float32Array(this.sparkCount * 3);
    this.sparkLifetimes = new Float32Array(this.sparkCount);

    for (let i = 0; i < this.sparkCount; i++) {
      this.resetSpark(i, true);
    }

    this.sparkGeo.setAttribute("position", new THREE.BufferAttribute(this.sparkPositions, 3));

    const sparkMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0xffdf70,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.materials.push(sparkMat);

    this.sparkPoints = new THREE.Points(this.sparkGeo, sparkMat);
    this.sparkPoints.frustumCulled = false;
    this.group.add(this.sparkPoints);

    // 6. Floating 3D 4-Pointed Stars (Reference Image 1: placed above "ali" to the right of the flame)
    const starConfigs = [
      { x: this.wAnchorX + 0.62, y: this.wAnchorY + 0.78, z: 0.12, size: 0.22, color: 0xdd2200 },
      { x: this.wAnchorX + 1.18, y: this.wAnchorY + 1.08, z: 0.15, size: 0.28, color: 0xff3300 },
      { x: this.wAnchorX + 0.92, y: this.wAnchorY + 0.36, z: 0.14, size: 0.20, color: 0xff5500 },
      { x: this.wAnchorX + 1.62, y: this.wAnchorY + 0.52, z: 0.12, size: 0.24, color: 0xff7700 },
      { x: this.wAnchorX + 2.05, y: this.wAnchorY + 0.82, z: 0.10, size: 0.18, color: 0xff9900 },
    ];

    starConfigs.forEach((cfg, idx) => {
      const starShape = this.create4PointStarShape(cfg.size, cfg.size * 0.35);
      const extrudeSettings = {
        depth: 0.04,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.02,
        bevelThickness: 0.025,
      };
      const starGeo = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
      this.geometries.push(starGeo);

      const starMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.25,
        metalness: 0.75,
        emissive: new THREE.Color(cfg.color),
        emissiveIntensity: 0.45,
      });
      this.materials.push(starMat);

      const starMesh = new THREE.Mesh(starGeo, starMat);
      starMesh.position.set(cfg.x, cfg.y, cfg.z);
      this.group.add(starMesh);

      this.stars.push({
        mesh: starMesh,
        spinSpeed: (idx % 2 === 0 ? 1 : -1) * (0.8 + idx * 0.2),
        floatSpeed: 1.5 + idx * 0.3,
        baseY: cfg.y,
      });
    });
  }

  private resetSpark(i: number, randomStart = false) {
    const idx3 = i * 3;
    this.sparkPositions[idx3] = this.wAnchorX + (Math.random() - 0.5) * 0.12;
    this.sparkPositions[idx3 + 1] =
      this.wAnchorY + 0.4 + (randomStart ? Math.random() * 0.9 : 0);
    this.sparkPositions[idx3 + 2] = 0.1 + (Math.random() - 0.5) * 0.1;

    this.sparkVelocities[idx3] = (Math.random() - 0.5) * 0.3;
    this.sparkVelocities[idx3 + 1] = 0.85 + Math.random() * 0.7;
    this.sparkVelocities[idx3 + 2] = (Math.random() - 0.5) * 0.2;

    this.sparkLifetimes[i] = randomStart ? Math.random() * this.sparkMaxLife : 0;
  }

  public update(time: number, delta: number) {
    const flicker1 = Math.sin(time * 9.5) * 0.12 + Math.cos(time * 14.2) * 0.08;
    const flicker2 = Math.cos(time * 11.0) * 0.1;
    const flameScaleY = 1.0 + flicker1;
    const flameScaleX = 1.0 - flicker1 * 0.4 + flicker2 * 0.3;

    this.flameCore.scale.set(flameScaleX, flameScaleY, flameScaleX);
    this.flameMid.scale.set(flameScaleX * 1.05, flameScaleY * 1.08, flameScaleX * 1.05);
    this.flameAura.scale.set(flameScaleX * 1.12, flameScaleY * 1.15, flameScaleX * 1.12);

    const flameTipAngle = Math.sin(time * 7.5) * 0.08;
    this.flameCore.rotation.z = flameTipAngle;
    this.flameMid.rotation.z = flameTipAngle * 1.15;
    this.flameAura.rotation.z = flameTipAngle * 1.3;

    // Direct warm light on letter 'w' flickering realistically
    const lightFlicker =
      3.2 + Math.sin(time * 14.0) * 0.5 + Math.cos(time * 20.0) * 0.25;
    this.flameLight.intensity = Math.max(2.2, lightFlicker);

    // Fiery pulsating glow on "H A P P Y"
    if (this.happyLight) {
      const happyFlicker =
        2.6 + Math.sin(time * 13.0) * 0.4 + Math.cos(time * 19.0) * 0.2;
      this.happyLight.intensity = Math.max(1.8, happyFlicker);
    }

    const pos = this.sparkPositions;
    const vel = this.sparkVelocities;
    const life = this.sparkLifetimes;

    for (let i = 0; i < this.sparkCount; i++) {
      life[i] += delta;
      if (life[i] >= this.sparkMaxLife) {
        this.resetSpark(i);
        continue;
      }

      const idx3 = i * 3;
      pos[idx3] += vel[idx3] * delta + Math.sin(time * 4 + i) * 0.006;
      pos[idx3 + 1] += vel[idx3 + 1] * delta;
      pos[idx3 + 2] += vel[idx3 + 2] * delta;
    }
    this.sparkGeo.attributes.position.needsUpdate = true;

    this.stars.forEach((s) => {
      s.mesh.rotation.z += s.spinSpeed * delta;
      s.mesh.rotation.y = Math.sin(time * 2 + s.baseY) * 0.25;
      s.mesh.position.y = s.baseY + Math.sin(time * s.floatSpeed) * 0.08;
    });

    this.group.position.y = 2.8 + Math.sin(time * 1.2) * 0.06;
  }

  public dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
  }
}
