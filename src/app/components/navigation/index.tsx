"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './nav-button';

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;

    return (
    <div className='fixed w-full h-screen flex items-center justify-center'>
        <div className='flex items-center justify-center relative animate-spin-slow hover:pause group'>
            {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = 'calc(20vw - 1rem)';
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                return (
                    <NavButton key={btn.label} x={x} y={y} {...btn} />
                )
            })}
        </div>
    </div>
  )
}

export default Navigation
