import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, memo } from "react";
import { Mesh } from "three";
import { SettingsState } from "../App";

// Using memo so the re render of the ThreeJs Canvas is skipped
// when any state changes that are not related to the ThreeJs Canvas.
export const ThreeCanvas = memo(({ settings }: { settings: SettingsState }) => {
  const numberOfSpheres = 300;

  // Memoize sphere data to prevent recalculation on every render
  const sphereData = useMemo(() => {
    return Array.from({ length: numberOfSpheres }, () => {
      const x = Math.random() * 20 - 5;
      const y = Math.random() * 20 - 5;
      const z = Math.random() * 20 - 5;
      const radius = Math.random() * 0.1;
      const opacity = Math.max(Math.random(), 0.1);

      return {
        position: [x, y, z] as [number, number, number],
        radius,
        opacity,
      };
    });
  }, [numberOfSpheres]);

  const Sphere = ({
    position,
    radius,
    opacity,
  }: {
    position: [number, number, number];
    radius: number;
    opacity: number;
  }) => {
    const ref = useRef<Mesh>(null!);

    useFrame((state) => {
      if (!ref.current) return;

      // Use Three.js clock for consistent timing
      const time = state.clock.getElapsedTime() * 0.1;
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
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshPhongMaterial
          color={settings.colour}
          opacity={opacity}
          transparent
        />
      </mesh>
    );
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      style={{ background: "#000000" }}
      gl={{ alpha: false }}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      {sphereData.map((sphere, i) => (
        <Sphere
          key={i}
          position={sphere.position}
          radius={sphere.radius}
          opacity={sphere.opacity}
        />
      ))}
    </Canvas>
  );
});
