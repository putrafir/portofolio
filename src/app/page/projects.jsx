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
        "Catetin is a digital solution built to give business owners total control and pinpoint accuracy. With our tagline 'More Than Just a Log,' you can manage every aspect of your operations—multi-business oversight, staff management, and integrated stock tracking—all in one hand. We simplify transaction logging and provide real-time sales insights via a dedicated owner dashboard. Designed for maximum efficiency, Catetin empowers you to analyze revenue across all your ventures in one place, without the complexity",
      tech: ["PHP", "Laravel", "TailwindCss"],
      category: "website",
      link: "#",
    },
    {
      title: "TBMATE",
      image: "/img/cover/cover-tbmate.webp",
      description:
        "TBMATE is a mobile health assistant built to boost medication compliance for TB patients. It acts as a digital partner that guarantees treatment success via automated reminders and an AI-driven Smart VOT system for effective monitoring. The app also features a direct Doctor Consultation tool powered by Halodoc API, providing instant guidance on dosages and side effects. By offering a practical and supportive experience, TBMATE eliminates the risk of relapse and empowers patients to reach total recovery confidently.",
      tech: ["Dart", "Flutter", "Firebase", "Figma"],
      category: "mobile",
      link: "#",
    },
    {
      title: "Theorem One",
      image: "/img/cover/cover-theoremone.webp",
      description:
        "Teorem One is an innovative solution for students struggling with graduation delays caused by poor time management, financial constraints, and procrastination. With 50–80% of students admitting to habitual task-delaying, Teorem One steps in as a smart time management tool that simplifies scheduling while automatically resolving conflicts to avoid mental exhaustion. Our signature 'Time Delaying' feature facilitates healthy transitions using breathing exercises and brain-switching activities to keep users focused and energized between classes, organizations, and jobs. By combining clash detection with intelligent relaxation, Teorem One is the ultimate strategic partner to help students turn procrastination into consistent, sustainable productivity.",
      tech: ["Swift", "SwiftUI", "Figma"],
      category: "mobile",
      link: "#",
    },
    {
      title: "Website Pantai Ria Bomo",
      image: "/img/cover/cover-pantai-ria.webp",
      description:
        "A digital tourism website designed to promote the beauty and potential of Pantai Ria Bomo as a premier coastal destination. This platform serves as an integrated information hub, showcasing natural attractions, tourist activities, facilities, and local culture in a comprehensive and engaging manner. In addition to its promotional role, the website provides essential details such as location routes, a visual gallery, and an events calendar for Pantai Ria Bomo. Featuring a modern and accessible design, the website aims to boost tourist interest, expand digital marketing reach, and support local economic development through sustainable tourism.",
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
    <section
      id="projects"
      className="relative scroll-smooth bg-dark text-white px-4 md:px-24 py-20 md:py-32"
    >
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
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10"
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
          w-full h-[200px] md:h-[360px] object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">
              {/* Title */}
              <h3 className=" text-xl md:text-2xl font-bold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className=" text-xs md:text-sm text-white/70 leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-nowrap gap-3 mb-8 overflow-x-auto scrollbar-hide">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
              flex items-center gap-2
              px-4 py-1.5
              rounded-full
              bg-white text-black
              text-xs font-semibold
              whitespace-nowrap
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
