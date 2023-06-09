'use client'
import { site } from "@/config";
import { motion } from "framer-motion";

const Title = () => (
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="font-bold leading-[1.2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl home-title"
  >
    {site.title} <br /> {site.subtitle}
  </motion.h1>
);

export default Title