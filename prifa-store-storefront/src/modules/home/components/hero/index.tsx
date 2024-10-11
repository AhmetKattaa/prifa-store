"use client";

import { Button, Heading } from "@medusajs/ui"
import Link from "next/link";
import SlidingAdBar from './../../../common/components/SlidingAdBar/index';

const Hero = () => {
  return (
    <>
    <div className="p-30 h-screen w-full relative bg-cover bg-[url('https://images.pexels.com/photos/28856365/pexels-photo-28856365.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
      {/* İçerik Alanı - Solda Hizalı */}
      <div className="ml-16 absolute inset-0 z-10 flex flex-col justify-center items-start pl-8 md:pl-16 text-left gap-6 bg-white bg-opacity-0">
        
        {/* Başlık */}
        <h1 className="text-3xl font-sans md:text-4xl font-bold text-black leading-tight">
          Instant Caffeine Boost: <br />
          Conveniences for Busy Lives
        </h1>

        {/* Açıklama Metni */}
        <p className="text-lg md:text-xl font-normal text-black max-w-xl">
          Stay energized and focused throughout your hectic day with quick and easy PriFa Coffee tablets. 
          Simply let one tablet dissolve in your mouth and enjoy the whole benefits of Coffee.
        </p>

        {/* Buton */}
        <Link href="/store">
          <Button size="xlarge" className="mt-4 inline-block bg-[#b01b1b]  text-white text-lg md:text-2xl font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-[#B85928] transition">SHOP NOW</Button>
        </Link>
      </div>
    </div>
    <SlidingAdBar />
    </>
  );
};

export default Hero;

