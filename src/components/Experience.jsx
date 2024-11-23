import { OrbitControls, SpotLight } from "@react-three/drei";
import { Model } from "./Avatar";


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Model />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
