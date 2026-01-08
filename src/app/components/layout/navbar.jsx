"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      setShowFixed(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  const NavbarContent = (
    <>
      <Image
        src="/img/logo + teks.png"
        alt="Logo"
        width={100}
        height={40}
        className="object-contain"
      />

      <div className="flex">
        <ul className="flex gap-6 items-center pr-10">
          {navItems.map((item) => (
            <li key={item.label} className="list-none">
              <a
                href={item.href}
                className="
                  relative block px-5 py-2
                  text-sm font-semibold uppercase text-white z-10
                  transition-colors duration-300

                  before:content-['']
                  before:absolute before:inset-0
                  before:border-t-2 before:border-b-2 before:border-lavender
                  before:scale-y-[2] before:opacity-0
                  before:transition-all before:duration-300

                  after:content-['']
                  after:absolute after:top-[2px] after:left-0
                  after:w-full after:h-full
                  after:bg-[#7f3cf0]
                  after:scale-x-0 after:scale-y-0
                  after:opacity-0 after:transition-all after:duration-300
                  after:-z-10

                  hover:before:scale-y-100 hover:before:opacity-100
                  hover:after:scale-x-100 hover:after:scale-y-100 hover:after:opacity-100
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="
            relative overflow-hidden rounded-full
            bg-gradient-lavender px-7 py-3
            font-semibold text-white
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_10px_30px_rgba(127,60,240,0.45)]
          "
        >
          <span className="absolute inset-0 bg-gradient-to-r from-lavender-teks to-lavender opacity-0 hover:opacity-100 transition-opacity" />
          <span className="relative z-10">Contact Me</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* HERO NAVBAR */}
      <AnimatePresence>
        {!showFixed && (
          <motion.nav
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full z-40"
          >
            <div className="flex items-center justify-between px-24 py-6">
              {NavbarContent}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* FIXED NAVBAR */}
      <AnimatePresence>
        {showFixed && (
          <motion.nav
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
            className="
              fixed top-0 left-0 w-full z-50
              bg-dark shadow-[0_0_30px_rgba(127,60,240,0.25)]
              
            "
          >
            <div className="flex items-center justify-between px-24 py-4">
              {NavbarContent}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
