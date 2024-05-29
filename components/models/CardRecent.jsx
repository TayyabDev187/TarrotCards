import { useState, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function CardRecent() {
  const [size] = useState(0.2);
  const ref = useRef();

  const speed = 0.05;

  useFrame(() => {
    ref.current.rotation.y += 0.004 * Math.sin(performance.now() * 0.001);
  });
  return (
    <mesh
      scale={[size * 70.3, 40.4, 0.1]}
      rotation={[0, 0, 0]}
      ref={ref}
      position={[0, 2.7, 2]}
    >
      <boxGeometry />
      <meshStandardMaterial transparent opacity={0} />
      <Html
        occlude
        distanceFactor={1.5}
        scale={[1.13, 0.4, 0.1]}
        position={[0, 0, 1]}
        transform
      >
          <img src="images/knight.jpg" className="w-100 mx-2" alt="" />
      </Html>
      <boxGeometry />
    </mesh>
  );
}
