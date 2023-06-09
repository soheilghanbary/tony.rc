'use client'
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
