import { navbarData } from "@/config";
import { AirVent } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";
import ModeToggle from "./mode-toggle";
import NavMenu from "./nav-menu";

type NavItemProps = {
  text: string;
  href: string;
};

const NavItem: FC<NavItemProps> = ({ text, href }) => {
  return (
    <li className="text-muted-foreground/90 text-sm hover:text-foreground transition-colors duration-300 ease-in-out">
      <Link href={href} className="px-2 py-2 font-medium">
        {text}
      </Link>
    </li>
  );
};

const NavList: FC = () => {
  return (
    <ul className="flex-row space-x-2 flex-1 ml-8 hidden sm:flex">
      {navbarData.navs.map((li, i) => (
        <NavItem key={i} {...li} />
      ))}
    </ul>
  );
};

const NavLogo: FC = () => {
  return (
    <div className="items-center hidden sm:flex">
      <AirVent className="w-5 h-5 mr-3" />
      <h3 className="font-bold">Tony.RC</h3>
    </div>
  );
};

const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-40">
      <nav className="sm:container mx-auto flex items-center justify-between sm:py-4 sm:px-0 p-4 bg-background/50 backdrop-blur">
        <NavMenu />
        <NavLogo />
        <NavList />
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
