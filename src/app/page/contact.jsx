"use client";
import { slideUp } from "@/lib/animation";
import Header from "../components/partials/header";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative scroll-smooth py-32 bg-[#0f0715]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b1b6d,transparent_40%)]" />
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <Header title="Get In Touch" />
        <p>For business inquiry please send email to</p>
        <a
          href="mailto:firdausputra0212@gmail.com"
          style={{
            cursor: "pointer",
            color: "#7f3cf0",
            textDecoration: "underline",
            display: "inline-block",
            zIndex: 10,
            position: "relative",
          }}
        >
          firdausputra0212@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
