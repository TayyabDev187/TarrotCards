import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, EnvironmentMap } from "@react-three/drei";
import Modal from "../../../components/models/Tarot";
import { CameraControls } from "@react-three/drei";

const FrontModel = () => {
  const cameraControlRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change 3000 to desired loading time in milliseconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-800 animate-pulse">
            Shuffling Cards...
          </h1>
          {/* <img src="images/shuffle.gif" /> */}
        </div>
      )}
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isLoading ? "hidden" : "block"
        }`}
      >
        <Canvas camera={{ position: [30, 80, 0] }}>
          <CameraControls ref={cameraControlRef} />
          <ambientLight intensity={2} />
          <OrbitControls
            minPolarAngle={Math.PI * (-2.2 / 12)}
            maxPolarAngle={Math.PI * (2.5 / 12)}
            enableZoom={true}
            enablePan={true}
            minDistance={60}
            maxDistance={75}
            minAzimuthAngle={-Math.PI / 10} // -90 degrees
            maxAzimuthAngle={Math.PI / 10} // 90 degrees
          />
          <EnvironmentMap background="only" />
          <Suspense fallback={null}>
            <Modal />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default FrontModel;
