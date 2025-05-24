"use client"

import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "./components/render-model";
import Wizard from "./components/models/wizard";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Image src={bg} alt="background-image" className="w-full h-full object-cover object-center opacity-25" fill={true} />

        <div className="w-full h-screen">
          {/* Navigation and 3D Model */}
          <Navigation />
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Add footer content here */}
      </footer>
    </>
  );
}
