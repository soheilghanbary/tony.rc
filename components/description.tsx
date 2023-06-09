'use client'
import { site } from "@/config";
import { motion } from "framer-motion";

const Description = () => (
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
  >
    {site.description}
  </motion.p>
);

export default Description;


