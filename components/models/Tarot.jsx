import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAppContext } from "../../pages/_app";
import { useRouter } from "next/router";
export default function Model(props) {
  const { nodes, materials } = useGLTF("new/tarot.gltf");
  const { setPrompt } = useAppContext();
  const router = useRouter();

  function handleCard(value, geometry, material) {
    setPrompt((prev) => ({ ...prev, card: value, material, geometry }));
    router.push("/result");
  }
  const ref = useRef();

  return (
    <group {...props} position={[-30, -60, 5]} ref={ref} dispose={null}>
      <mesh
        onClick={(e) => {
          handleCard(
            "The_Fool",
            nodes["0_The_Fool_1"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["0_The_Fool_1"].geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes["0_The_Fool"].geometry} material={materials.Back} />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheMagician",
            nodes["1_The_Magician"].geometry,
            materials["1_The_Magician"]
          );
        }}
        geometry={nodes["1_The_Magician"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheHighPriestess",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["2_The_High_Priestess"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheEmpress",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["3_The_Empress"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheEmperor",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["4_The_Emperor"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheHierophant",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["5_The_Hierophant"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheLovers",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["6_The_Lovers"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheChariot",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["7_The_Chariot"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Strength",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["8_Strength"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheHermit",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["9_The_Hermit"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wheel Of Fortun",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["10_Wheel_of_Fortune"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Justice",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["11_Justice"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheHangedMan",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["12_The_Hanged_Man"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Death",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["13_Death"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Temperance",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["14_Temperance"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheDevil",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["15_The_Devil"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheTower",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["16_The_Tower"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheStar",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["17_The_Star"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheMoon",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["18_The_Moon"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheSun",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["19_The_Sun"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Judgement",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["20_Judgement"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "TheWorld",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes["21_The_World"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-King",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-Queen",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-Knight",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-Page",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-Ace",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-2",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-3",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-4",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-5",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-6",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-7",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-8",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-9",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Wands-10",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Wands_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "The_Fool",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "The_Fool",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "The_Fool",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "The_Fool",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "The_Fool",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-2",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-3",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-4",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-5",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-6",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-7",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-8",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-9",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Cups-10",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Cups_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-king",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-Queen",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-Knight",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-Page",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-Ace",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-2",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-3",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-4",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-5",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-6",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-7",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-8",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-9",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Swords-10",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Swords_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-King",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-Queen",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-Knight",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-Page",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-Ace",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-2",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-3",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_3.geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes.Pentacles_4.geometry} material={materials.Back} />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-4",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_4_1.geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes.Pentacles_4_2.geometry} material={materials.Side} />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-5",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-6",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-7",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-8",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-9",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
        }}
        geometry={nodes.Pentacles_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard(
            "Pentacles-10",
            nodes["0_The_Fool"].geometry,
            materials["0-TheFool"]
          );
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
