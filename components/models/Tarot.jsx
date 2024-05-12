import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("new/tarot.gltf");
  const [card, setCard] = useState("");

  function handleCard(value) {
    setCard(value);
  }
  const ref = useRef();
  console.log(materials, nodes, "ref");

  return (
    <group {...props} position={[-30, -60, 5]} ref={ref} dispose={null}>
      <mesh
        onPointerOver={() => {
          console.log("NIGGA");
        }}
        onClick={() => {
          handleCard("The_Fool");
        }}
        geometry={nodes["0_The_Fool_1"].geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes["0_The_Fool"].geometry} material={materials.Back} />
      <mesh
        onPointerOver={() => {
          console.log("IN");
        }}
        onPointerOut={() => {
          console.log("OUT");
        }}
        onClick={() => {
          handleCard("TheMagician");
        }}
        geometry={nodes["1_The_Magician"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheHighPriestess");
        }}
        geometry={nodes["2_The_High_Priestess"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheEmpress");
        }}
        geometry={nodes["3_The_Empress"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheEmperor");
        }}
        geometry={nodes["4_The_Emperor"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheHierophant");
        }}
        geometry={nodes["5_The_Hierophant"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheLovers");
        }}
        geometry={nodes["6_The_Lovers"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheChariot");
        }}
        geometry={nodes["7_The_Chariot"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Strength");
        }}
        geometry={nodes["8_Strength"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheHermit");
        }}
        geometry={nodes["9_The_Hermit"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wheel Of Fortun");
        }}
        geometry={nodes["10_Wheel_of_Fortune"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Justice");
        }}
        geometry={nodes["11_Justice"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheHangedMan");
        }}
        geometry={nodes["12_The_Hanged_Man"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Death");
        }}
        geometry={nodes["13_Death"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Temperance");
        }}
        geometry={nodes["14_Temperance"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheDevil");
        }}
        geometry={nodes["15_The_Devil"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheTower");
        }}
        geometry={nodes["16_The_Tower"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheStar");
        }}
        geometry={nodes["17_The_Star"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheMoon");
        }}
        geometry={nodes["18_The_Moon"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheSun");
        }}
        geometry={nodes["19_The_Sun"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Judgement");
        }}
        geometry={nodes["20_Judgement"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("TheWorld");
        }}
        geometry={nodes["21_The_World"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-King");
        }}
        geometry={nodes.Wands_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-Queen");
        }}
        geometry={nodes.Wands_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-Knight");
        }}
        geometry={nodes.Wands_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-Page");
        }}
        geometry={nodes.Wands_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-Ace");
        }}
        geometry={nodes.Wands_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-2");
        }}
        geometry={nodes.Wands_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-3");
        }}
        geometry={nodes.Wands_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-4");
        }}
        geometry={nodes.Wands_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-5");
        }}
        geometry={nodes.Wands_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-6");
        }}
        geometry={nodes.Wands_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-7");
        }}
        geometry={nodes.Wands_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-8");
        }}
        geometry={nodes.Wands_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-9");
        }}
        geometry={nodes.Wands_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Wands-10");
        }}
        geometry={nodes.Wands_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("The_Fool");
        }}
        geometry={nodes.Cups_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("The_Fool");
        }}
        geometry={nodes.Cups_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("The_Fool");
        }}
        geometry={nodes.Cups_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("The_Fool");
        }}
        geometry={nodes.Cups_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("The_Fool");
        }}
        geometry={nodes.Cups_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-2");
        }}
        geometry={nodes.Cups_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-3");
        }}
        geometry={nodes.Cups_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-4");
        }}
        geometry={nodes.Cups_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-5");
        }}
        geometry={nodes.Cups_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-6");
        }}
        geometry={nodes.Cups_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-7");
        }}
        geometry={nodes.Cups_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-8");
        }}
        geometry={nodes.Cups_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-9");
        }}
        geometry={nodes.Cups_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Cups-10");
        }}
        geometry={nodes.Cups_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-king");
        }}
        geometry={nodes.Swords_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-Queen");
        }}
        geometry={nodes.Swords_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-Knight");
        }}
        geometry={nodes.Swords_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-Page");
        }}
        geometry={nodes.Swords_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-Ace");
        }}
        geometry={nodes.Swords_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-2");
        }}
        geometry={nodes.Swords_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-3");
        }}
        geometry={nodes.Swords_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-4");
        }}
        geometry={nodes.Swords_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-5");
        }}
        geometry={nodes.Swords_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-6");
        }}
        geometry={nodes.Swords_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-7");
        }}
        geometry={nodes.Swords_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-8");
        }}
        geometry={nodes.Swords_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-9");
        }}
        geometry={nodes.Swords_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Swords-10");
        }}
        geometry={nodes.Swords_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-King");
        }}
        geometry={nodes.Pentacles_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-Queen");
        }}
        geometry={nodes.Pentacles_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-Knight");
        }}
        geometry={nodes.Pentacles_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-Page");
        }}
        geometry={nodes.Pentacles_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-Ace");
        }}
        geometry={nodes.Pentacles_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-2");
        }}
        geometry={nodes.Pentacles_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-3");
        }}
        geometry={nodes.Pentacles_3.geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes.Pentacles_4.geometry} material={materials.Back} />
      <mesh
        onClick={() => {
          handleCard("Pentacles-4");
        }}
        geometry={nodes.Pentacles_4_1.geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes.Pentacles_4_2.geometry} material={materials.Side} />
      <mesh
        onClick={() => {
          handleCard("Pentacles-5");
        }}
        geometry={nodes.Pentacles_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-6");
        }}
        geometry={nodes.Pentacles_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-7");
        }}
        geometry={nodes.Pentacles_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-8");
        }}
        geometry={nodes.Pentacles_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-9");
        }}
        geometry={nodes.Pentacles_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={() => {
          handleCard("Pentacles-10");
        }}
        geometry={nodes.Pentacles_10.geometry}
        material={materials.Back}
      />
      <instancedMesh
        args={[nodes.mesh_0.geometry, materials.Back, 200]}
        instanceMatrix={nodes.mesh_0.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.mesh_2.geometry, materials.Side, 199]}
        instanceMatrix={nodes.mesh_2.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("/tarot.gltf");
