import { useState, useRef } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAppContext } from "@/pages/_app";
import { useGLTF } from "@react-three/drei";

export default function CardModalSingle({ data, setMemory }) {
  const [size] = useState(0.2);
  const ref = useRef();
  const { nodes, materials } = useGLTF("new/tarot.gltf");
  const { prompt } = useAppContext();
  const speed = 0.05;

  useFrame(() => {
    ref.current.rotation.y += 0.004 * Math.sin(performance.now() * 0.001);
  });

  console.log(prompt, "DATA");
  return (
    <mesh
      scale={[size * 30.3, 15.4, 0.2]}
      rotation={[0, 0, 0]}
      ref={ref}
      position={[-6, 2.7, 5.2]}
    >
      <mesh geometry={prompt.geometry} material={prompt.material} />
    </mesh>
  );
}
