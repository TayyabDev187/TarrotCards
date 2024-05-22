import { Suspense, useRef } from "react"; // Import useRef
import { Canvas } from "@react-three/fiber";
import { OrbitControls, EnvironmentMap } from "@react-three/drei";
import CardModalSingle from "../models/CardModalSingle";
import { CameraControls } from "@react-three/drei";

const SelectedCard = () => {
  const cameraControlRef = useRef(CameraControls | null);

  return (
    <div className="px-20 pt-40 mb-20 w-full">
      <Canvas>
        <CameraControls ref={cameraControlRef} />
        <ambientLight intensity={2} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={30}
          maxDistance={45}
          minAzimuthAngle={-Math.PI / 10} // -90 degrees
          maxAzimuthAngle={Math.PI / 10} // 90 degrees
        />
        <EnvironmentMap background="only" />
        <Suspense fallback={null}>
          <CardModalSingle />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SelectedCard;
