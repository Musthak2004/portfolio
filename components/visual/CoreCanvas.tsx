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
  tilt = [0.06, 0, 0.03],
  path = false,
  bump = 0,
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
  tilt?: [number, number, number];
  path?: boolean;
  bump?: number;
}) {
  const orbit = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (orbit.current) orbit.current.rotation.y = phase + t * speed;
    if (mesh.current) mesh.current.rotation.y += 0.0016 + selfSpin * 0.004;
  });
  return (
    <group rotation={tilt}>
      {path && (
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, orbitY, 0]}>
          <torusGeometry args={[orbitR, 0.004, 6, 128]} />
          <meshBasicMaterial color="#9393FF" transparent opacity={0.14} depthWrite={false} />
        </mesh>
      )}
      <group ref={orbit}>
        <group position={[orbitR, orbitY, 0]}>
          <mesh ref={mesh}>
            <sphereGeometry args={[radius, 40, 40]} />
            <meshStandardMaterial map={texture} bumpMap={bump ? texture : undefined} bumpScale={bump} roughness={0.85} metalness={0.12} />
          </mesh>
          {/* atmospheric limb */}
          <mesh scale={radius * 1.14}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial map={glow} color={atmo} transparent opacity={0.5} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.BackSide} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Stars({ count = 320 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 7 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi) * 0.55;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) - 2;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#c9c9ff" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Scene({ interactive, reduced, hero }: { interactive: boolean; reduced: boolean; hero: boolean }) {
  const { rock, earth, gas, ring, glow } = useTextures();
  const cam = useRef({ x: 0, y: 0 });
  const system = useRef<THREE.Group>(null);
  const foreground = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (interactive && !reduced) {
      cam.current.x += (state.pointer.x - cam.current.x) * 0.018;
      cam.current.y += (state.pointer.y - cam.current.y) * 0.018;
    }

    // The system is anchored to the lower-right edge so the centred headline
    // and its supporting copy always keep a clear, dark safe zone.
    const aspect = state.size.width / Math.max(1, state.size.height);
    const offX = hero ? Math.max(2.4, aspect * 2.55) : 1.2;
    const offY = hero ? -1.55 : -0.25;
    if (system.current) {
      system.current.position.set(offX, offY, -1.1);
      system.current.rotation.y = -0.18;
    }
    if (foreground.current) {
      foreground.current.rotation.y += 0.0009;
      foreground.current.position.y = -1.05 + Math.sin(t * 0.1) * 0.05;
    }

    // cinematic drift: slow push + pointer influence
    state.camera.position.x = cam.current.x * 0.5 + Math.sin(t * 0.06) * 0.1;
    state.camera.position.y = 1.05 + cam.current.y * 0.3 + Math.cos(t * 0.045) * 0.06;
    // Keep the framing near centre: the system stays out at the right edge.
    state.camera.lookAt(hero ? 0.25 : offX * 0.42, offY * 0.35 + 0.1, 0);
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      {/* cool key light from upper-right, models the planets as spheres */}
      <directionalLight position={[8, 6, 4]} intensity={1.0} color="#aebcff" />
      {/* warm rim from lower-left, separates bodies from deep space */}
      <directionalLight position={[-8, -4, -6]} intensity={0.6} color="#E8B34B" />
      <hemisphereLight args={["#c9c9ff", "#08080e", 0.12]} />
      <Stars count={450} />

      {/* foreground body entering the lower-left frame, clear of the headline */}
      <mesh ref={foreground} position={[-4.1, -1.1, 1.8]}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshStandardMaterial map={rock} bumpMap={rock} bumpScale={0.02} roughness={0.94} metalness={0.06} />
      </mesh>

      <group ref={system}>
        {/* star light follows the core */}
        <pointLight position={[0, 0.2, 0]} intensity={24} distance={18} decay={2} color="#ffe9c9" />
        {/* central star-core */}
        <mesh>
          <sphereGeometry args={[0.55, 40, 40]} />
          <meshBasicMaterial map={glow} color="#fff3e0" />
        </mesh>
        <sprite scale={[2.6, 2.6, 1]}>
          <spriteMaterial map={glow} color="#ffdfae" transparent opacity={0.38} blending={THREE.AdditiveBlending} depthWrite={false} />
        </sprite>
        <sprite scale={[4.6, 4.6, 1]}>
          <spriteMaterial map={glow} color="#c9a86a" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
        </sprite>

        {/* foreground: cratered rocky planet */}
        <Planet texture={rock} glow={glow} radius={0.5} orbitR={1.6} orbitY={-0.35} speed={0.05} phase={0.8} atmo="#8a7f99" tilt={[0.1, 0, 0.06]} path bump={0.015} />
        {/* midground: earth-like */}
        <Planet texture={earth} glow={glow} radius={0.36} orbitR={2.45} orbitY={0.45} speed={-0.032} phase={2.6} atmo="#6aa8ff" selfSpin={0.08} tilt={[0.03, 0, -0.08]} path />
        {/* background: ringed gas giant, near-stationary */}
        <group position={[0.35, 1.15, -2.2]}>
          <mesh>
            <sphereGeometry args={[0.85, 40, 40]} />
            <meshStandardMaterial map={gas} roughness={0.7} metalness={0.1} />
          </mesh>
          <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
            <ringGeometry args={[1.05, 1.7, 96, 1]} />
            <meshBasicMaterial map={ring} transparent opacity={0.85} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
        </group>
        {/* far small moon */}
        <Planet texture={rock} glow={glow} radius={0.12} orbitR={3.1} orbitY={-0.7} speed={0.02} phase={4.4} atmo="#555566" selfSpin={0.02} tilt={[0.12, 0, 0.1]} path bump={0.01} />

        <Belt />
      </group>
    </>
  );
}

export default function CoreCanvas({ hero }: { hero: boolean }) {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 1.2, hero ? 9.2 : 7.2], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop={reduced ? "never" : "always"}
    >
      <Scene interactive={hero} reduced={reduced} hero={hero} />
    </Canvas>
  );
}
