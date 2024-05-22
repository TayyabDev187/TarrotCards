import { useState, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function CardOne({ data, setMemory }) {
  const [size] = useState(0.2);
  const ref = useRef();

  const speed = 0.05;

  useFrame(() => {
    ref.current.rotation.y += 0.004 * Math.sin(performance.now() * 0.001);
  });
  return (
    <mesh
      scale={[size * 20.3, 10.4, 0.2]}
      rotation={[0, 0, 0]}
      ref={ref}
      position={[-6, 2.7, 5.2]}
    >
      <boxGeometry />
      <meshStandardMaterial transparent opacity={0} />
      <Html
        occlude
        distanceFactor={1.5}
        scale={[0.89, 0.4, 0.1]}
        position={[-1.5, 0, 1]}
        transform
      >
        <div className="flex justify-between">
          <img src="images/knight.jpg" className="w-100 mx-2" alt="" />
          <img src="images/king.jpg" className="w-100 mx-2" alt="" />
        </div>
      </Html>
      <boxGeometry />
    </mesh>
  );
}
