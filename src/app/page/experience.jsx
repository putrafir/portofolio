"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "../components/partials/header";
import { useEffect } from "react";
import { containerVariants, itemVariants } from "@/lib/animation";

export default function Experience() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [bgStyle, setBgStyle] = useState({ top: 0, height: 0 });

  const handleHover = (index) => {
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const item = itemRefs.current[index];
    const rect = item.getBoundingClientRect();

    setBgStyle({
      top: rect.top - containerTop,
      height: rect.height,
    });
    setActive(index);
  };

  useEffect(() => {
    if (!containerRef.current || !itemRefs.current[0]) return;

    const containerTop = containerRef.current.getBoundingClientRect().top;
    const rect = itemRefs.current[0].getBoundingClientRect();

    setBgStyle({
      top: rect.top - containerTop,
      height: rect.height,
    });
  }, []);

  const experiences = [
    {
      timeline: "Apr 2025 - Mei 2025",
      position: "IOS Developer & Learner",
      company: "Apple Developer Academy",
      desc: "Mengimplementasikan kode Swift dan desain UI/UX sesuai standar HIG untuk aksesibilitas tinggi. Kolaborasi Tim: Menerapkan metode Challenge-Based Learning untuk membangun aplikasi fungsional yang intuitif dan tepat guna.",
    },
    {
      timeline: "Okt 2023 - Mei 2025",
      position: "Graphic Designer & Illustrator",
      company: "Media Center Poliwangi",
      desc: "Memproduksi ilustrasi digital dan aset visual kreatif untuk media publikasi kampus. Komunikasi Visual: Memastikan konsistensi identitas brand dan efektivitas pesan melalui desain yang estetis serta komunikatif.",
    },
  ];

  return (
    <section id="experience" className="relative px-4 md:px-24 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3b1b6d,transparent_40%)]" />
      {/* TITLE */}
      <div className="text-center md:mb-20">
        <Header title="Experience" />
        {/* <p className="text-white/70 max-w-2xl mx-auto">
          We put your ideas and wishes into a unique digital experience that
          inspires both you and your customers.
        </p> */}
      </div>

      {/* LIST */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        ref={containerRef}
        className="relative  mx-auto"
      >
        {/* MOVING BACKGROUND */}

        <motion.div
          layout
          className="
              absolute left-0 w-full
              bg-gradient-to-r from-[#7f3cf0] to-[#5b2ccf]
              z-0
            "
          animate={{
            top: bgStyle.top,
            height: bgStyle.height,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* ITEMS */}
        <motion.ul variants={containerVariants} className="relative z-10">
          {experiences.map((item, i) => (
            <motion.li
              variants={itemVariants}
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              onMouseEnter={() => handleHover(i)}
              // onMouseLeave={() => setActive(null)}
              className="
                grid grid-rows-1 md:grid-cols-[400px_1fr_40px] gap-4 md:gap-8
                p-4 md:px-10  md:py-10
                border-b border-lavender/30
                cursor-pointer
              "
            >
              {/* LEFT */}
              <div className="relative flex items-start justify-between md:block">
                <div>
                  <h3
                    className={`text-md md:text-2xl font-bold transition-colors ${
                      active === i ? "text-white" : "text-white/90"
                    }`}
                  >
                    {item.position}
                  </h3>
                  <h4
                    className={` text-sm md:text-lg font-semibold ${
                      active === i ? "text-white" : " text-white/80"
                    }`}
                  >
                    {item.company}
                  </h4>
                  <h4
                    className={` text-sm md:text-lg  ${
                      active === i ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.timeline}
                  </h4>
                </div>
                <ArrowUpRight
                  className={`w-6 h-6 md:hidden transition-all ${
                    active === i ? "text-white rotate-45" : "text-lavender"
                  }`}
                />
              </div>

              {/* MIDDLE */}
              <p
                className={`max-w-md text-[12px] md:text-sm transition-colors ${
                  active === i ? "text-white/90" : "text-white/60"
                }`}
              >
                {item.desc}
              </p>

              {/* RIGHT */}
              <ArrowUpRight
                className={` hidden md:block w-6 h-6 transition-all ${
                  active === i ? "text-white rotate-45" : "text-lavender"
                }`}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
