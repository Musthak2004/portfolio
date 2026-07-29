"use client";

import { useRef, Suspense, type ReactNode } from "react";
import { Canvas, useFrame, type MeshProps } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

function Shape({
  position,
  color,
  scale: s = 1,
  children,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  children: ReactNode;
}) {
  const ref = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={s}>
        {children}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.2}
          emissive={color}
          emissiveIntensity={0.08}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />

      {/* Large icosahedron — top-left area */}
      <Shape position={[-4.5, 2.5, -3]} color="#7C7CFF" scale={1.6}>
        <icosahedronGeometry args={[1, 0]} />
      </Shape>

      {/* Torus knot — right side */}
      <Shape position={[5, -0.5, -5]} color="#A78BFA" scale={1.3}>
        <torusKnotGeometry args={[1, 0.3, 64, 8]} />
      </Shape>

      {/* Octahedron — bottom-left */}
      <Shape position={[-2.5, -3, -6]} color="#6B6BFF" scale={1}>
        <octahedronGeometry args={[1, 0]} />
      </Shape>

      {/* Dodecahedron — top-right */}
      <Shape position={[4, 3.5, -4]} color="#9393FF" scale={0.85}>
        <dodecahedronGeometry args={[1, 0]} />
      </Shape>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[0.4, 1]}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        style={{ background: "transparent", pointerEvents: "none" as const }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
