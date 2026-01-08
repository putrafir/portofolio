"use client";
import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { scaleUp, slideUp, itemUp } from "@/lib/animation";
import Header from "../components/partials/header";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = [
    {
      title: "Catetin",
      image: "/img/cover/cover-catetin.webp",
      description:
        "Catetin adalah solusi platform digital yang dirancang untuk memberikan kendali penuh dan laporan akurat bagi pemilik berbagai jenis usaha. Mengusung slogan Lebih dari Sekedar Catat, aplikasi ini memungkinkan pengguna untuk mengelola operasional bisnis melalui satu genggaman, mulai dari manajemen multi usaha, manajemen pegawai, hingga pemantauan persediaan barang secara terintegrasi.Platform ini juga mempermudah proses pencatatan transaksi dan penyajian laporan penjualan yang akurat melalui fitur dashboard pemilik usaha. Dengan fokus pada efisiensi, Catetin hadir untuk membantu pengusaha melakukan analisis pendapatan dari berbagai unit bisnis dalam satu platform tanpa proses yang rumit.",
      tech: ["PHP", "Laravel", "TailwindCss"],
      category: "website",
      link: "#",
    },
    {
      title: "TBMATE",
      image: "/img/cover/cover-tbmate.webp",
      description:
        "TBMATE adalah aplikasi kesehatan berbasis mobile yang dirancang untuk meningkatkan kepatuhan minum obat bagi pasien Tuberkulosis (TBC). Aplikasi ini berfungsi sebagai pendamping digital yang memastikan pengobatan berjalan tuntas melalui fitur pengingat otomatis yang terjadwal serta sistem VOT Pintar berbasis kecerdasan buatan untuk mengawasi konsumsi obat secara efektif. Selain fokus pada kedisiplinan jadwal, TBMATE juga memfasilitasi pengguna dengan fitur Konsultasi Dokter yang terintegrasi dengan API Halodoc, memungkinkan pasien mendapatkan jawaban cepat mengenai dosis atau efek samping obat. Dengan pendekatan yang praktis dan suportif, aplikasi ini bertujuan menutup celah bagi penyakit untuk kambuh kembali dan membantu pasien mencapai kesembuhan total dengan lebih tenang.",
      tech: ["Dart", "Flutter", "Firebase", "Figma"],
      category: "mobile",
      link: "#",
    },
    {
      title: "Theorem One",
      image: "/img/cover/cover-theoremone.webp",
      description:
        "Teorem One hadir sebagai solusi inovatif bagi mahasiswa yang sering menghadapi kendala keterlambatan lulus akibat manajemen waktu yang buruk, masalah finansial yang memaksa mereka bekerja paruh waktu, hingga kebiasaan prokrastinasi. Berdasarkan data, sekitar 50–80% mahasiswa cenderung menunda tugas akademik meski menyadari dampak negatifnya. Untuk mengatasi hal tersebut, Teorem One dirancang sebagai aplikasi manajemen waktu yang membantu pengguna menyusun jadwal secara sederhana dan otomatis mendeteksi serta mengoreksi jadwal yang tumpang tindih guna mencegah kelelahan mental atau burnout. Keunggulan utama aplikasi ini terletak pada fitur Time Delaying yang dirancang khusus untuk menciptakan transisi sehat antar aktivitas melalui teknik pernapasan dan brain switching activity. Fitur ini berfungsi membantu menjaga fokus dan keseimbangan energi pengguna di tengah padatnya jadwal antara kuliah, organisasi, dan pekerjaan. Dengan integrasi pendeteksi bentrokan jadwal dan teknik relaksasi yang cerdas, Teorem One menjadi mitra strategis bagi mahasiswa untuk mengubah kebiasaan menunda menjadi produktivitas yang lebih terencana dan berkelanjutan.",
      tech: ["Swift", "SwiftUI", "Figma"],
      category: "mobile",
      link: "#",
    },
    {
      title: "Website Pantai Ria Bomo",
      image: "/img/cover/cover-pantai-ria.webp",
      description:
        "Website pariwisata digital yang dirancang untuk mempromosikan keindahan dan potensi wisata Pantai Ria Bomo sebagai destinasi unggulan pesisir. Website ini berfungsi sebagai pusat informasi terpadu yang menyajikan daya tarik alam, aktivitas wisata, fasilitas, serta budaya lokal yang dapat dinikmati oleh wisatawan secara lengkap dan menarik. Selain sebagai media promosi, website Pantai Ria Bomo juga dilengkapi dengan informasi pendukung seperti rute lokasi, galeri visual, serta agenda acara di Pantai Ria Bomo. Dengan tampilan yang modern dan mudah diakses, website ini bertujuan meningkatkan minat kunjungan wisatawan, memperluas jangkauan promosi digital, serta mendukung pengembangan ekonomi lokal melalui pariwisata yang berkelanjutan.",
      tech: ["JavaScript", "Next.js", "TailwindCss", "Figma"],
      category: "website",
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter.toLowerCase()
        );
  return (
    <section id="projects" className="relative bg-dark md:px-24 py-32">
      {/* Title */}
      <div className=" text-center mb-16">
        <Header title="My Projects" />

        <LayoutGroup>
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border shadow-[0_0_25px_rgba(127,60,240,0.45)] border-black rounded-full bg-black/40 p-2 backdrop-blur"
          >
            {["All", "Website", "Mobile"].map((item) => {
              const isActive = activeFilter === item;

              return (
                <button
                  key={item}
                  onClick={() => setActiveFilter(item)}
                  className="relative px-6 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white transition"
                >
                  {/* Active background (animated) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-full bg-gradient-lavender"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Text */}
                  <span className="relative z-10">{item}</span>
                </button>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={scaleUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {filteredProjects.map((project, i) => (
          <div
            key={i}
            className="
      group rounded-3xl
      bg-black/40 border border-lavender/30
      overflow-hidden
      transition-all duration-500
      hover:border-lavender
      hover:shadow-[0_0_40px_rgba(127,60,240,0.5)]
    "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
          w-full h-[360px] object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-sm text-white/70 leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
              flex items-center gap-2
              px-4 py-1.5
              rounded-full
              bg-white text-black
              text-xs font-semibold
            "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={project.link}
                className="
          inline-flex items-center gap-2
          rounded-full border border-white/30
          px-6 py-2 text-sm font-medium
          text-white
          transition-all duration-300
          hover:bg-white hover:text-black
        "
              >
                View Work
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
