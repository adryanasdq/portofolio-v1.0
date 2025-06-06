import React, { Suspense } from 'react'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei';

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
}

const RenderModel: React.FC<RenderModelProps> = ({children, className}) => {
  return (
    <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Environment preset='dawn' />
    </Canvas>
  )
}

export default RenderModel
