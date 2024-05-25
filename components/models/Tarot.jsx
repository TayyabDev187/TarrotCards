import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAppContext } from "../../pages/_app";
import { useRouter } from "next/router";
export default function Model(props) {
  const { nodes, materials } = useGLTF("new/tarot.gltf");
  const { setPrompt } = useAppContext();
  const router = useRouter();

  function handleCard(value, image) {
    setPrompt((prev) => ({ ...prev, card: value, image }));
    router.push("/result");
  }
  const ref = useRef();

  return (
    <group {...props} position={[-30, -60, 5]} ref={ref} dispose={null}>
      <mesh
        onClick={(e) => {
          handleCard("TheFool", "0-The_Fool.jpg");
        }}
        geometry={nodes["0_The_Fool_1"].geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes["0_The_Fool"].geometry} material={materials.Back} />
      <mesh
        onClick={(e) => {
          handleCard("TheMagician", "1-TheMagician.jpg");
        }}
        geometry={nodes["1_The_Magician"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheHighPriestess", "2-TheHighPriestess.jpg");
        }}
        geometry={nodes["2_The_High_Priestess"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheEmpress", "3-TheEmpress.jpg");
        }}
        geometry={nodes["3_The_Empress"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheEmperor", "4-TheEmperor.jpg");
        }}
        geometry={nodes["4_The_Emperor"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheHierophant", "5-TheHierophant.jpg");
        }}
        geometry={nodes["5_The_Hierophant"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheLovers", "6-TheLovers.jpg");
        }}
        geometry={nodes["6_The_Lovers"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheChariot", "7-TheChariot.jpg");
        }}
        geometry={nodes["7_The_Chariot"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Strength", "8-Strength.jpg");
        }}
        geometry={nodes["8_Strength"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheHermit", "9-TheHermit.jpg");
        }}
        geometry={nodes["9_The_Hermit"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("WheelOfFortune", "10-WheelOfFortune.jpg");
        }}
        geometry={nodes["10_Wheel_of_Fortune"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Justice", "11-Justice.jpg");
        }}
        geometry={nodes["11_Justice"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheHangedMan", "12-TheHangedMan.jpg");
        }}
        geometry={nodes["12_The_Hanged_Man"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Death", "13-Death.jpg");
        }}
        geometry={nodes["13_Death"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Temperance", "14-Temperance.jpg");
        }}
        geometry={nodes["14_Temperance"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheDevil", "15-TheDevil.jpg");
        }}
        geometry={nodes["15_The_Devil"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheTower", "16-TheTower.jpg");
        }}
        geometry={nodes["16_The_Tower"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheStar", "17-TheStar.jpg");
        }}
        geometry={nodes["17_The_Star"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheMoon", "18-TheMoon.jpg");
        }}
        geometry={nodes["18_The_Moon"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheSun", "19-TheSun.jpg");
        }}
        geometry={nodes["19_The_Sun"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Judgement", "20-Judgement.jpg");
        }}
        geometry={nodes["20_Judgement"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("TheWorld", "21-TheWorld.jpg");
        }}
        geometry={nodes["21_The_World"].geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups1", "Cups01.jpg");
        }}
        geometry={nodes.Wands_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups2", "Cups02.jpg");
        }}
        geometry={nodes.Wands_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups3", "Cups03.jpg");
        }}
        geometry={nodes.Wands_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups4", "Cups04.jpg");
        }}
        geometry={nodes.Wands_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups5", "Cups05.jpg");
        }}
        geometry={nodes.Wands_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups6", "Cups06.jpg");
        }}
        geometry={nodes.Wands_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups7", "Cups07.jpg");
        }}
        geometry={nodes.Wands_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups8", "Cups08.jpg");
        }}
        geometry={nodes.Wands_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups9", "Cups09.jpg");
        }}
        geometry={nodes.Wands_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups10", "Cups10.jpg");
        }}
        geometry={nodes.Wands_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups11", "Cups11.jpg");
        }}
        geometry={nodes.Wands_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups12", "Cups12.jpg");
        }}
        geometry={nodes.Wands_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups13", "Cups13.jpg");
        }}
        geometry={nodes.Wands_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Cups14", "Cups14.jpg");
        }}
        geometry={nodes.Wands_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles1", "Pentacles01.jpg");
        }}
        geometry={nodes.Cups_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles2", "Pentacles02.jpg");
        }}
        geometry={nodes.Cups_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles3", "Pentacles03.jpg");
        }}
        geometry={nodes.Cups_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles4", "Pentacles04.jpg");
        }}
        geometry={nodes.Cups_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles5", "Pentacles05.jpg");
        }}
        geometry={nodes.Cups_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles6", "Pentacles06.jpg");
        }}
        geometry={nodes.Cups_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles7", "Pentacles07.jpg");
        }}
        geometry={nodes.Cups_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles8", "Pentacles08.jpg");
        }}
        geometry={nodes.Cups_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles9", "Pentacles09.jpg");
        }}
        geometry={nodes.Cups_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles10", "Pentacles10.jpg");
        }}
        geometry={nodes.Cups_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles11", "Pentacles11.jpg");
        }}
        geometry={nodes.Cups_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles12", "Pentacles12.jpg");
        }}
        geometry={nodes.Cups_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles13", "Pentacles13.jpg");
        }}
        geometry={nodes.Cups_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Pentacles14", "Pentacles14.jpg");
        }}
        geometry={nodes.Cups_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords1", "Swords01.jpg");
        }}
        geometry={nodes.Swords_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords2", "Swords02.jpg");
        }}
        geometry={nodes.Swords_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords3", "Swords03.jpg");
        }}
        geometry={nodes.Swords_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords4", "Swords04.jpg");
        }}
        geometry={nodes.Swords_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords5", "Swords05.jpg");
        }}
        geometry={nodes.Swords_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords6", "Swords06.jpg");
        }}
        geometry={nodes.Swords_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords7", "Swords07.jpg");
        }}
        geometry={nodes.Swords_3.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords8", "Swords08.jpg");
        }}
        geometry={nodes.Swords_4.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords9", "Swords09.jpg");
        }}
        geometry={nodes.Swords_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords10", "Swords10.jpg");
        }}
        geometry={nodes.Swords_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords11", "Swords11.jpg");
        }}
        geometry={nodes.Swords_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords12", "Swords12.jpg");
        }}
        geometry={nodes.Swords_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords13", "Swords13.jpg");
        }}
        geometry={nodes.Swords_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Swords14", "Swords14.jpg");
        }}
        geometry={nodes.Swords_10.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands1", "Wands01.jpg");
        }}
        geometry={nodes.Pentacles_King.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands2", "Wands02.jpg");
        }}
        geometry={nodes.Pentacles_Queen.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands3", "Wands03.jpg");
        }}
        geometry={nodes.Pentacles_Knight.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands4", "Wands04.jpg");
        }}
        geometry={nodes.Pentacles_Page.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands5", "Wands05.jpg");
        }}
        geometry={nodes.Pentacles_Ace.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands6", "Wands06.jpg");
        }}
        geometry={nodes.Pentacles_2.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands7", "Wands07.jpg");
        }}
        geometry={nodes.Pentacles_3.geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes.Pentacles_4.geometry} material={materials.Back} />
      <mesh
        onClick={(e) => {
          handleCard("Wands8", "Wands08.jpg");
        }}
        geometry={nodes.Pentacles_4_1.geometry}
        material={materials.Back}
      />
      <mesh geometry={nodes.Pentacles_4_2.geometry} material={materials.Side} />
      <mesh
        onClick={(e) => {
          handleCard("Wands9", "Wands09.jpg");
        }}
        geometry={nodes.Pentacles_5.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands10", "Wands10.jpg");
        }}
        geometry={nodes.Pentacles_6.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands11", "Wands11.jpg");
        }}
        geometry={nodes.Pentacles_7.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands12", "Wands12.jpg");
        }}
        geometry={nodes.Pentacles_8.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands13", "Wands13.jpg");
        }}
        geometry={nodes.Pentacles_9.geometry}
        material={materials.Back}
      />
      <mesh
        onClick={(e) => {
          handleCard("Wands14", "Wands14.jpg");
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
