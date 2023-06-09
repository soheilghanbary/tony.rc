import { AirVent } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto text-center p-8">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <AirVent className="w-6 h-6" />
        <p className="font-medium text-muted-foreground text-base">
          Build by{" "}
          <a
            target={"_blank"}
            href="https://twitter.com/soli_ghanbary"
            className="underline text-foreground"
          >
            Soheil
          </a>
          . Hosted on{" "}
          <a
            target={"_blank"}
            className="underline text-foreground"
            href="https://vercel.com"
          >
            Vercel
          </a>
          . The source code is available on{" "}
          <a
            target={"_blank"}
            className="underline text-foreground"
            href="https://github.com/soheilghanbary/tony.rc"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
