import LayoutContent from "@/components/layout-content";
import ScrollToTop from "@/components/scroll-top";
import "@/styles/globals.css";

export const metadata = {
  title: "Soheil Ghanbary Full Stack Web Developer",
  description: "An open source personal website for web developers and programmers from around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutContent>{children}</LayoutContent>
        <ScrollToTop />
      </body>
    </html>
  );
}
