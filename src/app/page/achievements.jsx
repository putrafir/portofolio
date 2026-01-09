"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MessageCircle } from "lucide-react";
import Header from "../components/partials/header";

const blogs = [
  {
    id: 1,
    image: "/img/achievements/apple foundation.webp",
    title: "Completing The Apple Foundation Program @UC",
    date: "May 24, 2025",
  },
  {
    id: 2,
    image: "/img/achievements/p2mw.webp",
    title:
      "Funding Recipient of Program Pembinaan Mahasiswa Wirausaha (P2MW) 2025",
    date: "July 12, 2025",
  },
  {
    id: 3,
    image: "/img/achievements/kmi expo.webp",
    title: "3rd Place KMI Expo (Kewirausahaan Mahasiswa Indonesia Expo) 2025",
    date: "November 21, 2025",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative scroll-smooth py-32 bg-gradient-to-b bg-dark"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <Header title="Achievements" />
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.25 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-[#140b26]"
            >
              {/* Image */}
              <div className="relative h-[360px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1454]/95 via-[#2a1454]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white leading-snug transition-colors duration-300 ">
                  {blog.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
