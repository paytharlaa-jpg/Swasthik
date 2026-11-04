import * as THREE from "three";

export class ParticleSystem {
  public points: THREE.Points;
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private particleCount = 450;
  private positions: Float32Array;
  private velocities: Float32Array;
  private phases: Float32Array;

  constructor(theme: "diwali" | "evergreen" = "diwali") {
    this.positions = new Float32Array(this.particleCount * 3);
    this.velocities = new Float32Array(this.particleCount * 3);
    this.phases = new Float32Array(this.particleCount);

    const isDiwali = theme === "diwali";

    for (let i = 0; i < this.particleCount; i++) {
      // Spread across visible camera frustum
      this.positions[i * 3] = (Math.random() - 0.5) * 40;
      this.positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      this.positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      // Gentle drift velocity
      this.velocities[i * 3] = (Math.random() - 0.5) * 0.4;
      this.velocities[i * 3 + 1] = 0.2 + Math.random() * 0.6;
      this.velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

      this.phases[i] = Math.random() * Math.PI * 2;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3));

    // Circular soft mote texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      if (isDiwali) {
        grad.addColorStop(0, "rgba(255, 235, 160, 1)");
        grad.addColorStop(0.4, "rgba(232, 139, 39, 0.7)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        grad.addColorStop(0, "rgba(200, 255, 210, 1)");
        grad.addColorStop(0.4, "rgba(11, 74, 54, 0.6)");
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    this.material = new THREE.PointsMaterial({
      size: isDiwali ? 0.75 : 0.65,
      map: texture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
  }

  public update(time: number, delta: number) {
    const pos = this.positions;
    for (let i = 0; i < this.particleCount; i++) {
      const phase = this.phases[i];

      // Subtle organic harmonic wave
      pos[i * 3] += Math.sin(time * 0.8 + phase) * 0.02 + this.velocities[i * 3] * delta;
      pos[i * 3 + 1] += this.velocities[i * 3 + 1] * delta;
      pos[i * 3 + 2] += Math.cos(time * 0.6 + phase) * 0.02 + this.velocities[i * 3 + 2] * delta;

      // Wrap-around bounds
      if (pos[i * 3 + 1] > 18) {
        pos[i * 3 + 1] = -10;
        pos[i * 3] = (Math.random() - 0.5) * 40;
      }
    }
    this.geometry.attributes.position.needsUpdate = true;
  }

  public dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}

