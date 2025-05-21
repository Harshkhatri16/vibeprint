import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import "./Designer.css";

const Designer = () => {
  return (
    <div className="designer-page">
      <h1>🎨 3D Designer Studio</h1>
      
      <div className="design-canvas">
        <Canvas>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />

          {/* Controls */}
          <OrbitControls enableZoom={true} />

          {/* Lights */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* 3D Objects */}
          <mesh rotation={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </Canvas>
      </div>
      
      <div className="toolbox">
        <button>Add Text</button>
        <button>Add Image</button>
        <button>Change Color</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Designer;
