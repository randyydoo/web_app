"use client";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Bio = () => {
  return (
<<<<<<< HEAD
    <section>
      <div className="grid grid-cols-1 sm:grid-col-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-green-500 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
=======
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
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hello World, I'm Randy Do",
                1000,
<<<<<<< HEAD
                "Hello World, I love problem solving",
=======
                "I love problem solving and learning about different ambiguous algorithms",
                1000,
                "Check out some of my details below!",
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
<<<<<<< HEAD
          <p className="text-white-400 text-lg mb-6 lg:text-xl">
=======
          <p className="text-white-400 text-base sm:text-lg mb-6 lg:text-xl">
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
            I am currently a junior at California State University, Fullerton
            with intrests in algorithmic problem solving, AI/ML, and web
            development.
          </p>
          <div>
            <Link
<<<<<<< HEAD
              href="https://drive.google.com/file/d/1oPgTBCXlu6Z4SBktgt7cxyuhESwR0Yjc/view?usp=sharing"
=======
              href="https://drive.google.com/file/d/1C0cDnxebnDO4iUxMWvwjjo0-srjbDmwp/view?usp=sharing"
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
              target="_blank"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-black  hover:text-slate-300 hover:bg-black hover:border-slate-300 text-green-500 border border-green-500 font-extrabold mt-3">
                Resume
              </button>
            </Link>
<<<<<<< HEAD
=======
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
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
          transition={{ duration: 0.7 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded full col-span-5 place-self-center w-[300px] h-[300px] lg:w-[425px] lg:h-[500px] mt-4 lg:mt-0 relative">
            <Image
              src="/images/me.png"
              alt="me image"
=======
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/me.png"
              alt="hero image"
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
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
<<<<<<< HEAD

=======
>>>>>>> e42abb8b1e7b521c4572c3fef47f109a08e41d04
export default Bio;
