"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scene({ interactive }: { interactive: boolean }) {
  const core = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const nodes = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const count = 90;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.6 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2.4;
      pos[i * 3 + 2] = Math.sin(theta) * r;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  const orbiters = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        radius: 1.7 + (i % 2) * 0.55,
        speed: 0.25 + i * 0.06,
        phase: (i / 5) * Math.PI * 2,
        y: (i - 2) * 0.22,
        size: i === 0 ? 0.075 : 0.05,
        color: i === 2 ? "#E8B34B" : "#9393FF",
      })),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (core.current) {
      core.current.rotation.y += delta * 0.22;
      if (interactive) {
        core.current.rotation.x += (state.pointer.y * 0.18 - core.current.rotation.x) * 0.04;
        core.current.rotation.z += (state.pointer.x * -0.1 - core.current.rotation.z) * 0.04;
      }
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.12;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.09;
    if (nodes.current) {
      nodes.current.children.forEach((child, i) => {
        const o = orbiters[i % orbiters.length];
        const a = t * o.speed + o.phase;
        child.position.set(
          Math.cos(a) * o.radius,
          o.y + Math.sin(t * 0.6 + o.phase) * 0.08,
          Math.sin(a) * o.radius
        );
      });
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 3, 5]} intensity={1.1} color="#cfcfff" />
      <pointLight position={[-3, -2, 2]} intensity={6} color="#7C7CFF" distance={12} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#E8B34B" distance={4} />

      <group ref={core}>
        <mesh>
          <cylinderGeometry args={[0.85, 0.85, 0.5, 6]} />
          <meshStandardMaterial color="#15151f" metalness={0.9} roughness={0.32} flatShading />
        </mesh>
        <mesh position={[0, 0.26, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.02, 6]} />
          <meshStandardMaterial color="#0a0a12" metalness={0.6} roughness={0.4} emissive="#7C7CFF" emissiveIntensity={0.55} flatShading />
        </mesh>
        <mesh position={[0, 0.29, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.03, 6]} />
          <meshStandardMaterial color="#111111" emissive="#E8B34B" emissiveIntensity={2.2} />
        </mesh>
        <mesh position={[0, -0.28, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.85, 0.012, 8, 6]} />
          <meshBasicMaterial color="#7C7CFF" transparent opacity={0.7} />
        </mesh>
      </group>

      <mesh ref={ringA} rotation={[Math.PI / 2.25, 0, 0]}>
        <torusGeometry args={[1.7, 0.006, 8, 128]} />
        <meshBasicMaterial color="#9393FF" transparent opacity={0.28} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.8, 0.2, 0]}>
        <torusGeometry args={[2.25, 0.005, 8, 128]} />
        <meshBasicMaterial color="#9393FF" transparent opacity={0.16} />
      </mesh>

      <group ref={nodes}>
        {orbiters.map((o, i) => (
          <mesh key={i}>
            <sphereGeometry args={[o.size, 16, 16]} />
            <meshStandardMaterial color="#0a0a12" emissive={o.color} emissiveIntensity={2.4} />
          </mesh>
        ))}
      </group>

      <points geometry={particles}>
        <pointsMaterial color="#8f8fff" size={0.02} transparent opacity={0.55} sizeAttenuation />
      </points>
    </>
  );
}

export default function CoreCanvas({ hero }: { hero: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.4, hero ? 4.6 : 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <Scene interactive={hero} />
    </Canvas>
  );
}
