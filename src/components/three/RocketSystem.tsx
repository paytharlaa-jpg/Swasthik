import * as THREE from "three";
import { FireworksSystem, FireworkType } from "./FireworksSystem";

interface ActiveRocket {
  group: THREE.Group;
  light: THREE.PointLight;
  trailPoints: THREE.Points;
  trailGeo: THREE.BufferGeometry;
  trailPositions: Float32Array;
  trailColors: Float32Array;
  trailAlphas: Float32Array;
  trailHead: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  targetY: number;
  active: boolean;
  isShootingStar: boolean;
  type: FireworkType;
  colorHex: number;
}

export class RocketSystem {
  public group: THREE.Group;
  private fireworks: FireworksSystem;
  private rockets: ActiveRocket[] = [];
  private rocketCount = 14;
  private launchTimer = 0;
  private launchInterval = 1.35;
  private salvoTimer = 0;
  private salvoInterval = 6.0;
  private materials: THREE.Material[] = [];
  private geometries: THREE.BufferGeometry[] = [];

  constructor(fireworks: FireworksSystem) {
    this.group = new THREE.Group();
    this.group.name = "DistantRocketSystem";
    this.fireworks = fireworks;
    this.initRockets();

    // Initial sequence in the far distance
    setTimeout(() => {
      this.launchShootingStar(-18, 1);
    }, 150);

    setTimeout(() => {
      this.launchRocket(-8.0, 7.5, "chrysanthemum", 0xffd700);
    }, 550);

    setTimeout(() => {
      this.launchRocket(8.0, 8.2, "peony", 0x00e5ff);
    }, 1050);

    setTimeout(() => {
      this.launchShootingStar(18, -1);
    }, 1650);

    setTimeout(() => {
      this.launchSalvo();
    }, 2500);
  }

  private initRockets() {
    // Slender, elegant 3D rockets scaled for distant 3D perspective
    const bodyGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 8);
    const noseGeo = new THREE.ConeGeometry(0.12, 0.35, 8);
    const finGeo = new THREE.BoxGeometry(0.02, 0.25, 0.16);
    const stickGeo = new THREE.CylinderGeometry(0.012, 0.012, 1.5, 6);
    const exhaustGeo = new THREE.SphereGeometry(0.1, 6, 6);

