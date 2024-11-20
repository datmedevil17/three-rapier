import { OrbitControls,Box,Sphere } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useState,useRef } from "react";

export const Experience = () => {
    const [hover,setHover] = useState(false)
    const cube = useRef()
    const jump =()=>{
        cube.current.applyImpulse({x:0,y:5,z:0})

    }
  return (
    <>
    <ambientLight intensity={0.5}/>
    <directionalLight position={[-10,10,0]} intensity={0.4}/>
      <OrbitControls />
      <RigidBody ref={cube} position={[-2.5,1,0]}>
        <Box onPointerEnter={()=>setHover(true)} onPointerLeave={()=>setHover(false)}
            onClick={jump}>
            <meshStandardMaterial color={hover ? "hotpink" : "royalblue"}/>
        </Box>
      </RigidBody>

      <RigidBody type="fixed">
        <Box position={[0,0,0]} args={[10,1,10]}>
            <meshStandardMaterial color="springgreen"/>
        </Box>
      </RigidBody>
    </>
  );
};
