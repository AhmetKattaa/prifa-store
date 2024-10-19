"use client";

import { Button } from "@medusajs/ui";
import Link from "next/link";
import SlidingAdBar from "./../../../common/components/SlidingAdBar/index";
import Section2 from "./../Section2/index";
import Section3 from "./../Section3/index";
import Section4 from "./../Section4/index";
import Section5 from "./../Section5/index";
import Section6 from "./../Section6/index";
import Section8 from "./../Section8/index";
import PopupModal from "./../popup/index";

const Hero = () => {
  return (
    <>
      <PopupModal />

      {/* Arka Plan Alanı */}
      <div
        className="relative h-screen w-full overflow-hidden"
        style={{
          top:"0",
          backgroundImage: `url('https://lh3.googleusercontent.com/d/1ekQhJ6c87ig13MjiBpA_NtpuQtWu5AME=s1000')`,
          backgroundSize: "cover", // Görsel ekranı doldurur.
          backgroundPosition: "center", // Görsel merkezlenir.
          backgroundRepeat: "no-repeat", // Tekrar etmez.
        }}
      >
        {/* Mobil için farklı arka plan */}
        <div
          className="md:hidden absolute inset-0"
          style={{
            top:"0",
            backgroundImage: `url('https://lh3.googleusercontent.com/d/1eai33y6kTs166DcIqL5VWBU3mJ2qlnoP=s1000')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* İçerik Alanı */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-start p-8 md:pl-16 text-left gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-tight font-sans">
            Instant Caffeine Boost: <br />
            Conveniences for Busy Lives
          </h1>

          <p className="text-lg md:text-xl font-normal text-black max-w-xl">
            Stay energized and focused throughout your hectic day with quick and
            easy PriFa Coffee tablets. Simply let one tablet dissolve in your
            mouth and enjoy the whole benefits of Coffee.
          </p>

          <Link href="/store">
            <Button
              size="xlarge"
              className="mt-4 inline-block bg-[#b01b1b] text-white text-lg md:text-2xl font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-[#B85928] transition"
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>

      {/* Diğer Bölümler */}
      <SlidingAdBar />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section8 />
    </>
  );
};

export default Hero;
