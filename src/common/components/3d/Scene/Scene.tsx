import { Bounds, Center, OrbitControls, useBounds } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { FC, Suspense, useEffect } from "react";

import { ArtLoader, ModelLoader } from "..";
import { ISceneProps } from "./types";

const Scene: FC<ISceneProps> = ({
  url,
  format,
  ambientLight,
  directionalLight,
  backgroundColor,
  hemisphereLight,
  onCaptureModel,
  isCapture,
}) => {
  const Refresh = () => {
    const bounds = useBounds();
    useEffect(() => {
      bounds.refresh();
      bounds.clip();
      bounds.fit();
    }, [url]);
    return null;
  };

  const GetImage = () => {
    const { gl, scene, camera } = useThree();

    useEffect(() => {
      if (isCapture) {
        gl.render(scene, camera);
        onCaptureModel(gl.domElement.toDataURL("image/png", 1));
      }
    }, [isCapture]);

    return null;
  };

  return (
    <Canvas shadows resize={{ scroll: false }}>
      <color attach="background" args={[backgroundColor]} />
      <OrbitControls makeDefault />
      <ambientLight intensity={ambientLight.intensity} />
      <directionalLight intensity={directionalLight.intensity} castShadow />
      <hemisphereLight
        intensity={hemisphereLight.intensity}
        groundColor={hemisphereLight.groundColor}
      />
      <Suspense fallback={<ArtLoader />}>
        <Bounds fit clip observe margin={1.2}>
          <Center>
            <ModelLoader url={url} format={format} />
            <GetImage />
            <Refresh />
          </Center>
        </Bounds>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
