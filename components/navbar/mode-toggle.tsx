
"use client";
import { cn } from "@/lib/utils";
import { GithubIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "../ui/button";
import { motion } from "framer-motion";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div>
      <Button variant={"ghost"} onClick={toggleTheme}>
        {theme === 'dark' ? <motion.div animate={{ rotate: 360 }}><SunIcon className="w-5 h-5" /></motion.div> : <motion.div animate={{ rotate: 360 }}><MoonIcon className="w-5 h-5" /></motion.div>}
      </Button>
      <a
        target={"_blank"}
        href={"https://github.com/soheilghanbary"}
        className={cn(buttonVariants({ variant: "ghost" }))}
      >
        <motion.div animate={{ rotate: 360 }}><GithubIcon className="w-5 h-5" /></motion.div>
      </a>
    </div>
  );
};

export default ModeToggle;


