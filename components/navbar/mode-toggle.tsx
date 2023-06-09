"use client";
import { cn } from "@/lib/utils";
import { GithubIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button, buttonVariants } from "../ui/button";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div>
      <Button variant={"ghost"} onClick={toggleTheme}>
        <MoonIcon className="w-5 h-5" />
      </Button>
      <a
        target={"_blank"}
        href={"https://github.com/soheilghanbary"}
        className={cn(buttonVariants({ variant: "ghost" }))}
      >
        <GithubIcon className="w-5 h-5" />
      </a>
    </div>
  );
};

export default ModeToggle;
