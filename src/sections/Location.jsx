import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { MdLocationPin } from 'react-icons/md';

function Scene() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      <group>
        <mesh>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial
            color="#a07af9"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>

        <Sphere args={[2.4, 32, 32]}>
          <meshStandardMaterial color="#111111" />
        </Sphere>

        {/* Pakistan Marker */}
        <mesh position={[1.2, 1.5, 1.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#a07af9" />
        </mesh>
      </group>

      <OrbitControls
        enableZoom={false}
      />
    </>
  );
}

export default function Location() {
  return (
    <div className="w-full bg-black overflow-hidden text-[#E6E6E6] flex flex-col items-center rounded-[30px]  border border-white/5">
      <div className="flex items-center gap-2 relative top-6 right-13">
        <span className="text-[22px] text-green-500">
          <MdLocationPin />
        </span>
        <h3 className="font-bai text-[18px]">Chachran Sharif, Pakistan</h3>
      </div>

      {/* canvas div */}
      <div className="w-full relative top-20 right-3  h-[280px] scale-125 flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' ,
           position: "relative" , right : "40px" }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
