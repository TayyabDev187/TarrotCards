import { Suspense, useRef } from "react"; // Import useRef
import { Canvas } from "@react-three/fiber";
import { OrbitControls, EnvironmentMap } from "@react-three/drei";
import CardRecent from "./models/CardRecent";
import { CameraControls } from "@react-three/drei";

const RecentModal = () => {
  const cameraControlRef = useRef(CameraControls | null);

  return (
    <div className="px-20 w-full">
      <Canvas>
        <CameraControls ref={cameraControlRef} />
        <ambientLight intensity={2} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={30}
          maxDistance={45}
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
          <CardRecent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RecentModal;
