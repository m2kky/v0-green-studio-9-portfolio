"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"
import * as THREE from "three"

function EnhancedLeaf({
  position,
  scale = 1,
  rotationSpeed = 1,
  floatAmplitude = 0.1,
}: {
  position: [number, number, number]
  scale?: number
  rotationSpeed?: number
  floatAmplitude?: number
}) {
  const meshRef = useRef<Mesh>(null)

  // Create leaf shape using custom geometry
  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.quadraticCurveTo(0.3, 0.3, 0, 1)
    shape.quadraticCurveTo(-0.3, 0.3, 0, 0)

    const geometry = new THREE.ShapeGeometry(shape)
    return geometry
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.z = Math.sin(time * rotationSpeed * 0.5) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(time * rotationSpeed * 0.3) * floatAmplitude
      meshRef.current.position.x = position[0] + Math.cos(time * rotationSpeed * 0.2) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={leafGeometry}>
      <meshBasicMaterial color="#339b57" transparent opacity={0.6} side={THREE.DoubleSide} />
    </mesh>
  )
}

export function EnhancedThreeLeafBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const leaves = useMemo(
    () => [
      { position: [-4, 3, -1] as [number, number, number], scale: 0.8, rotationSpeed: 0.8, floatAmplitude: 0.15 },
      { position: [4, -2, -1] as [number, number, number], scale: 1.2, rotationSpeed: 1.2, floatAmplitude: 0.1 },
      { position: [-3, -3, -2] as [number, number, number], scale: 0.6, rotationSpeed: 0.6, floatAmplitude: 0.2 },
      { position: [3, 4, -1] as [number, number, number], scale: 1.0, rotationSpeed: 1.0, floatAmplitude: 0.12 },
      { position: [0, 0, -2] as [number, number, number], scale: 0.4, rotationSpeed: 1.5, floatAmplitude: 0.08 },
      { position: [-1, 2, -1] as [number, number, number], scale: 0.7, rotationSpeed: 0.9, floatAmplitude: 0.18 },
      { position: [2, -1, -2] as [number, number, number], scale: 0.9, rotationSpeed: 0.7, floatAmplitude: 0.14 },
    ],
    [],
  )

  if (!isMounted) {
    return <div className="fixed inset-0 -z-10 pointer-events-none opacity-30" />
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        {leaves.map((leaf, index) => (
          <EnhancedLeaf
            key={index}
            position={leaf.position}
            scale={leaf.scale}
            rotationSpeed={leaf.rotationSpeed}
            floatAmplitude={leaf.floatAmplitude}
          />
        ))}
      </Canvas>
    </div>
  )
}
