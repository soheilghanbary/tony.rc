'use client'
import { AirVent } from "lucide-react";
import { Button } from "../ui/button";
import { useSetAtom } from "jotai/react";
import { sidebarAtom } from "../sidebar";

export default function NavMenu() {
  const setSidebar = useSetAtom(sidebarAtom);
  return (
    <Button
      onClick={() => setSidebar(true)}
      variant={"ghost"}
      className="flex items-center sm:hidden"
    >
      <AirVent className="w-5 h-5 mr-3" />
      <h3 className="font-bold">Menu</h3>
    </Button>
  );
}
