import * as THREE from "three";

export class PalaceArchitecture {
  public group: THREE.Group;
  private materials: THREE.Material[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  public archPoints: THREE.Vector3[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = "RoyalPalaceArchitecture";
    this.initArchitecture();
  }

  /**
   * Evaluates the 3D position along the traditional Indian Cusped Arch (5-foil Mehrab arch)
   * Parameter t from 0 (left pillar capital) to 1 (right pillar capital)
   */
  public getArchPoint(t: number): THREE.Vector3 {
    // Arch spans x from -8.8 to +8.8
    const span = 17.6;
    const x = -8.8 + t * span;
    const normX = (x / 8.8); // -1 to +1

    // Traditional cusped arch profile:
    // Base parabolic arch + 5 distinct harmonic scallops + central pointed apex
    const baseHeight = 5.2;
    const apexHeight = 7.6;
    const parabolic = (1 - normX * normX);

    // 5 Scallop cusps along the arch
    const cuspFreq = Math.PI * 5;
    const scallops = Math.sin(Math.abs(normX) * cuspFreq) * 0.22 * Math.pow(parabolic, 0.5);

    // Pointed Gothic/Mehrab apex peak at center
    const centerPoint = Math.exp(-Math.abs(normX) * 6.0) * 0.45;

    const y = baseHeight + parabolic * (apexHeight - baseHeight - 0.45) + scallops + centerPoint;
    const z = 8.6;

    return new THREE.Vector3(x, y, z);
  }

  /**
   * Generates a 3D fluted pillar shaft with 16 vertical flutes
   */
  private createFlutedPillarGeometry(radius: number, height: number): THREE.BufferGeometry {
    const radialSegments = 32;
    const heightSegments = 24;
    const geo = new THREE.CylinderGeometry(radius, radius, height, radialSegments, heightSegments);
    const pos = geo.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      vertex.fromBufferAttribute(pos, i);
      const angle = Math.atan2(vertex.z, vertex.x);
      // 16 flutes around the column perimeter
      const flute = Math.cos(angle * 16) * (radius * 0.08);
      const r = Math.sqrt(vertex.x * vertex.x + vertex.z * vertex.z) + flute;
      vertex.x = Math.cos(angle) * r;
      vertex.z = Math.sin(angle) * r;
      pos.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    geo.computeVertexNormals();
    this.geometries.push(geo);
    return geo;
  }

  /**
   * Generates a traditional Indian bracket capital (Todiyan/Corbel)
   */
  private createBracketCapital(sandstoneMat: THREE.Material, goldTrimMat: THREE.Material): THREE.Group {
    const capitalGroup = new THREE.Group();

    // Abacus slab
    const abacusGeo = new THREE.BoxGeometry(1.6, 0.25, 1.6);
    this.geometries.push(abacusGeo);
    const abacus = new THREE.Mesh(abacusGeo, sandstoneMat);
    abacus.position.y = 0.5;
    capitalGroup.add(abacus);

    // Gold trim band
    const trimGeo = new THREE.BoxGeometry(1.65, 0.08, 1.65);
    this.geometries.push(trimGeo);
    const trim = new THREE.Mesh(trimGeo, goldTrimMat);
    trim.position.y = 0.38;
    capitalGroup.add(trim);

    // 4 S-curved corbel brackets extending outward in 4 directions
    const bracketShape = new THREE.Shape();
    bracketShape.moveTo(0, 0);
    bracketShape.lineTo(0.55, 0);
    bracketShape.bezierCurveTo(0.65, -0.2, 0.35, -0.4, 0.1, -0.55);
    bracketShape.lineTo(0, -0.55);
    bracketShape.closePath();

    const extrudeSettings = { depth: 0.25, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.02, bevelThickness: 0.02 };
    const bracketGeo = new THREE.ExtrudeGeometry(bracketShape, extrudeSettings);
    bracketGeo.center();
    this.geometries.push(bracketGeo);

    for (let b = 0; b < 4; b++) {
      const angle = (b * Math.PI) / 2;
      const bracketMesh = new THREE.Mesh(bracketGeo, sandstoneMat);
      bracketMesh.position.set(Math.cos(angle) * 0.45, 0.1, Math.sin(angle) * 0.45);
      bracketMesh.rotation.y = angle;
      capitalGroup.add(bracketMesh);
    }

    return capitalGroup;
  }

  private initArchitecture() {
    // 1. Materials
    // Warm Rajasthani Golden Sandstone
    const sandstoneMat = new THREE.MeshStandardMaterial({
      color: 0xc49a6c, // Golden-ochre sandstone
      roughness: 0.82,
      metalness: 0.08,
    });
    this.materials.push(sandstoneMat);

    // Deep Sandstone for Shadowed Recesses & Pillars
    const deepStoneMat = new THREE.MeshStandardMaterial({
      color: 0x8c6239,
      roughness: 0.88,
      metalness: 0.05,
    });
    this.materials.push(deepStoneMat);

    // Antique Royal Gold Trim & Carved Accents
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.85,
    });
    this.materials.push(goldTrimMat);

