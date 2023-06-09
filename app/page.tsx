import AboutSection from "@/components/about-section";
import PortfolioSection from "@/components/portfolio-section";
import { site } from "@/config";
import Link from "next/link";

export default function homePage() {
  return (
    <div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
            href="https://twitter.com/soli_ghanbary"
          >
            Follow along on Twitter
          </a>
          <h1 className="font-bold leading-[1.2] text-3xl sm:text-5xl md:text-6xl lg:text-7xl home-title">
            {site.title} <br /> {site.subtitle}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {site.description}
          </p>
          <div className="space-x-4">
            <Link
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md"
              href="/guestbook"
            >
              Guestbook
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md"
              href="https://github.com/soheilghanbary"
            >
              Github
            </a>
          </div>
        </div>
      </section>
      <AboutSection />
      <PortfolioSection />
    </div>
  );
}
