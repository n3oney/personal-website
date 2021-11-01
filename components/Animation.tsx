import React, { useRef, Suspense, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import useMousePosition from '../hooks/useMousePosition';
import Neoney from './NeoneyGLTF';
import { useBoundingclientrect } from 'rooks';
import { MotionValue, useSpring, useTransform } from 'framer-motion';

const degToRad = (deg: number) => (deg * Math.PI) / 180;

const Logo = ({ transformedX, transformedY }: { transformedX: MotionValue<number>, transformedY: MotionValue<number> }) => {
  const [rotation, setRotation] = useState<[number, number, number]>([1.57079633, 0, 0]);

  useFrame(() => {
    setRotation([1.57079633 + transformedY.get(), 0, transformedX.get()]);
  });

  return (
    <mesh position={[0, 0, 0]} rotation={rotation}>
      <Neoney position={[0, 0, 0]} />
    </mesh>
  );
};

const AnimationController: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const pos = useMousePosition(true);
  const rect = useBoundingclientrect(ref) as DOMRect | undefined;
  const logoCenter = useMemo(
    () => ({
      x:
        ((rect?.x ?? 0) + (rect?.width ?? 0) / 2) /
        (typeof window !== 'undefined' ? window.innerWidth : 0),
      y:
        ((rect?.y ?? 0) + (rect?.height ?? 0) / 2) /
        (typeof window !== 'undefined' ? window.innerHeight : 0),
    }),
    [rect]
  );

  const valueX = useSpring(pos.x - logoCenter.x, {
    mass: 0.1,
    damping: 10,
    bounce: 0,
  });
  const valueY = useSpring(pos.y - logoCenter.y, {
    mass: 0.1,
    damping: 10,
    bounce: 0,
  });

  useEffect(() => {
    valueX.set(pos.x - logoCenter.x);
  }, [pos, logoCenter, valueX]);

  useEffect(() => {
    valueY.set(pos.y - logoCenter.y);
  }, [pos, logoCenter, valueY]);

  const transformedX = useTransform(valueX, [-logoCenter.x, 0, 1 - logoCenter.x], [1.57079633, 0, -1.57079633]);
  const transformedY = useTransform(valueY, [-logoCenter.y, 0, 1 - logoCenter.y], [1.57079633, 0, -1.57079633]);

  return (
    <div className='flex-grow lg:flex-grow-0 lg:w-1/2 lg:h-full h-1/2'>
      <Canvas
        ref={ref}
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, -10], fov: 60 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Logo
            transformedX={transformedX}
            transformedY={transformedY}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AnimationController;
