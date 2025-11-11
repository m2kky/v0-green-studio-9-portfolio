"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

function Leaf({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[1, 1.5]} />
      <meshBasicMaterial color="#339b57" transparent opacity={0.8} />
    </mesh>
  )
}

export function ThreeLeafBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Leaf position={[-3, 2, 0]} scale={0.5} />
        <Leaf position={[3, -1, 0]} scale={0.7} />
        <Leaf position={[-2, -2, 0]} scale={0.4} />
        <Leaf position={[2, 3, 0]} scale={0.6} />
        <Leaf position={[0, 1, 0]} scale={0.3} />
      </Canvas>
    </div>
  )
}
