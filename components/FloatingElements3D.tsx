import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveField = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const gridSize = 40;
  const separation = 0.35;

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      gridSize * separation,
      gridSize * separation,
      gridSize,
      gridSize
    );
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < posArray.length; i += 3) {
      const x = posArray[i];
      const y = posArray[i + 1];
      posArray[i + 2] =
        Math.sin(x * 0.8 + time * 0.8) * 0.3 +
        Math.cos(y * 0.6 + time * 0.6) * 0.3 +
        Math.sin((x + y) * 0.5 + time * 0.4) * 0.15;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 3, 0, 0]} position={[0, -1.5, -3]}>
      <meshStandardMaterial
        color="hsl(160, 45%, 30%)"
        emissive="hsl(160, 45%, 20%)"
        emissiveIntensity={0.3}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
};

const FloatingElements3D = () => {
  return (
    <div className="absolute inset-0" style={{ pointerEvents: "none", opacity: 0.6 }}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 5, 5]} intensity={0.5} color="hsl(32, 80%, 55%)" />
        <WaveField />
      </Canvas>
    </div>
  );
};

export default FloatingElements3D;
