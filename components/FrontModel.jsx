import { Suspense, useRef } from "react"; // Import useRef
import { Canvas } from "@react-three/fiber";
import { OrbitControls, EnvironmentMap } from "@react-three/drei";
import CardOne from "./models/CardOne";
import { CameraControls } from "@react-three/drei";

const FrontModel = () => {
  const cameraControlRef = useRef(CameraControls | null);

  return (
    <div className="px-20 w-full">
      <Canvas camera={{ position: [-16, 10, -15] }}>
        <CameraControls ref={cameraControlRef} />
        <ambientLight intensity={2} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={20}
          maxDistance={35}
          minPolarAngle={(Math.PI * 5.2) / 12}
          maxPolarAngle={(Math.PI * 5.5) / 12}
          minAzimuthAngle={-Math.PI / 10} // -90 degrees
          maxAzimuthAngle={Math.PI / 10} // 90 degrees
        />
        <EnvironmentMap background="only" />
        <Suspense fallback={null}>
          {/* <Slider data={data} id={clickedMemory} />
      <BannerLeft setMemory={setMemory} />
      <BannerRight setMemory={setMemory} />
      <Audience data={data} setMemory={setMemory} id={clickedMemory} fullScreen={fullScreen} /> */}
          {/* <Model ref={modelRef} /> */}
          <CardOne />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FrontModel;
