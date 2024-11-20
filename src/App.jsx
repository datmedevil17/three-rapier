import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";

function App() {
  return (
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Suspense>
      <Physics>
      <Experience />
      </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;
