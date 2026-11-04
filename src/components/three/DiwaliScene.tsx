"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PalaceArchitecture } from "./PalaceArchitecture";
import { CelestialSky } from "./CelestialSky";
import { ToranGarland } from "./ToranGarland";
import { HappyDiwaliCenterpiece } from "./HappyDiwaliCenterpiece";
import { FireworksSystem } from "./FireworksSystem";
import { RocketSystem } from "./RocketSystem";
import { createDiwaliLighting } from "./SceneLighting";
import { SceneFallback } from "./SceneFallback";
import { campaignConfig } from "@/config/campaign";

interface DiwaliSceneProps {
  children?: React.ReactNode;
}

export function DiwaliScene({ children }: DiwaliSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // 1. WebGL Availability Verification
    try {
      const testGl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!testGl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    // 2. Scene & Camera Setup (Cinematic Royal Palace Perspective)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080d19, 0.007);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      140
    );
    // Camera positioned inside the royal palace courtyard looking through the grand arch
    camera.position.set(0, 2.7, 17.2);

    // 3. High-Performance WebGL Renderer
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(dpr);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
    } catch (e) {
      console.warn("WebGL initialization failed", e);
      setWebGLSupported(false);
      return;
    }

    // 4. Royal Lighting (Warm Sandstone, Golden High-Key & Saffron Rim)
    createDiwaliLighting(scene);

    // 5. Royal Indian Palace Architecture (Grand Cusped Arch, Fluted Columns, Reflective Floor)
    const palace = new PalaceArchitecture();
    scene.add(palace.group);

    // 5b. Deep Celestial Sky: Tiny little twinkling stars & real 3D rotating moon
    const celestialSky = new CelestialSky();
    scene.add(celestialSky.group);

    // Seasonal Diwali Components (Controlled by campaignConfig.diwaliCampaignEnabled)
    const isDiwali = campaignConfig.diwaliCampaignEnabled;

    let toranGarland: ToranGarland | null = null;
    let centerpiece: HappyDiwaliCenterpiece | null = null;
    let fireworksSystem: FireworksSystem | null = null;
    let rocketSystem: RocketSystem | null = null;

    if (isDiwali) {
      // 6. Traditional Toran (Attached naturally along the palace arch contour)
      toranGarland = new ToranGarland(palace);
      scene.add(toranGarland.group);

      // 7. 3D "HAPPY DIWALI" Centerpiece with living flame atop 'W'
      centerpiece = new HappyDiwaliCenterpiece();
      scene.add(centerpiece.group);

      // 8. Real-Time Fireworks & Rocket Engine
      fireworksSystem = new FireworksSystem();
      scene.add(fireworksSystem.points);
      scene.add(fireworksSystem.flashLight);

      rocketSystem = new RocketSystem(fireworksSystem);
      scene.add(rocketSystem.group);
    }

    // 11. Interactive Camera Parallax & Spring Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 2.7;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ("touches" in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (clientX - halfW) / halfW;
      mouseY = (clientY - halfH) / halfH;

      targetCameraX = mouseX * 2.0;
      targetCameraY = 2.7 - mouseY * 0.8;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    // 12. Interactive Cracker Trigger on Click / Tap in the Sky!
    const handleClick = (e: MouseEvent) => {
      if (!rocketSystem) return;

      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Project onto distant sky coordinates at z ≈ -18
      const targetWorldX = normX * 14;
      const targetWorldY = 2.7 + normY * 7.5;

      rocketSystem.launchInteractiveCracker(targetWorldX, Math.max(5.0, targetWorldY));
    };

    container.addEventListener("click", handleClick);

    // 13. Responsive Canvas Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // 14. Visibility Observer
    let isVisible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    visibilityObserver.observe(container);

    // 15. Real-Time Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const currentTime = typeof now === "number" && !isNaN(now) ? now : performance.now();
      const delta = Math.min(Math.max((currentTime - lastTime) / 1000, 0.001), 0.1);
      lastTime = currentTime;
      const timeSec = currentTime * 0.001;

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.045;
      camera.position.y += (targetCameraY - camera.position.y) * 0.045;
      camera.lookAt(0, 2.7, 0);

      // Subsystem updates
      celestialSky.update(timeSec, delta);
      if (toranGarland) toranGarland.update(timeSec);
      if (centerpiece) centerpiece.update(timeSec, delta);
      if (rocketSystem) rocketSystem.update(delta);
      if (fireworksSystem) fireworksSystem.update(delta);

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 16. Resource Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      container.removeEventListener("click", handleClick);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      celestialSky.dispose();
      palace.dispose();
      if (toranGarland) toranGarland.dispose();
      if (centerpiece) centerpiece.dispose();
      if (fireworksSystem) fireworksSystem.dispose();
      if (rocketSystem) rocketSystem.dispose();

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  if (!webGLSupported) {
    return <SceneFallback theme="diwali">{children}</SceneFallback>;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[92vh] md:min-h-screen overflow-hidden bg-midnight flex items-center justify-center cursor-pointer select-none"
    >
      {/* 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Seamless bottom vignette for text legibility (no harsh border line or cut) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 z-[1] bg-gradient-to-t from-midnight from-10% via-midnight/60 via-45% to-transparent" />

      {/* HTML Foreground Brand & Healthcare Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
