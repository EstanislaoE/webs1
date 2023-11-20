import Image from 'next/image'
import Particle from '../../components/Particle';
//import Particle from '/components/Particle'

import React from 'react'

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-0 md:right-0 bottom-0 z-[10]">
        {<Image
          src="/assets/drne.png"
          alt="drne"
          width={460}
          height={460}
          className="medium top-0 rigth-0 md:right-0 botom-50"
        />}
        <Image
          src="/assets/mountains.png"
          alt="paint"
          width={2000}
          height={2000}
        //className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]/="
        />
      </div>
      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px]">
          Building the infra{" "}
          <span className="text-green-500">Packages on Time</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400]">
          Creating the future of transportation in the city mobility.
        </p>
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-5">
          <Image
            src="/assets/linkedin256.png" //My project wheel
            alt="projects"
            width={80}
            height={80}
            className="slow-spin"
          />

        </div>
      </div>
    </main>
  );
}
