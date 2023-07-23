import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const TitleComponent = () => {
  return <h1 className="text-6xl text-white font-light">Alex Muzzy</h1>;
};

const ThreeCanvas = () => {
  const numberOfSpheres = 300;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {[...Array(numberOfSpheres)].map((_, i) => {
        const x = Math.random() * 20 - 5;
        const y = Math.random() * 20 - 5;
        const z = Math.random() * 20 - 5;

        const radius = Math.random() * 0.1;
        const width = 32;
        const height = 32;
        let opacity = Math.random();

        // Make sure opacity is not too low
        opacity = opacity < 0.1 ? 0.1 : opacity;

        return (
          <Sphere
            key={i}
            position={[x, y, z]}
            radius={radius}
            width={width}
            height={height}
            opacity={opacity}
          />
        );
      })}
    </Canvas>
  );
};

const Sphere = ({
  position,
  radius,
  width,
  height,
  opacity,
}: {
  position: [number, number, number];
  radius: number;
  width: number;
  height: number;
  opacity: number;
}) => {
  const ref = useRef<Mesh>(null!);

  useFrame(() => {
    // Move the sphere around in a circle using trigonometry
    const time = Date.now() * 0.0001;
    const x = Math.sin(time) * position[0];
    const z = Math.cos(time) * position[2];

    ref.current.position.x = x;
    ref.current.position.y = position[1];
    ref.current.position.z = z;

    // Rotate the sphere
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh {...{ ref }} position={position}>
      <sphereGeometry args={[radius, width, height]} />
      <meshPhongMaterial color="lightblue" opacity={opacity} transparent />
    </mesh>
  );
};

function App() {
  return (
    <>
      {/* This is the background */}
      <div className="absolute w-screen h-screen bg-black">
        <ThreeCanvas />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TitleComponent />
        </div>
      </div>
    </>
  );
}

export default App;
