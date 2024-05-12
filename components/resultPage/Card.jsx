import { useState, useRef } from "react";
import { Html } from "@react-three/drei";
import { useAppContext } from "@/pages/_app";
import { useFrame } from "@react-three/fiber";
export default function CardOne({ data, setMemory }) {
  const [size] = useState(0.2);
  const ref = useRef();
  const { prompt } = useAppContext();

  useFrame(() => {
    ref.current.rotation.y += 0.004 * Math.sin(performance.now() * 0.001);
  });


  if (prompt.card) {
    return <mesh
      material={prompt.material}
      geometry={prompt.geometry}
      ref={ref}
      scale={[0.2 * 30.3, 15.4, 0.2]}
      position={[-6, 2.7, 5.2]}
      rotation={[0, 0, 0]}
    >
      <boxGeometry />
      <meshStandardMaterial transparent opacity={0} />
      <Html
        occlude
        distanceFactor={1.5}
        scale={[0.89, 0.4, 0.1]}
        position={[0, 0, 1]}
        transform
      >
        <img src="images/knight.jpg" className="w-full h-full" alt="" />
      </Html>
    </mesh>
  }

  return (
    <mesh
      scale={[size * 30.3, 15.4, 0.2]}
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
        position={[0, 0, 1]}
        transform
      >
        <img src="images/knight.jpg" className="w-full h-full" alt="" />
      </Html>
    </mesh>
  );
}