    // Polished Dark Courtyard Marble (Reflects fireworks and golden lanterns)
    const courtyardFloorMat = new THREE.MeshStandardMaterial({
      color: 0x080c16,
      roughness: 0.14,
      metalness: 0.85,
    });
    this.materials.push(courtyardFloorMat);

    // Warm Ambient Light for Jali Lattice Niches
    const jaliGlowMat = new THREE.MeshStandardMaterial({
      color: 0xff8822,
      emissive: new THREE.Color(0xff6600),
      emissiveIntensity: 0.7,
      roughness: 0.4,
    });
    this.materials.push(jaliGlowMat);

    // --- 2. Open Atmospheric Courtyard Horizon (No harsh stage plinth or border line)
    // The pillars stand on their own authentic temple pedestals while the bottom view opens seamlessly.

    // --- 3. Grand Pillars (Left & Right Flanks) ---
    const pillarPositions = [-8.8, 8.8];
    const pillarHeight = 10.0;
    const pillarRadius = 0.55;

    pillarPositions.forEach((posX) => {
      const pillarGroup = new THREE.Group();
      pillarGroup.position.set(posX, 0.4, 8.6);

      // Base Pedestal (Layered square plinths)
      const baseGeo1 = new THREE.BoxGeometry(1.9, 0.7, 1.9);
      const baseGeo2 = new THREE.BoxGeometry(1.6, 0.5, 1.6);
      this.geometries.push(baseGeo1, baseGeo2);

      const base1 = new THREE.Mesh(baseGeo1, sandstoneMat);
      base1.position.y = -4.6 + 0.35 - 0.4;
      pillarGroup.add(base1);

      const base2 = new THREE.Mesh(baseGeo2, sandstoneMat);
      base2.position.y = -4.6 + 0.8 - 0.4;
      pillarGroup.add(base2);

      // Fluted Shaft
      const shaftGeo = this.createFlutedPillarGeometry(pillarRadius, pillarHeight);
      const shaft = new THREE.Mesh(shaftGeo, sandstoneMat);
      shaft.position.y = 0.5;
      shaft.castShadow = true;
      pillarGroup.add(shaft);

      // Ring Moldings along shaft
      for (let r = 0; r < 3; r++) {
        const ringGeo = new THREE.TorusGeometry(pillarRadius + 0.06, 0.05, 8, 24);
        ringGeo.rotateX(Math.PI / 2);
        this.geometries.push(ringGeo);
        const ring = new THREE.Mesh(ringGeo, goldTrimMat);
        ring.position.y = -2.5 + r * 2.8;
        pillarGroup.add(ring);
      }

      // Ornate Bracket Capital at Arch Spring (y = 5.3)
      const capital = this.createBracketCapital(sandstoneMat, goldTrimMat);
      capital.position.y = 5.25;
      pillarGroup.add(capital);

      this.group.add(pillarGroup);
    });

