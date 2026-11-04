import * as THREE from "three";

export class CelestialSky {
  public group: THREE.Group;
  private moonMesh!: THREE.Mesh;
  private moonHalo!: THREE.Sprite;
  private moonLight!: THREE.PointLight;
  private starPoints!: THREE.Points;
  private starGeo!: THREE.BufferGeometry;
  private starMat!: THREE.PointsMaterial;
  private materials: THREE.Material[] = [];
  private geometries: THREE.BufferGeometry[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = "CelestialSky";
    this.initSky();
  }

  /**
   * Generates a high-resolution, realistic procedural lunar surface texture
   * featuring lunar maria, highlands, and crater ray systems.
   */
  private createRealisticMoonTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;

    // 1. Base Lunar Highlands (Silvery-pearl tone)
    ctx.fillStyle = "#d2d6df";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Subtle Noise & Surface Cratering
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 38;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise + 4));
    }
    ctx.putImageData(imgData, 0, 0);

    // 3. Dark Basaltic Lunar Maria (Sea of Tranquility, Oceanus Procellarum, Mare Serenitatis)
    const maria = [
      { x: 380, y: 190, rx: 110, ry: 75, angle: -0.2, alpha: 0.58 },
      { x: 560, y: 170, rx: 130, ry: 85, angle: 0.15, alpha: 0.62 },
      { x: 670, y: 220, rx: 95, ry: 70, angle: -0.1, alpha: 0.55 },
      { x: 280, y: 250, rx: 120, ry: 90, angle: 0.3, alpha: 0.60 },
      { x: 470, y: 270, rx: 100, ry: 65, angle: -0.25, alpha: 0.52 },
      { x: 800, y: 200, rx: 75, ry: 60, angle: 0.05, alpha: 0.48 },
      { x: 170, y: 210, rx: 80, ry: 55, angle: -0.15, alpha: 0.5 },
      { x: 510, y: 350, rx: 85, ry: 50, angle: 0.1, alpha: 0.45 },
    ];

    maria.forEach((m) => {
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(m.angle);

      const grad = ctx.createRadialGradient(0, 0, m.rx * 0.15, 0, 0, m.rx);
      grad.addColorStop(0, `rgba(58, 64, 76, ${m.alpha})`);
      grad.addColorStop(0.55, `rgba(75, 82, 96, ${m.alpha * 0.8})`);
      grad.addColorStop(0.85, `rgba(110, 118, 132, ${m.alpha * 0.4})`);
      grad.addColorStop(1, "rgba(210, 214, 223, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(0, 0, m.rx, m.ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // 4. Prominent Impact Craters with Ejecta Rays (Tycho, Copernicus, Kepler)
    const craters = [
      { x: 520, y: 390, r: 18, rayCount: 14, rayLen: 160 }, // Tycho with large bright rays
      { x: 340, y: 210, r: 16, rayCount: 10, rayLen: 110 }, // Copernicus
      { x: 260, y: 220, r: 12, rayCount: 8, rayLen: 75 },   // Kepler
      { x: 690, y: 290, r: 14, rayCount: 6, rayLen: 65 },
      { x: 440, y: 140, r: 11, rayCount: 6, rayLen: 50 },
    ];

    craters.forEach((c) => {
      // Bright ejecta rays
      ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
      ctx.lineWidth = 1.8;
      for (let i = 0; i < c.rayCount; i++) {
        const angle = (i / c.rayCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
        const len = c.rayLen * (0.7 + Math.random() * 0.5);
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x + Math.cos(angle) * len, c.y + Math.sin(angle) * len);
        ctx.stroke();
      }

      // Bright crater rim
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fill();

      // Shadowed interior floor
      ctx.fillStyle = "#5c6370";
      ctx.beginPath();
      ctx.arc(c.x + 2, c.y + 1, c.r * 0.65, 0, Math.PI * 2);
      ctx.fill();

      // Central peak
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(c.x + 1, c.y + 0.5, c.r * 0.22, 0, Math.PI * 2);
      ctx.fill();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  }

  /**
   * Generates a soft, ethereal atmospheric lunar glow corona
   */
  private createMoonHaloTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    const grad = ctx.createRadialGradient(128, 128, 12, 128, 128, 126);
    grad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
    grad.addColorStop(0.25, "rgba(220, 235, 255, 0.45)");
    grad.addColorStop(0.55, "rgba(180, 215, 255, 0.18)");
    grad.addColorStop(0.85, "rgba(140, 180, 255, 0.05)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  /**
   * Tiny circular alpha mask for soft natural pinprick stars
   */
  private createStarTexture(): THREE.CanvasTexture {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d")!;

    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    grad.addColorStop(0.4, "rgba(240, 245, 255, 0.75)");
    grad.addColorStop(0.8, "rgba(200, 225, 255, 0.2)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  private initSky() {
    // =========================================================================
    // 1. LITTLE LITTLE STARS IN THE DEEP BACKGROUND
    // Very small, delicate pinpricks of light in the far distant sky dome
    // =========================================================================
    const starCount = 680;
    this.starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const idx = i * 3;
      // Scatter in a wide deep sky hemisphere behind palace and fireworks (z between -45 and -68)
      positions[idx] = (Math.random() - 0.5) * 85;
      positions[idx + 1] = 1.0 + Math.random() * 26.0;
      positions[idx + 2] = -45.0 - Math.random() * 24.0;

      // Soft natural starlight tints: 75% diamond white, 15% warm champagne, 10% pale cyan
      const roll = Math.random();
      if (roll < 0.75) {
        colors[idx] = 1.0;
        colors[idx + 1] = 1.0;
        colors[idx + 2] = 1.0;
      } else if (roll < 0.9) {
        colors[idx] = 1.0;
        colors[idx + 1] = 0.94;
        colors[idx + 2] = 0.78; // Champagne gold
      } else {
        colors[idx] = 0.82;
        colors[idx + 1] = 0.94;
        colors[idx + 2] = 1.0; // Pale celestial cyan
      }
    }

    this.starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.starGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.geometries.push(this.starGeo);

    const starTexture = this.createStarTexture();

    // Very tiny, delicate point size (0.045) — small subtle starlight, not chunky dots!
    this.starMat = new THREE.PointsMaterial({
      size: 0.045,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.materials.push(this.starMat);

    this.starPoints = new THREE.Points(this.starGeo, this.starMat);
    this.starPoints.frustumCulled = false;
    this.group.add(this.starPoints);

    // =========================================================================
    // 2. REAL 3D ROTATING MOON
    // Framed beautifully in the upper right sky through the royal cusped arch
    // =========================================================================
    const moonTexture = this.createRealisticMoonTexture();
    const moonGeo = new THREE.SphereGeometry(1.5, 48, 48);
    this.geometries.push(moonGeo);

    const moonMat = new THREE.MeshStandardMaterial({
      map: moonTexture,
      roughness: 0.85,
      metalness: 0.1,
      emissive: new THREE.Color(0xdce5f5),
      emissiveIntensity: 0.42,
    });
    this.materials.push(moonMat);

    this.moonMesh = new THREE.Mesh(moonGeo, moonMat);
    // Positioned in upper right sky, framed inside the grand archway
    this.moonMesh.position.set(6.8, 7.5, -34.0);
    this.moonMesh.rotation.z = 0.18; // Natural lunar axis tilt
    this.group.add(this.moonMesh);

    // Ethereal Atmospheric Lunar Halo Sprite
    const haloTexture = this.createMoonHaloTexture();
    const haloMat = new THREE.SpriteMaterial({
      map: haloTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.materials.push(haloMat);

    this.moonHalo = new THREE.Sprite(haloMat);
    this.moonHalo.position.set(6.8, 7.5, -33.8);
    this.moonHalo.scale.set(4.8, 4.8, 1);
    this.group.add(this.moonHalo);

    // Soft cool silvery moonlight casting a gentle celestial glow
    this.moonLight = new THREE.PointLight(0xd8e8ff, 1.2, 28, 1.8);
    this.moonLight.position.set(6.8, 7.5, -32.5);
    this.group.add(this.moonLight);
  }

  public update(time: number, delta: number) {
    // 1. Slow, realistic real-time axial rotation of the 3D Moon
    if (this.moonMesh) {
      this.moonMesh.rotation.y += delta * 0.035;
    }

    // 2. Subtle celestial halo breathing
    if (this.moonHalo) {
      const breath = 1.0 + Math.sin(time * 0.8) * 0.05;
      this.moonHalo.scale.set(4.8 * breath, 4.8 * breath, 1);
    }

    // 3. Gentle twinkling of the background tiny stars
    if (this.starMat) {
      this.starMat.opacity = 0.75 + Math.sin(time * 1.6) * 0.15;
    }
  }

  public setMobile(isMobile: boolean) {
    const targetX = isMobile ? 2.6 : 6.8;
    const targetY = isMobile ? 8.2 : 7.5;
    if (this.moonMesh) this.moonMesh.position.set(targetX, targetY, -34.0);
    if (this.moonHalo) this.moonHalo.position.set(targetX, targetY, -33.8);
    if (this.moonLight) this.moonLight.position.set(targetX, targetY, -32.5);
  }

  public dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
  }
}

