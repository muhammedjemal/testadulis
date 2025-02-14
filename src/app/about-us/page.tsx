"use client";
import React, { useState } from "react";
import { AnimatedTestimonialsDemo } from "@/components/Team";
import { TypewriterEffectSmoothDemo } from "@/components/typerOFEthio";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SlidingBanner from "@/components/VeryTop";
import MobileNav from "@/components/mobilenav11";
import Header from "@/components/navDesktop2";
import AdulisEthiopianArt from "@/components/aboutAdulis";
import { motion } from "motion/react";

export default function Home() {
  return (
<>
    <div className="relative w-full flex items-center justify-center min-h-screen">
      <SlidingBanner
        texts={[
          "Welcome to our site!",
          "Check out our deals!",
          "Get Christmas 20% off!",
          "Enjoy free shipping!",
          // tell the chrstimas 20 percent off in a good and marking english
        ]}
      />
      {/* <div className="mt-96 relative my-auto" />
      <div className="mt-96 relative my-auto" />
      <div className="absolute inset-0 flex items-center justify-center   bg-black bg-opacity-50 -z-10">
        <div className="text-white text-4xl font-bold">About Us</div>
      </div> */}
      <div className="h-[95px] block"></div>
      <Header />
      <MobileNav prodName={""} />
      {/* <Hero /> */}
      <div className="h-[110px]"></div>
      <div className="mt-[110px]">
        <BackgroundBeamsWithCollision>
          <div className="">
            <h1>
              <TypewriterEffectSmoothDemo />
            </h1>
            <AnimatedTestimonialsDemo />
          </div>
        </BackgroundBeamsWithCollision>
      </div>

    </div>
    <div className="bg-hero-background">

      <AdulisEthiopianArt/>
      </div>

     </>
  );
}
