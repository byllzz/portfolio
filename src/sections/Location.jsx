import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, MeshDistortMaterial } from '@react-three/drei';
import { MdLocationPin } from 'react-icons/md';

function Scene() {
  const globeRef = useRef();

  // auto-rotation logic
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#a07af9" />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={globeRef}>
          {/* outer wireframe "atmostphere" */}
          <mesh>
            <sphereGeometry args={[2.6, 40, 40]} />
            <meshStandardMaterial
              color="#a07af9"
              wireframe
              transparent
              opacity={0.15}
            />
          </mesh>

          {/* main globe body */}
          <Sphere args={[2.5, 64, 64]}>
            <meshStandardMaterial
              color="#0a0a0a"
              roughness={0.7}
              metalness={0.2}
            />
          </Sphere>

          {/* grid overlay for tech look */}
          <mesh>
            <sphereGeometry args={[2.51, 32, 32]} />
            <meshStandardMaterial
              color="#a07af9"
              wireframe
              transparent
              opacity={0.05}
            />
          </mesh>

          {/* pakistan location marker */}
          {/* Coordinates adjusted for visual center on the sphere */}
          <group position={[1.4, 1.4, 1.6]}>
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color="#4ade80" />
            </mesh>
            {/* marker glow */}
            <mesh>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshBasicMaterial color="#4ade80" transparent opacity={0.3} />
            </mesh>
          </group>
        </group>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </>
  );
}

export default function Location() {
  return (
    <div className="w-full bg-black overflow-hidden text-[#E6E6E6] flex flex-col items-center rounded-[30px] border border-white/5 h-[330px] relative">
      {/* header overlay */}
      <div className="flex items-center gap-2 absolute top-6 left-6 z-10">
        <span className="text-[22px] text-green-500 animate-pulse">
          <MdLocationPin />
        </span>
        <h3 className="font-bai text-[16px] font-medium tracking-tight">
          Chachran Sharif, Pakistan
        </h3>
      </div>

      {/* 3d canvas */}
      <div className="w-full h-full cursor-grab relative top-25 right-4 active:cursor-grabbing scale-110 ">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' }}
          dpr={[1, 2]} // optimization for high-res screens
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* background glow effect */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
    </div>
  );
}
