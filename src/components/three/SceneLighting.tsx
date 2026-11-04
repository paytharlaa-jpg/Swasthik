import * as THREE from "three";

export function createDiwaliLighting(scene: THREE.Scene) {
  // 1. Deep royal ambient light (warm indigo & amber night)
  const ambientLight = new THREE.AmbientLight(0x241620, 2.2);
  scene.add(ambientLight);

  // 2. High-key warm golden directional light casting crisp highlights on carved sandstone and typography
  const dirLight = new THREE.DirectionalLight(0xffe6a3, 2.8);
  dirLight.position.set(8, 16, 18);
  scene.add(dirLight);

  // 3. Palace arch upper illumination light (brings out rich sandstone and marigold petals)
  const archFillLight = new THREE.DirectionalLight(0xffa726, 2.2);
  archFillLight.position.set(-8, 14, 16);
  scene.add(archFillLight);

  // 4. Warm saffron rim back-light for metallic bevels and arch silhouettes
  const rimLight = new THREE.DirectionalLight(0xff5722, 1.8);
  rimLight.position.set(0, 7, -6);
  scene.add(rimLight);

  // 5. Hemisphere light (Warm gold night sky / deep courtyard marble)
  const hemiLight = new THREE.HemisphereLight(0x3e2723, 0x080c16, 1.4);
  scene.add(hemiLight);

  // 6. Courtyard plinth upward golden glow
  const courtyardGlow = new THREE.PointLight(0xff9800, 3.2, 30, 1.4);
  courtyardGlow.position.set(0, -3.2, 8);
  scene.add(courtyardGlow);

  return { ambientLight, dirLight, archFillLight, rimLight, hemiLight, courtyardGlow };
}
