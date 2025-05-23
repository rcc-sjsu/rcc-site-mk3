"use client";
import Image from "next/image";
import { FaInstagramSquare, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { JSX } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Home(): JSX.Element {
    return (
        <main className="flex flex-row justify-center items-center h-[80vh] gap-5 bg-white relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-30 blur-[150px] z-0" />
<<<<<<< HEAD
            <div className="text-left max-w-[700px] pt-15 z-10 mt-10">
=======
            <div className="text-left max-w-[700px] pt-15 z-10 mt-10">  
>>>>>>> 9855caca93b364d7dfbbe5ab67c4c46e38b3474f
                <h1 className="text-3xl font-bold whitespace-nowrap">
                    <TypeAnimation
                        sequence={[
                            'Responsible Computing Club',
                            2000,
                            'Partners with Mozilla',
                            2000,
                            'Open to All Majors',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <div className="w-full max-w-5xl">
                    <p className="mb-5 text-[1.2rem]">
                        The Responsible Computing Club (RCC) at SJSU, partnering with Mozilla, empowers students to shape the future of tech through interdisciplinary, hands-on projects and industry connections. Connect with us through the links below!
                    </p></div>
                <div className="flex gap-6 mt-10">
                    <a href="https://www.instagram.com/rcc.sjsu/" className="text-5xl">
<<<<<<< HEAD
                        <FaInstagramSquare className="w-9 h-9 fill-[#5c2560] hover:fill-[#e1306c] hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/company/rcc-sjsu/" className="text-5xl">
                        <FaLinkedin className="w-9 h-9 fill-[#5c2560] hover:fill-[#0077b5] hover:scale-110 transition duration-300" />
                    </a>
                    <a href="mailto:rcc.sjsu@gmail.com" className="text-5xl">
                        <FaEnvelope className="w-9 h-9 fill-[#5c2560] hover:fill-[#ea4335] hover:scale-110 transition duration-300" />
                    </a>
                    <a href="https://discord.com/invite/RGG9dMw4Rc" className="text-5xl">
                        <FaDiscord className="w-10 h-10 fill-[#5c2560] hover:fill-[#7289da] hover:scale-110 transition duration-300" />
                    </a>
                </div>

=======
                        <FaInstagramSquare className="w-9 h-9 fill-[#5c2560]" />
                    </a>
                    <a href="https://www.linkedin.com/company/rcc-sjsu/" className="text-5xl">
                        <FaLinkedin className="w-9 h-9 fill-[#5c2560]" />
                    </a>
                    <a href="mailto:rcc.sjsu@gmail.com" className="text-5xl">
                        <FaEnvelope className="w-9 h-9 fill-[#5c2560]" />
                    </a>
                    <a href="https://discord.gg/RGG9dMw4Rc/" className="text-5xl">
                        <FaDiscord className="w-10 h-10 fill-[#5c2560]" />
                    </a>
                </div>
>>>>>>> 9855caca93b364d7dfbbe5ab67c4c46e38b3474f
            </div>
            <div className="flex flex-col items-center relative z-10">
                <div className="w-[250px] h-[250px] bg-transparent rounded-full flex justify-center items-center mt-30">
                    <Image
                        className="w-[240px] h-[240px] object-cover rounded-full"
                        src="/icons/mozilla-logo.png"
                        alt="Mozilla"
                        width={120}
                        height={120}
                    />
                </div>
                <div className="absolute -top-5 -right-10">
                    <Image className="absolute w-[50px] -top-[30px] right-[70px]" src="/icons/lightbulb.svg" alt="Lightbulb" width={50} height={50} />
                    <Image className="absolute w-[50px] -bottom-[20px] right-[20px]" src="/icons/smiley-icon.svg" alt="Smiley" width={50} height={50} />
                </div>
            </div>
        </main>
    );
}
