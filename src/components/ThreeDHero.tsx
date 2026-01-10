
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';
import photoTexture from '../assets/images/photo_2025-12-02_17-16-43.jpg';

function PhotoSphere() {
  const texture = useLoader(THREE.TextureLoader, photoTexture);
  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

const ThreeDHero: React.FC = () => (
  <div style={{ width: '100%', height: '400px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 32px #0004', margin: '32px 0' }}>
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Suspense fallback={null}>
        <Stage environment={null} intensity={0.5} contactShadow={{ opacity: 0.3, blur: 2 }}>
          <PhotoSphere />
        </Stage>
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  </div>
);

export default ThreeDHero;
