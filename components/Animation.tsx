import React, { useRef, Suspense, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import useMousePosition from '../hooks/useMousePosition';
import { Vector3 } from 'three';
import Neoney from './NeoneyGLTF';
import { useBoundingclientrect, useWindowSize } from 'rooks';
import { useMotionValue, useTransform } from 'framer-motion';

const degToRad = (deg: number) => (deg * Math.PI) / 180;

const Logo = ({ rotation }: { rotation: [number, number, number] }) => {
  return (
    <mesh position={[0, 0, 0]} rotation={rotation}>
      <Neoney position={[0, 0, 0]} />
    </mesh>
  );
};

const AnimationController: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const pos = useMousePosition(true);
  const rect = useBoundingclientrect(ref);
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

  const valueX = useMotionValue(pos.x - logoCenter.x);
  const valueY = useMotionValue(pos.y - logoCenter.y);

  useEffect(() => {
    valueX.set(pos.x - logoCenter.x);
  }, [pos, logoCenter, valueX]);

  useEffect(() => {
    valueY.set(pos.y - logoCenter.y);
  }, [pos, logoCenter, valueY]);

  const transformedX = useTransform(valueX, [-logoCenter.x, 0, 1 - logoCenter.x], [1.5, 0, -1.5]);
  const transformedY = useTransform(valueY, [-logoCenter.y, 0, 1 - logoCenter.y], [1.5, 0, -1.5]);

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
            rotation={[
              transformedY.get() + degToRad(90),
              0,
              transformedX.get()
            ]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AnimationController;
