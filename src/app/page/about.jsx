"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function About() {
  const socials = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/_https.firdaus/",
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/putrafir/",
    },
    {
      icon: FaGithub,
      url: "https://github.com/putrafir",
    },
  ];

  return (
    <section className="relative z-10 flex items-center justify-between px-24 pt-52 pb-20">
      {/* LEFT */}
      <motion.div
        className="relative max-w-2xl"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Name */}
        <motion.p variants={itemUp} className="text-3xl mb-4 font-heading">
          I am Ahmad Putra Firdaus
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={itemUp}
          className="text-[64px] leading-tight font-extrabold mb-6 bg-gradient-lavender-to-white"
        >
          Software Engineer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemUp}
          className="max-w-xl text-base leading-relaxed text-white/70 mb-10"
        >
          Experienced Software Engineer building scalable digital solutions for
          web and mobile. Expert in modern ecosystem development using Laravel
          and Next.js for both the backend and frontend, and proficient in
          creating high-performance mobile applications with Swift and Flutter.
          Focus on clean code, responsive design using Tailwind CSS, and a
          commitment to delivering seamless user experiences through the
          integration of cutting-edge technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemUp} className="flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/1wrEAMaiep4hBFIIHYsTPQk0TV774J8OE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-lavender px-7 py-3 text-lavender-teks transition-all duration-300 hover:bg-[#7f3cf0] hover:text-white"
          >
            View Firdaus&apos;s CV
          </a>

          <motion.div variants={iconPop} className="flex gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="
                  group w-10 h-10 rounded-full border border-lavender
                  flex items-center justify-center
                  text-lavender-teks
                  transition-all duration-300 hover:bg-lavender
                "
              >
                <social.icon
                  size={16}
                  className="transition-colors duration-300 group-hover:text-white"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, rotate: -10, scale: 0.95 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="relative group"
      >
        <div
          className="
            rotate-[-4deg]
            rounded-4xl
            overflow-hidden
            border border-lavender
            transition-all duration-500 ease-out
            group-hover:rotate-0
            group-hover:border-lavender-teks
            group-hover:shadow-[0_0_25px_rgba(127,60,240,0.45)]
          "
        >
          <Image
            src="/img/mypicture.jpg"
            width={440}
            height={540}
            alt="Gerold"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ====== MOTION VARIANTS ====== */

const itemUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconPop = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "backOut",
    },
  },
};
