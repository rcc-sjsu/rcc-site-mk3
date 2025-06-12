"use client";
import Image from "next/image";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { JSX } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home(): JSX.Element {
  return (
    <main className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 bg-white px-6 py-12">
      {/* blurred background */}
      <div className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-30 blur-[150px]" />

      {/* text + socials */}
      <div className="z-10 max-w-3xl text-center md:text-left">
        <h1 className="mb-4 font-bold whitespace-nowrap text-2xl sm:text-3xl md:text-4xl">
          <span className="inline-block min-h-[3rem] md:min-w-[500px] lg:min-w-[620px]">
            <TypeAnimation
              sequence={[
                "Responsible Computing Club",
                2000,
                "Partners with Mozilla",
                2000,
                "Open to All Majors",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="mb-6 text-base sm:text-lg">
          The Responsible Computing Club&nbsp;(RCC) at SJSU, partnering with
          Mozilla, empowers students to shape the future of tech through
          interdisciplinary, hands-on projects and industry connections.
          Connect with us through the links below!
        </p>

        <div className="flex justify-center gap-6 md:justify-start">
          <a href="https://www.instagram.com/rcc.sjsu/" aria-label="Instagram">
            <FaInstagramSquare className="h-8 w-8 fill-[#5c2560]" />
          </a>
          <a href="https://www.linkedin.com/company/rcc-sjsu/" aria-label="LinkedIn">
            <FaLinkedin className="h-8 w-8 fill-[#5c2560]" />
          </a>
          <a href="mailto:rcc.sjsu@gmail.com" aria-label="Email">
            <FaEnvelope className="h-8 w-8 fill-[#5c2560]" />
          </a>
          <a href="https://discord.gg/RGG9dMw4Rc/" aria-label="Discord">
            <FaDiscord className="h-9 w-9 fill-[#5c2560]" />
          </a>
        </div>
      </div>

      {/* logo */}
      <div className="relative z-10 flex justify-center">
        <div className="overflow-hidden rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]">
          <Image
            src="/icons/mozilla-logo.png"
            alt="Mozilla"
            width={250}
            height={250}
            className="h-full w-full object-cover"
          />
        </div>

        {/* floating icons */}
        <div className="absolute -top-5 -right-10 hidden sm:block">
          <Image
            src="/icons/lightbulb.svg"
            alt="Lightbulb"
            width={40}
            height={40}
            className="absolute -top-[30px] right-[70px]"
          />
          <Image
            src="/icons/smiley-icon.svg"
            alt="Smiley"
            width={40}
            height={40}
            className="absolute -bottom-[20px] right-[20px]"
          />
        </div>
      </div>
    </main>
  );
}