    // --- 4. The Grand Cusped Palace Arch (Multi-Foil Mehrab Arch) ---
    // Generate curved archway mesh by sweeping a cross-section along getArchPoint()
    const archSegmentCount = 64;
    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i <= archSegmentCount; i++) {
      const t = i / archSegmentCount;
      const pt = this.getArchPoint(t);
      curvePoints.push(pt);
      this.archPoints.push(pt); // Stored for Toran attachment!
    }

    const archCurve = new THREE.CatmullRomCurve3(curvePoints);
    const archTubeGeo = new THREE.TubeGeometry(archCurve, 64, 0.38, 12, false);
    this.geometries.push(archTubeGeo);

    const archMesh = new THREE.Mesh(archTubeGeo, sandstoneMat);
    archMesh.castShadow = true;
    this.group.add(archMesh);

    // Outer Decorative Gold Molding Arch
    const outerCurvePoints: THREE.Vector3[] = curvePoints.map((p) => {
      const dirY = p.y > 6.0 ? 0.35 : 0.25;
      return new THREE.Vector3(p.x * 1.04, p.y + dirY, p.z - 0.08);
    });
    const outerArchCurve = new THREE.CatmullRomCurve3(outerCurvePoints);
    const outerTubeGeo = new THREE.TubeGeometry(outerArchCurve, 64, 0.16, 8, false);
    this.geometries.push(outerTubeGeo);
    const outerArchMesh = new THREE.Mesh(outerTubeGeo, goldTrimMat);
    this.group.add(outerArchMesh);

    // Central Apex Lotus Kalash / Finial atop the Arch
    const apexPt = this.getArchPoint(0.5);
    const finialPoints: THREE.Vector2[] = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.25, 0.15),
      new THREE.Vector2(0.35, 0.45),
      new THREE.Vector2(0.2, 0.75),
      new THREE.Vector2(0.08, 0.95),
      new THREE.Vector2(0.15, 1.15),
      new THREE.Vector2(0, 1.35),
    ];
    const finialGeo = new THREE.LatheGeometry(finialPoints, 16);
    this.geometries.push(finialGeo);
    const finialMesh = new THREE.Mesh(finialGeo, goldTrimMat);
    finialMesh.position.set(apexPt.x, apexPt.y + 0.32, apexPt.z);
    this.group.add(finialMesh);

    // --- 5. Flanking Jali (Lattice) Architectural Wings (Left & Right) ---
    const wingXOffsets = [-12.2, 12.2];
    wingXOffsets.forEach((wx) => {
      const wingGroup = new THREE.Group();
      wingGroup.position.set(wx, 0.5, 8.2);

      // Wing Wall
      const wallGeo = new THREE.BoxGeometry(4.8, 10.5, 0.5);
      this.geometries.push(wallGeo);
      const wall = new THREE.Mesh(wallGeo, deepStoneMat);
      wingGroup.add(wall);

      // Carved Jali Niche (Backlit window)
      const nicheGeo = new THREE.BoxGeometry(2.4, 4.2, 0.3);
      this.geometries.push(nicheGeo);
      const niche = new THREE.Mesh(nicheGeo, jaliGlowMat);
      niche.position.set(0, 1.2, 0.2);
      wingGroup.add(niche);

      // Golden Niche Frame
      const frameGeo = new THREE.BoxGeometry(2.7, 4.5, 0.15);
      this.geometries.push(frameGeo);
      const frame = new THREE.Mesh(frameGeo, goldTrimMat);
      frame.position.set(0, 1.2, 0.32);
      wingGroup.add(frame);

      // Wall Cornice
      const corniceGeo = new THREE.BoxGeometry(5.2, 0.4, 0.8);
      this.geometries.push(corniceGeo);
      const cornice = new THREE.Mesh(corniceGeo, sandstoneMat);
      cornice.position.set(0, 5.4, 0);
      wingGroup.add(cornice);

      this.group.add(wingGroup);
    });
  }

  public dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
  }
}

