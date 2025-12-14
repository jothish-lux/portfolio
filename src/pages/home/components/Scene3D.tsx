import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} scale={2.5}>
      <MeshDistortMaterial
        color="#FF6B35"
        attach="material"
        distort={0.2}
        speed={1}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Scene3D() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1]}
      performance={{ min: 0.5 }}
      gl={{ 
        antialias: false, 
        powerPreference: 'high-performance',
        alpha: true,
        stencil: false,
        depth: false
      }}
      frameloop="demand"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F7931E" />
      <AnimatedSphere />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        enableDamping={false}
      />
    </Canvas>
  );
}
