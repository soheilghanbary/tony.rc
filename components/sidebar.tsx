"use client";
import { navbarData } from "@/config";
import { cn } from "@/lib/utils";
import { atom } from "jotai";
import { useAtom } from "jotai/react";
import { AirVent, XIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useEffect } from "react";

export const sidebarAtom = atom(false);

export default function Sidebar() {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);
  const handleClose = () => setSidebar(false);
  useEffect(() => {
    sidebar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [sidebar]);
  return (
    <>
      <div
        className={cn(
          "bg-background w-[95%] h-40 fixed top-3 invisible duration-300 shadow-md ease-in-out left-1/2 -translate-x-1/2 p-4 rounded-lg z-50",
          sidebar ? "opacity-100 scale-100 visible" : "opacity-0 scale-95"
        )}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <AirVent className="w-5 h-5 mr-3" />
            <h3 className="font-bold">Tony.RC</h3>
          </div>
          <Button variant={"ghost"} size="sm" onClick={handleClose}>
            <XIcon className="w-5 h-5 mr-2" />
            Close
          </Button>
        </div>
        <Separator className="my-4" />
        <ul className="flex flex-col space-y-4">
          {navbarData.navs.map((li, i) => (
            <NavItem onClick={handleClose} key={i} {...li} />
          ))}
        </ul>
      </div>
      <div
        onClick={handleClose}
        className={cn(
          "top-0 left-0 bg-background/50 backdrop-blur-sm w-screen h-screen duration-300 ease-in-out fixed",
          sidebar ? "visible opacity-100" : "invisible opacity-0"
        )}
      ></div>
    </>
  );
}

type NavItemProps = {
  text: string;
  href: string;
  onClick: () => void;
};

const NavItem = ({ text, href, onClick }: NavItemProps) => {
  return (
    <li className="text-muted-foreground/90 text-sm hover:text-foreground transition-colors duration-300 ease-in-out">
      <Link onClick={onClick} href={href} className="px-2 py-2 font-medium">
        {text}
      </Link>
    </li>
  );
};
