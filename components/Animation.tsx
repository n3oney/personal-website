import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import useMousePosition from '../hooks/useMousePosition';
import { Vector3 } from 'three';
import Neoney from './NeoneyGLTF';

const Logo = () => {
    const pos = useMousePosition(true);
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame(() => { mesh.current.rotateOnWorldAxis(new Vector3(0, 1, 0), (pos.x - 0.5) * 0.04); mesh.current.rotateOnWorldAxis(new Vector3(-1, 0, 0), (pos.y - 0.5) * 0.04) });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <Neoney position={[0, 0, 0]} />
        </mesh>
    );
}

const AnimationController: React.FC = () => {
    return (
        <div className="flex-grow lg:flex-grow-0 lg:w-1/2 lg:h-full h-1/2">
            <Canvas style={{width: '100%', height: '100%'}} camera={{ position: [0, 0, -10], fov: 60 }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                <Logo />
            </Canvas>
        </div>
    );
}

export default AnimationController;