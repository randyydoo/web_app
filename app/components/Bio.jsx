"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Bio = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-green-400 mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"></span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hello World, I'm Randy Do",
                1000,
                "I love problem solving and learning about different ambiguous algorithms",
                1000,
                "Check out some of my details below!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white-400 text-base sm:text-lg mb-6 lg:text-xl">
            I am currently a senior at California State University, Fullerton
            graduating in 2025 with intrests in algorithmic problem solving,
            AI/ML, and API development.
          </p>
          <div>
            <Link
              href="https://drive.google.com/file/d/1oPgTBCXlu6Z4SBktgt7cxyuhESwR0Yjc/view?usp=sharing"
              target="_blank"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-black  hover:text-slate-300 hover:bg-black hover:border-slate-300 text-green-500 border border-green-500 font-extrabold mt-3">
                Resume
              </button>
            </Link>
            <Link href="https://github.com/randyydoo" target="_blank">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-black  hover:text-slate-300 hover:bg-black hover:border-slate-300 text-green-500 border border-green-500 font-extrabold mt-3">
                Github
              </button>
            </Link>
            <Link href="https://linkedin.com/in/randyydoo" target="_blank">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-black  hover:text-slate-300 hover:bg-black hover:border-slate-300 text-green-500 border border-green-500 font-extrabold mt-3">
                LinkedIn
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/me.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Bio;