    this.geometries.push(bodyGeo, noseGeo, finGeo, stickGeo, exhaustGeo);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25,
      emissive: new THREE.Color(0x3a2200),
      emissiveIntensity: 0.4,
    });

    const noseMat = new THREE.MeshStandardMaterial({
      color: 0xd61c1c,
      metalness: 0.4,
      roughness: 0.2,
      emissive: new THREE.Color(0x660000),
      emissiveIntensity: 0.6,
    });

    const stickMat = new THREE.MeshStandardMaterial({
      color: 0x825a2c,
      roughness: 0.9,
    });

    const exhaustMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    this.materials.push(bodyMat, noseMat, stickMat, exhaustMat);

    // Glowing spark particle texture for delicate starlight exhaust trail
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
      grad.addColorStop(0.3, "rgba(255, 220, 90, 0.95)");
      grad.addColorStop(0.7, "rgba(255, 100, 0, 0.35)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const sparkTexture = new THREE.CanvasTexture(canvas);

    const trailCount = 55;

    for (let i = 0; i < this.rocketCount; i++) {
      const rocketGroup = new THREE.Group();

      const body = new THREE.Mesh(bodyGeo, bodyMat);
      rocketGroup.add(body);

      const nose = new THREE.Mesh(noseGeo, noseMat);
      nose.position.y = 0.55;
      rocketGroup.add(nose);

      for (let f = 0; f < 3; f++) {
        const fin = new THREE.Mesh(finGeo, bodyMat);
        const angle = (f * Math.PI * 2) / 3;
        fin.position.set(Math.sin(angle) * 0.11, -0.3, Math.cos(angle) * 0.11);
        fin.rotation.y = angle;
        rocketGroup.add(fin);
      }

      const stick = new THREE.Mesh(stickGeo, stickMat);
      stick.position.y = -0.95;
      rocketGroup.add(stick);

      const exhaust = new THREE.Mesh(exhaustGeo, exhaustMat);
      exhaust.position.y = -0.42;
      rocketGroup.add(exhaust);

      // Subtle distant rocket tip flare
      const rocketLight = new THREE.PointLight(0xffaa20, 1.5, 12, 1.8);
      rocketLight.position.y = -0.45;
      rocketGroup.add(rocketLight);

      this.group.add(rocketGroup);

      const trailGeo = new THREE.BufferGeometry();
      const trailPositions = new Float32Array(trailCount * 3);
      const trailColors = new Float32Array(trailCount * 3);
      const trailAlphas = new Float32Array(trailCount);

      for (let t = 0; t < trailCount; t++) {
        trailPositions[t * 3] = 0;
        trailPositions[t * 3 + 1] = -500;
        trailPositions[t * 3 + 2] = -18;
        trailColors[t * 3] = 1.0;
        trailColors[t * 3 + 1] = 0.75;
        trailColors[t * 3 + 2] = 0.2;
        trailAlphas[t] = 0;
      }

      trailGeo.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
      trailGeo.setAttribute("color", new THREE.BufferAttribute(trailColors, 3));
      this.geometries.push(trailGeo);

      // Delicate distant sparkling trail
      const trailMat = new THREE.PointsMaterial({
        size: 1.4,
        map: sparkTexture,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      this.materials.push(trailMat);

      const trailPoints = new THREE.Points(trailGeo, trailMat);
      trailPoints.frustumCulled = false;
      this.group.add(trailPoints);

      rocketGroup.position.set(0, -500, -18);

      this.rockets.push({
        group: rocketGroup,
        light: rocketLight,
        trailPoints,
        trailGeo,
        trailPositions,
        trailColors,
        trailAlphas,
        trailHead: 0,
        x: 0,
        y: -500,
        z: -18,
        vx: 0,
        vy: 0,
        vz: 0,
        targetY: 7.5,
        active: false,
        isShootingStar: false,
        type: "chrysanthemum",
        colorHex: 0xffd700,
      });
    }
  }

  /**
   * Standard distant festive rocket soaring high into the deep 3D night sky
   */
  public launchRocket(
    forcedX?: number,
    forcedTargetY?: number,
    forcedType?: FireworkType,
    forcedColor?: number
  ) {
    const rocket = this.rockets.find((r) => !r.active);
    if (!rocket) return;

    rocket.active = true;
    rocket.isShootingStar = false;

    // Wide launch horizon across distant sky
    const launchXOptions = [-18.0, -12.0, -6.0, 0.0, 6.0, 12.0, 18.0];
    const pickX =
      forcedX !== undefined
        ? forcedX
        : launchXOptions[Math.floor(Math.random() * launchXOptions.length)];

    rocket.x = pickX + (Math.random() - 0.5) * 2.0;
    rocket.y = -5.5;
    // Deep in the 3D background (z between -14 and -22)
    rocket.z = -18.0 + (Math.random() - 0.5) * 8.0;

    const inwardPull = (0 - rocket.x) * 0.09;
    rocket.vx = inwardPull + (Math.random() - 0.5) * 0.6;
    rocket.vy = 15.0 + Math.random() * 3.0;
    rocket.vz = (Math.random() - 0.5) * 0.5;

    rocket.targetY =
      forcedTargetY !== undefined ? forcedTargetY : 7.2 + Math.random() * 2.8;

    const patterns: { type: FireworkType; colorHex: number }[] = [
      { type: "brocade", colorHex: 0xffd700 }, // 24K Gold Starlight
      { type: "peony", colorHex: 0x00e5ff }, // Prismatic Jewel
      { type: "crossette", colorHex: 0xff3b00 }, // Crackling Saffron
      { type: "willow", colorHex: 0xffaa00 }, // Weeping Gold
      { type: "ring", colorHex: 0x00ff88 }, // Emerald Halo
      { type: "multiburst", colorHex: 0xff1744 }, // Ruby Bouquet
    ];
    const pick = patterns[Math.floor(Math.random() * patterns.length)];

    rocket.type = forcedType !== undefined ? forcedType : pick.type;
    rocket.colorHex = forcedColor !== undefined ? forcedColor : pick.colorHex;

    rocket.group.position.set(rocket.x, rocket.y, rocket.z);
    rocket.group.rotation.z = -rocket.vx * 0.06;

    for (let t = 0; t < 55; t++) {
      rocket.trailPositions[t * 3] = 0;
      rocket.trailPositions[t * 3 + 1] = -500;
      rocket.trailPositions[t * 3 + 2] = rocket.z;
      rocket.trailAlphas[t] = 0;
    }
    rocket.trailGeo.attributes.position.needsUpdate = true;
  }

  /**
   * Distant Shooting Star Comet: Arcing gracefully across the far night sky
   */
  public launchShootingStar(startX = -18, direction = 1) {
    const rocket = this.rockets.find((r) => !r.active);
    if (!rocket) return;

    rocket.active = true;
    rocket.isShootingStar = true;

    rocket.x = startX;
    rocket.y = -2.5;
    // Deep 3D background (z ~ -20)
    rocket.z = -20.0 + (Math.random() - 0.5) * 4.0;

    rocket.vx = direction * (9.5 + Math.random() * 2.2);
    rocket.vy = 11.5 + Math.random() * 2.0;
    rocket.vz = (Math.random() - 0.5) * 0.5;
    rocket.targetY = 7.5 + Math.random() * 2.0;

    const cometPatterns: { type: FireworkType; colorHex: number }[] = [
      { type: "brocade", colorHex: 0xffd700 },
      { type: "peony", colorHex: 0x00e5ff },
      { type: "willow", colorHex: 0xffaa00 },
    ];
    const pick = cometPatterns[Math.floor(Math.random() * cometPatterns.length)];
    rocket.type = pick.type;
    rocket.colorHex = pick.colorHex;

    rocket.group.position.set(rocket.x, rocket.y, rocket.z);
    rocket.group.rotation.z = -Math.atan2(rocket.vx, rocket.vy);

    for (let t = 0; t < 55; t++) {
      rocket.trailPositions[t * 3] = 0;
      rocket.trailPositions[t * 3 + 1] = -500;
      rocket.trailPositions[t * 3 + 2] = rocket.z;
      rocket.trailAlphas[t] = 0;
    }
    rocket.trailGeo.attributes.position.needsUpdate = true;
  }

  /**
   * Distant Fan Salvo: Synchronized 3-rocket fan in the far distance
   */
  public launchSalvo() {
    const angles = [-10.0, 0.0, 10.0];
    const types: FireworkType[] = ["peony", "brocade", "crossette"];
    const colors = [0x00e5ff, 0xffd700, 0xff1744];

    angles.forEach((x, idx) => {
      setTimeout(() => {
        this.launchRocket(x, 7.5 + idx * 0.4, types[idx], colors[idx]);
      }, idx * 140);
    });
  }

  /**
   * Interactive Cracker Trigger: Detonates in the distant 3D sky at z = -18
   */
  public launchInteractiveCracker(targetWorldX: number, targetWorldY: number) {
    const rocket = this.rockets.find((r) => !r.active);
    if (!rocket) {
      this.fireworks.triggerExplosion(
        targetWorldX * 1.5,
        targetWorldY,
        -18,
        "brocade",
        0xffd700
      );
      return;
    }

    rocket.active = true;
    rocket.isShootingStar = false;
    rocket.x = targetWorldX * 0.8;
    rocket.y = -5.0;
    rocket.z = -18.0;

    const dx = targetWorldX * 1.4 - rocket.x;
    const dy = targetWorldY - rocket.y;
    const travelTime = 0.65;

    rocket.vx = dx / travelTime;
    rocket.vy = dy / travelTime + 0.5 * 9.8 * 0.55 * travelTime;
    rocket.vz = 0;
    rocket.targetY = targetWorldY;
    rocket.type = "brocade";
    rocket.colorHex = 0xffd700;

    rocket.group.position.set(rocket.x, rocket.y, rocket.z);
    rocket.group.rotation.z = -Math.atan2(rocket.vx, rocket.vy);
  }

  public update(delta: number) {
    // 1. Regular launch timer (~1.35 seconds)
    this.launchTimer += delta;
    if (this.launchTimer >= this.launchInterval) {
      this.launchTimer = 0;
      if (Math.random() < 0.35) {
        const fromLeft = Math.random() > 0.5;
        this.launchShootingStar(fromLeft ? -20 : 20, fromLeft ? 1 : -1);
      } else {
        this.launchRocket();
      }
    }

    // 2. Distant Salvo timer (~6s)
    this.salvoTimer += delta;
    if (this.salvoTimer >= this.salvoInterval) {
      this.salvoTimer = 0;
      this.launchSalvo();
    }

    // 3. Update active rockets
    this.rockets.forEach((rocket) => {
      if (!rocket.active) return;

      rocket.vy -= 9.8 * delta * 0.55;
      rocket.x += rocket.vx * delta;
      rocket.y += rocket.vy * delta;
      rocket.z += rocket.vz * delta;

      rocket.group.position.set(rocket.x, rocket.y, rocket.z);
      rocket.group.rotation.z = -Math.atan2(rocket.vx, rocket.vy);

      // Trailing exhaust starlight sparks
      const exhaustY = rocket.y - 0.42;
      const head = rocket.trailHead;
      rocket.trailPositions[head * 3] = rocket.x + (Math.random() - 0.5) * 0.08;
      rocket.trailPositions[head * 3 + 1] = exhaustY;
      rocket.trailPositions[head * 3 + 2] = rocket.z + (Math.random() - 0.5) * 0.08;
      rocket.trailAlphas[head] = 1.0;
      rocket.trailHead = (rocket.trailHead + 1) % 55;

      const pos = rocket.trailPositions;
      const col = rocket.trailColors;
      for (let t = 0; t < 55; t++) {
        if (pos[t * 3 + 1] > -400) {
          pos[t * 3 + 1] -= (rocket.isShootingStar ? 1.4 : 2.6) * delta;
          rocket.trailAlphas[t] = Math.max(
            0,
            rocket.trailAlphas[t] - delta * (rocket.isShootingStar ? 1.5 : 2.2)
          );
          const alpha = rocket.trailAlphas[t];

          if (rocket.isShootingStar) {
            col[t * 3] = 1.0 * alpha;
            col[t * 3 + 1] = 0.9 * alpha;
            col[t * 3 + 2] = 0.6 * alpha;
          } else {
            col[t * 3] = 1.0 * alpha;
            col[t * 3 + 1] = 0.75 * alpha;
            col[t * 3 + 2] = 0.25 * alpha;
          }
          if (alpha <= 0) {
            pos[t * 3 + 1] = -500;
          }
        }
      }
      rocket.trailGeo.attributes.position.needsUpdate = true;
      rocket.trailGeo.attributes.color.needsUpdate = true;

      // Distant cracker detonation at peak altitude
      if (rocket.y >= rocket.targetY || rocket.vy <= 1.5) {
        rocket.active = false;
        rocket.group.position.set(0, -500, -18);

        this.fireworks.triggerExplosion(
          rocket.x,
          rocket.y,
          rocket.z,
          rocket.type,
          rocket.colorHex
        );
      }
    });
  }

  public dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
  }
}