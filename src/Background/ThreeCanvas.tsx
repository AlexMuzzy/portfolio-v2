import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, memo } from "react";
import { Mesh, PlaneGeometry, BufferAttribute } from "three";

// Camera animation component
const CameraRig = () => {
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Subtle camera movement
    state.camera.position.x = Math.sin(time * 0.1) * 0.5;
    state.camera.position.y = 1 + Math.sin(time * 0.15) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

// Animated wave plane component
const WavePlane = ({ color, viewportWidth }: { color: string; viewportWidth: number; }) => {
  const meshRef = useRef<Mesh>(null!);

  // Create wave geometry
  const geometry = useMemo(() => {
    const width = viewportWidth * 0.075;
    return new PlaneGeometry(width, 20, 50, 50);
  }, [viewportWidth]);

  useFrame((state) => {
    if (!meshRef.current || !geometry) return;

    const time = state.clock.getElapsedTime();
    const positions = geometry.attributes.position;

    // Animate vertices to create wave effect
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      // Multiple sine waves for complex pattern
      const wave1 = Math.sin(x * 0.5 + time * 0.5) * 0.3;
      const wave2 = Math.sin(y * 0.3 + time * 0.3) * 0.4;
      const wave3 = Math.sin((x + y) * 0.2 + time * 0.2) * 0.2;

      const z = wave1 + wave2 + wave3;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    // Gentle rotation
    meshRef.current.rotation.x = -Math.PI / 2 + Math.sin(time * 0.1) * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, -3, -5]} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.5}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Floating geometric shape component
const FloatingShape = ({
  position,
  type,
  color,
  scale,
}: {
  position: [number, number, number];
  type: "icosahedron" | "octahedron" | "dodecahedron" | "tetrahedron";
  color: string;
  scale: number;
}) => {
  const meshRef = useRef<Mesh>(null!);
  const rotationSpeed = useMemo(() => ({
    x: (Math.random() - 0.5) * 0.02,
    y: (Math.random() - 0.5) * 0.02,
    z: (Math.random() - 0.5) * 0.01,
  }), []);

  const floatOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + floatOffset) * 0.3;
    
    // Rotation
    meshRef.current.rotation.x += rotationSpeed.x;
    meshRef.current.rotation.y += rotationSpeed.y;
    meshRef.current.rotation.z += rotationSpeed.z;
  });

  const GeometryComponent = () => {
    switch (type) {
      case "icosahedron":
        return <icosahedronGeometry args={[scale, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[scale, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[scale, 0]} />;
      case "tetrahedron":
        return <tetrahedronGeometry args={[scale, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      <GeometryComponent />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

// Ambient particles for extra visual depth
const Particles = ({ color }: { color: string }) => {
  const particleCount = 50;
  const particlesRef = useRef<Mesh>(null!);

  const positionAttribute = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return new BufferAttribute(positions, 3);
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positionAttribute.array, positionAttribute.itemSize]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Using memo so the re render of the ThreeJs Canvas is skipped
// when any state changes that are not related to the ThreeJs Canvas.
export const ThreeCanvas = memo(({ viewportWidth }: { viewportWidth: number; }) => {
  // Generate floating shapes data with better positioning
  const shapesData = useMemo(() => {
    const types: Array<"icosahedron" | "octahedron" | "dodecahedron" | "tetrahedron"> = [
      "icosahedron",
      "octahedron",
      "dodecahedron",
      "tetrahedron",
    ];

    // Create shapes in a more visible arrangement
    const shapes = [];
    
    // Ring of shapes around the viewer
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const radius = 7;
      shapes.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 3,
          Math.sin(angle) * radius - 2
        ] as [number, number, number],
        type: types[Math.floor(Math.random() * types.length)],
        scale: 0.4 + Math.random() * 0.3,
      });
    }
    
    // Add some background shapes
    for (let i = 0; i < 4; i++) {
      shapes.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 6,
          -8 - Math.random() * 5
        ] as [number, number, number],
        type: types[Math.floor(Math.random() * types.length)],
        scale: 0.8 + Math.random() * 0.5,
      });
    }

    return shapes;
  }, []);

  const colour = "lightblue";

  return (
    <Canvas
      camera={{ position: [0, 1, 8], fov: 65 }}
      style={{ 
        background: "linear-gradient(to bottom, #000000, #0a0a1a)",
      }}
      gl={{ alpha: false, antialias: true }}
    >
      {/* Gradient background */}
      <color attach="background" args={["#050510"]} />
      <fog attach="fog" args={["#000000", 10, 25]} />
      
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color={colour} />
      <pointLight position={[0, 5, 2]} intensity={1.2} color={colour} />
      <pointLight position={[-8, -2, -5]} intensity={0.6} color="#4080ff" />
      <pointLight position={[8, -2, -5]} intensity={0.6} color="#8040ff" />

      {/* Camera animation */}
      <CameraRig />

      {/* Wave plane */}
      <WavePlane color={colour} viewportWidth={viewportWidth} />

      {/* Ambient particles */}
      <Particles color={colour} />

      {/* Floating geometric shapes */}
      {shapesData.map((shape, i) => (
        <FloatingShape
          key={i}
          position={shape.position}
          type={shape.type}
          color={colour}
          scale={shape.scale}
        />
      ))}
    </Canvas>
  );
});
