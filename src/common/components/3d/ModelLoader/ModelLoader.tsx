import { useLoader } from "@react-three/fiber";
import { FC } from "react";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { ILoadModelProps, IModelLoaderProps } from "../types";

const LoadGLTF: FC<ILoadModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  return gltf ? <primitive object={gltf.scene} /> : null;
};

const LoadFBX: FC<ILoadModelProps> = ({ url }) => {
  const fbx: any = useLoader(FBXLoader, url);
  return fbx ? <primitive object={fbx} /> : null;
};

const LoadOBJ: FC<ILoadModelProps> = ({ url }) => {
  const obj: any = useLoader(OBJLoader, url);
  return obj ? <primitive object={obj} /> : null;
};

const loaders = {
  gltf: LoadGLTF,
  glb: LoadGLTF,
  fbx: LoadFBX,
  obj: LoadOBJ,
};

const ModelLoader: FC<Omit<IModelLoaderProps, "onCaptureModel">> = ({
  url,
  format,
}) => {
  const Loader = loaders[format];
  return <Loader url={url} />;
};

export default ModelLoader;
