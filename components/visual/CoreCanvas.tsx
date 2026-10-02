"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* Procedural canvas textures - generated once, tiny, no network. */

function canvasTexture(size: number, paint: (ctx: CanvasRenderingContext2D, s: number) => void) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");
  if (ctx) paint(ctx, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function blotches(ctx: CanvasRenderingContext2D, s: number, n: number, colors: string[], rMin: number, rMax: number, alpha: number) {
  for (let i = 0; i < n; i++) {
    const r = rMin + Math.random() * (rMax - rMin);
    const x = Math.random() * s;
    const y = Math.random() * s;
    ctx.globalAlpha = alpha * (0.5 + Math.random() * 0.5);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function useTextures() {
  return useMemo(() => {
    const rock = canvasTexture(256, (ctx, s) => {
      ctx.fillStyle = "#3a3340";
      ctx.fillRect(0, 0, s, s);
      blotches(ctx, s, 90, ["#2b2530", "#4a4352", "#555060", "#241f28"], 3, 22, 0.5);
      // craters
      for (let i = 0; i < 26; i++) {
        const r = 2 + Math.random() * 9;
        const x = Math.random() * s;
        const y = Math.random() * s;
        ctx.globalAlpha = 0.55;
        ctx.fillStyle = "#1d1921";
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.35;
        ctx.strokeStyle = "#6a6372";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, r, Math.PI * 1.1, Math.PI * 1.9);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    });

    const earth = canvasTexture(256, (ctx, s) => {
      ctx.fillStyle = "#1d3a5f";
      ctx.fillRect(0, 0, s, s);
      blotches(ctx, s, 26, ["#2e5a34", "#4a5a2e", "#5a4a2e"], 8, 30, 0.85);
      blotches(ctx, s, 40, ["#e8ecf2"], 4, 16, 0.35);
      ctx.fillStyle = "#dfe6ee";
      ctx.globalAlpha = 0.9;
      ctx.fillRect(0, 0, s, 10);
      ctx.fillRect(0, s - 10, s, 10);
      ctx.globalAlpha = 1;
    });

    const gas = canvasTexture(256, (ctx, s) => {
      const bands = ["#6a5a78", "#574a66", "#7a6a80", "#4a3f58", "#655a70", "#3d3450"];
      const h = s / bands.length;
      bands.forEach((col, i) => {
        ctx.fillStyle = col;
        ctx.fillRect(0, i * h, s, h + 1);
      });
      blotches(ctx, s, 60, ["#ffffff", "#2e2838"], 3, 14, 0.16);
      // storm oval
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = "#8a7a90";
      ctx.beginPath();
      ctx.ellipse(s * 0.68, s * 0.62, 22, 12, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    const ring = canvasTexture(256, (ctx, s) => {
      ctx.clearRect(0, 0, s, s);
      for (let r = 60; r < 128; r += 2) {
        ctx.globalAlpha = 0.08 + Math.random() * 0.3;
        ctx.strokeStyle = Math.random() > 0.4 ? "#a89ac0" : "#5a4f6e";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(s / 2, s / 2, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    });

    const glow = canvasTexture(128, (ctx, s) => {
      const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.25, "rgba(255,240,220,0.55)");
      g.addColorStop(0.6, "rgba(255,220,180,0.12)");
      g.addColorStop(1, "rgba(255,220,180,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    });

    return { rock, earth, gas, ring, glow };
  }, []);
}

function Belt({ count = 70 }: { count?: number }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        r: 2.9 + Math.random() * 0.7,
        a: Math.random() * Math.PI * 2,
        y: (Math.random() - 0.5) * 0.25,
        s: 0.015 + Math.random() * 0.035,
        sp: 0.02 + Math.random() * 0.05,
      })),
    [count]
  );
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!ref.current) return;
    seeds.forEach((o, i) => {
      const a = o.a + t * o.sp;
      dummy.position.set(Math.cos(a) * o.r, o.y, Math.sin(a) * o.r);
      dummy.rotation.set(a, a * 0.7, 0);
      dummy.scale.setScalar(o.s);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#4a4452" roughness={0.95} metalness={0.05} />
    </instancedMesh>
  );
}

function Planet({
  texture,
  glow,
  radius,
  orbitR,
  orbitY = 0,
  speed,
  phase,
  atmo,
  selfSpin = 0.05,
}: {
  texture: THREE.Texture;
  glow: THREE.Texture;
  radius: number;
  orbitR: number;
  orbitY?: number;
  speed: number;
  phase: number;
  atmo: string;
  selfSpin?: number;
}) {
  const orbit = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (orbit.current) orbit.current.rotation.y = phase + t * speed;
    if (mesh.current) mesh.current.rotation.y += 0.0016 + selfSpin * 0.004;
  });
  return (
    <group ref={orbit} rotation={[0.06, 0, 0.03]}>
      <group position={[orbitR, orbitY, 0]}>
        <mesh ref={mesh}>
          <sphereGeometry args={[radius, 40, 40]} />
          <meshStandardMaterial map={texture} roughness={0.85} metalness={0.12} />
        </mesh>
        {/* atmospheric limb */}
        <mesh scale={radius * 1.14}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial map={glow} color={atmo} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} />
        </mesh>
      </group>
    </group>
  );
}

function Scene({ interactive, reduced }: { interactive: boolean; reduced: boolean }) {
  const { rock, earth, gas, ring, glow } = useTextures();
  const cam = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (interactive && !reduced) {
      cam.current.x += (state.pointer.x - cam.current.x) * 0.02;
      cam.current.y += (state.pointer.y - cam.current.y) * 0.02;
    }
    // cinematic drift: slow push + pointer influence
    state.camera.position.x = cam.current.x * 0.55 + Math.sin(t * 0.06) * 0.12;
    state.camera.position.y = 1.15 + cam.current.y * 0.35 + Math.cos(t * 0.045) * 0.08;
    state.camera.lookAt(0, 0.1, 0);
  });

  return (
    <>
      <ambientLight intensity={0.22} />
      {/* star light */}
      <pointLight position={[0, 0.2, 0]} intensity={30} distance={20} decay={2} color="#ffe9c9" />
      {/* cool key + warm rim */}
      <directionalLight position={[5, 3, 4]} intensity={0.7} color="#b9c4ff" />
      <directionalLight position={[-5, -1, -3]} intensity={0.35} color="#E8B34B" />

      {/* central star-core */}
      <mesh>
        <sphereGeometry args={[0.55, 40, 40]} />
        <meshBasicMaterial map={glow} color="#fff3e0" />
      </mesh>
      <sprite scale={[3.4, 3.4, 1]}>
        <spriteMaterial map={glow} color="#ffdfae" transparent opacity={0.55} blending={THREE.AdditiveBlending} depthWrite={false} />
      </sprite>
      <sprite scale={[6.2, 6.2, 1]}>
        <spriteMaterial map={glow} color="#c9a86a" transparent opacity={0.16} blending={THREE.AdditiveBlending} depthWrite={false} />
      </sprite>

      {/* foreground: cratered rocky planet */}
      <Planet texture={rock} glow={glow} radius={0.42} orbitR={1.55} orbitY={-0.35} speed={0.05} phase={0.8} atmo="#8a7f99" />
      {/* midground: earth-like */}
      <Planet texture={earth} glow={glow} radius={0.3} orbitR={2.35} orbitY={0.45} speed={-0.032} phase={2.6} atmo="#6aa8ff" selfSpin={0.08} />
      {/* background: ringed gas giant, near-stationary */}
      <group>
        <mesh position={[-2.6, 1.1, -2.2]}>
          <sphereGeometry args={[0.85, 40, 40]} />
          <meshStandardMaterial map={gas} roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh position={[-2.6, 1.1, -2.2]} rotation={[Math.PI / 2.4, 0.2, 0]}>
          <ringGeometry args={[1.05, 1.7, 96, 1]} />
          <meshBasicMaterial map={ring} transparent opacity={0.85} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      </group>
      {/* far small moon */}
      <Planet texture={rock} glow={glow} radius={0.12} orbitR={3.1} orbitY={-0.7} speed={0.02} phase={4.4} atmo="#555566" selfSpin={0.02} />

      <Belt />
    </>
  );
}

export default function CoreCanvas({ hero }: { hero: boolean }) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.15, hero ? 5.4 : 6.2], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop={reduced ? "never" : "always"}
    >
      <Scene interactive={hero} reduced={reduced} />
    </Canvas>
  );
}
