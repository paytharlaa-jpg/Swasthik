import * as THREE from "three";

export type FireworkType =
  | "chrysanthemum"
  | "peony"
  | "willow"
  | "ring"
  | "multiburst"
  | "brocade"
  | "crossette";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  r: number;
  g: number;
  b: number;
  baseR: number;
  baseG: number;
  baseB: number;
  alpha: number;
  size: number;
  life: number;
  maxLife: number;
  gravity: number;
  drag: number;
  active: boolean;
  type: FireworkType;
  twinkle: boolean;
}

export class FireworksSystem {
  public points: THREE.Points;
  public flashLight: THREE.PointLight;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private maxParticles = 4800; // Expanded pool for delicate multi-cracker showers
  private particles: Particle[] = [];
  private positions: Float32Array;
  private colors: Float32Array;
  private flashIntensity = 0;

  constructor() {
    this.positions = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);

    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: 0,
        y: -500,
        z: -18,
        vx: 0,
        vy: 0,
        vz: 0,
        r: 1,
        g: 0.8,
        b: 0.2,
        baseR: 1,
        baseG: 0.8,
        baseB: 0.2,
        alpha: 0,
        size: 1,
        life: 0,
        maxLife: 1,
        gravity: -1.8,
        drag: 0.965,
        active: false,
        type: "chrysanthemum",
        twinkle: false,
      });
      this.positions[i * 3] = 0;
      this.positions[i * 3 + 1] = -500;
      this.positions[i * 3 + 2] = -18;
      this.colors[i * 3] = 1;
      this.colors[i * 3 + 1] = 0.8;
      this.colors[i * 3 + 2] = 0.2;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute("color", new THREE.BufferAttribute(this.colors, 3));

    // Custom high-luminance soft sparkling starlight texture
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.2, "rgba(255, 245, 180, 0.95)");
      grad.addColorStop(0.5, "rgba(255, 140, 20, 0.65)");
      grad.addColorStop(0.8, "rgba(255, 60, 0, 0.2)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Refined particle size for distant 3D crackers (sprinkling light rather than heavy smoke)
    this.material = new THREE.PointsMaterial({
      size: 1.6,
      map: texture,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;

    // Soft distant sky flare (not a blinding bomb shockwave)
    this.flashLight = new THREE.PointLight(0xffdf80, 0, 32, 1.8);
    this.flashLight.position.set(0, 7.0, -18);
  }

  /**
   * Main detonation trigger: spawns delicate, colorful twinkling crackers at distant 3D coordinates.
   */
  public triggerExplosion(
    x: number,
    y: number,
    z = -18,
    type: FireworkType = "chrysanthemum",
    colorHex = 0xffd700
  ) {
    const baseColor = new THREE.Color(colorHex);

    // Subtle distant sky glow flare
    this.flashLight.position.set(x, y, z);
    this.flashLight.color.copy(baseColor);
    this.flashIntensity = 2.4;
    this.flashLight.intensity = this.flashIntensity;

    switch (type) {
      case "chrysanthemum":
        this.spawnChrysanthemum(x, y, z, baseColor);
        break;
      case "peony":
        this.spawnPeony(x, y, z, baseColor);
        break;
      case "willow":
        this.spawnWillow(x, y, z, baseColor);
        break;
      case "ring":
        this.spawnRing(x, y, z, baseColor);
        break;
      case "multiburst":
        this.spawnMultiBurst(x, y, z, baseColor);
        break;
      case "brocade":
        this.spawnBrocade(x, y, z, baseColor);
        break;
      case "crossette":
        this.spawnCrossette(x, y, z, baseColor);
        break;
    }
  }

  /**
   * Brocade Crown: Soft weeping golden stardust with diamond starlight tips
   */
  private spawnBrocade(x: number, y: number, z: number, color: THREE.Color) {
    const count = 220;
    let spawned = 0;

    for (let i = 0; i < this.maxParticles && spawned < count; i++) {
      const p = this.particles[i];
      if (!p.active) {
        const phi = Math.acos(1 - (2 * (spawned + 0.5)) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * spawned;
        // Controlled, gentle cracker expansion velocity
        const speed = 3.6 + Math.random() * 2.2;

        p.x = x;
        p.y = y;
        p.z = z;
        p.vx = Math.sin(phi) * Math.cos(theta) * speed;
        p.vy = Math.cos(phi) * speed * 0.8 + 0.9;
        p.vz = Math.sin(phi) * Math.sin(theta) * speed;

        if (spawned % 5 === 0) {
          p.baseR = 0.2;
          p.baseG = 0.9;
          p.baseB = 1.0; // Cyan sparkling tips
        } else {
          p.baseR = 1.0;
          p.baseG = 0.84;
          p.baseB = 0.24; // 24K Gold
        }

        p.r = 1.0;
        p.g = 0.98;
        p.b = 0.85;

        p.alpha = 1.0;
        p.life = 0;
        p.maxLife = 2.0 + Math.random() * 0.7;
        p.gravity = -1.8;
        p.drag = 0.968;
        p.active = true;
        p.type = "brocade";
        p.twinkle = true;
        spawned++;
      }
    }
  }

  /**
   * Crossette (Crackling Spider): Delicate radiating arms of crackling starlight
   */
  private spawnCrossette(x: number, y: number, z: number, color: THREE.Color) {
    const armCount = 7;
    const particlesPerArm = 20;

    for (let a = 0; a < armCount; a++) {
      const angle = (a / armCount) * Math.PI * 2;
      const armElev = (Math.random() - 0.5) * 0.5;
      const speed = 4.4 + Math.random() * 1.5;

      const armVx = Math.cos(angle) * speed;
      const armVy = Math.sin(angle) * speed + 0.5;
      const armVz = armElev * speed;

      let spawnedInArm = 0;
      for (let i = 0; i < this.maxParticles && spawnedInArm < particlesPerArm; i++) {
        const p = this.particles[i];
        if (!p.active) {
          p.x = x;
          p.y = y;
          p.z = z;
          p.vx = armVx + (Math.random() - 0.5) * 0.8;
          p.vy = armVy + (Math.random() - 0.5) * 0.8;
          p.vz = armVz + (Math.random() - 0.5) * 0.8;

          p.baseR = color.r;
          p.baseG = color.g;
          p.baseB = color.b;
          p.r = 1.0;
          p.g = 0.95;
          p.b = 0.6;

          p.alpha = 1.0;
          p.life = 0;
          p.maxLife = 1.7 + Math.random() * 0.5;
          p.gravity = -1.6;
          p.drag = 0.962;
          p.active = true;
          p.type = "crossette";
          p.twinkle = true;
          spawnedInArm++;
        }
      }
    }
  }

  /**
   * Chrysanthemum: Traditional spherical cracker with sparkling comet tips
   */
  private spawnChrysanthemum(x: number, y: number, z: number, color: THREE.Color) {
    const count = 220;
    let spawned = 0;

    for (let i = 0; i < this.maxParticles && spawned < count; i++) {
      const p = this.particles[i];
      if (!p.active) {
        const phi = Math.acos(1 - (2 * (spawned + 0.5)) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * spawned;
        const speed = 3.4 + Math.random() * 2.2;

        p.x = x;
        p.y = y;
        p.z = z;
        p.vx = Math.sin(phi) * Math.cos(theta) * speed;
        p.vy = Math.cos(phi) * speed + 0.6;
        p.vz = Math.sin(phi) * Math.sin(theta) * speed;

        p.baseR = color.r;
        p.baseG = color.g;
        p.baseB = color.b;
        p.r = color.r;
        p.g = color.g;
        p.b = color.b;

        p.alpha = 1.0;
        p.life = 0;
        p.maxLife = 1.7 + Math.random() * 0.6;
        p.gravity = -1.7;
        p.drag = 0.965;
        p.active = true;
        p.type = "chrysanthemum";
        p.twinkle = true;
        spawned++;
      }
    }
  }

  /**
   * Prismatic Peony: A constellation of rich jewel-toned sparkling lights
   */
  private spawnPeony(x: number, y: number, z: number, color: THREE.Color) {
    const count = 240;
    let spawned = 0;

    const palette = [
      new THREE.Color(0x00e5ff), // Electric Cyan
      new THREE.Color(0xff1744), // Ruby Crimson
      new THREE.Color(0xffea00), // Topaz Gold
      new THREE.Color(0xd500f9), // Amethyst Violet
      new THREE.Color(0x00e676), // Emerald Green
      new THREE.Color(0xff6d00), // Saffron Amber
    ];

    for (let i = 0; i < this.maxParticles && spawned < count; i++) {
      const p = this.particles[i];
      if (!p.active) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random());
        // Gentle expanding radius
        const speed = (3.5 + Math.random() * 2.4) * r;

        p.x = x;
        p.y = y;
        p.z = z;
        p.vx = Math.sin(phi) * Math.cos(theta) * speed;
        p.vy = Math.sin(phi) * Math.sin(theta) * speed + 0.4;
        p.vz = Math.cos(phi) * speed;

        const pickColor = palette[spawned % palette.length];
        p.baseR = pickColor.r;
        p.baseG = pickColor.g;
        p.baseB = pickColor.b;
        p.r = 1.0;
        p.g = 1.0;
        p.b = 1.0;

        p.alpha = 1.0;
        p.life = 0;
        p.maxLife = 1.6 + Math.random() * 0.5;
        p.gravity = -1.5;
        p.drag = 0.958;
        p.active = true;
        p.type = "peony";
        p.twinkle = true;
        spawned++;
      }
    }
  }

  /**
   * Weeping Willow: Golden sparkling rain drifting delicately down like fairy lights
   */
  private spawnWillow(x: number, y: number, z: number, color: THREE.Color) {
    const count = 230;
    let spawned = 0;

    for (let i = 0; i < this.maxParticles && spawned < count; i++) {
      const p = this.particles[i];
      if (!p.active) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const speed = 2.4 + Math.random() * 1.8;

        p.x = x;
        p.y = y;
        p.z = z;
        p.vx = Math.sin(phi) * Math.cos(theta) * speed;
        p.vy = Math.cos(phi) * speed * 0.6 + 0.8;
        p.vz = Math.sin(phi) * Math.sin(theta) * speed;

        p.baseR = 1.0;
        p.baseG = 0.85;
        p.baseB = 0.3;
        p.r = 1.0;
        p.g = 0.95;
        p.b = 0.6;

        p.alpha = 1.0;
        p.life = 0;
        p.maxLife = 2.4 + Math.random() * 0.8;
        p.gravity = -2.0;
        p.drag = 0.972;
        p.active = true;
        p.type = "willow";
        p.twinkle = true;
        spawned++;
      }
    }
  }

  /**
   * Ring: A sparkling cosmic halo of colorful lights
   */
  private spawnRing(x: number, y: number, z: number, color: THREE.Color) {
    const count = 180;
    let spawned = 0;

    const tiltX = (Math.random() - 0.5) * 0.7;
    const tiltZ = (Math.random() - 0.5) * 0.7;

    for (let i = 0; i < this.maxParticles && spawned < count; i++) {
      const p = this.particles[i];
      if (!p.active) {
        const angle = (spawned / count) * Math.PI * 2;
        const speed = 3.8 + (Math.random() - 0.5) * 0.9;

        const rawVx = Math.cos(angle) * speed;
        const rawVy = Math.sin(angle) * speed;

        p.x = x;
        p.y = y;
        p.z = z;
        p.vx = rawVx;
        p.vy = rawVy * Math.cos(tiltX);
        p.vz = rawVy * Math.sin(tiltZ);

        p.baseR = color.r;
        p.baseG = color.g;
        p.baseB = color.b;
        p.r = color.r;
        p.g = color.g;
        p.b = color.b;

        p.alpha = 1.0;
        p.life = 0;
        p.maxLife = 1.5 + Math.random() * 0.4;
        p.gravity = -1.4;
        p.drag = 0.96;
        p.active = true;
        p.type = "ring";
        p.twinkle = true;
        spawned++;
      }
    }
  }

  /**
   * Multi-Burst Bouquet: Miniature staggered sparkling bursts
   */
  private spawnMultiBurst(x: number, y: number, z: number, color: THREE.Color) {
    this.spawnChrysanthemum(x, y, z, color);

    const subOffsets = [
      { dx: -1.6, dy: 1.0, dz: -0.8, color: 0x00e5ff },
      { dx: 1.6, dy: 1.2, dz: 0.6, color: 0xff3b00 },
      { dx: -1.0, dy: -1.3, dz: 0.8, color: 0xffd700 },
      { dx: 1.2, dy: -1.1, dz: -0.9, color: 0x00ff88 },
    ];

    subOffsets.forEach((sub, idx) => {
      setTimeout(() => {
        this.spawnPeony(x + sub.dx, y + sub.dy, z + sub.dz, new THREE.Color(sub.color));
      }, 220 + idx * 80);
    });
  }

  public update(delta: number) {
    if (this.flashIntensity > 0) {
      this.flashIntensity = Math.max(0, this.flashIntensity - delta * 24.0);
      this.flashLight.intensity = this.flashIntensity;
    }

    const pos = this.positions;
    const col = this.colors;
    let anyActive = false;

    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];
      if (!p.active) continue;

      anyActive = true;
      p.life += delta;

      if (p.life >= p.maxLife) {
        p.active = false;
        pos[i * 3 + 1] = -500;
        col[i * 3] = 0;
        col[i * 3 + 1] = 0;
        col[i * 3 + 2] = 0;
        continue;
      }

      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vz *= p.drag;
      p.vy += p.gravity * delta;

      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.z += p.vz * delta;

      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;

      const progress = p.life / p.maxLife;
      const fade = Math.pow(1.0 - progress, 1.35);

      let r = p.baseR * fade;
      let g = p.baseG * fade;
      let b = p.baseB * fade;

      // Sparkling diamond glitter shimmer (Diwali phuljhadi / cracker twinkle)
      if (p.twinkle && progress > 0.2) {
        const sparkle = 0.65 + Math.sin(p.life * 32.0 + i * 1.8) * 0.45;
        r *= sparkle;
        g *= sparkle;
        b *= sparkle;
      }

      col[i * 3] = Math.max(0, Math.min(1, r));
      col[i * 3 + 1] = Math.max(0, Math.min(1, g));
      col[i * 3 + 2] = Math.max(0, Math.min(1, b));
    }

    if (anyActive) {
      this.geometry.attributes.position.needsUpdate = true;
      this.geometry.attributes.color.needsUpdate = true;
    }
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}