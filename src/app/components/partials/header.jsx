import { slideUp } from "@/lib/animation";
import { motion } from "framer-motion";
export default function Header({ title }) {
  return (
    <motion.h2
      variants={slideUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-5xl mx-[29rem] leading-tight font-extrabold mb-6 bg-gradient-lavender-to-white"
    >
      {title}
    </motion.h2>
  );
}
