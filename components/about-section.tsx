import { GithubIcon, Globe, InstagramIcon, TwitterIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { site } from "@/config";

interface SocialLinkProps {
  href: string;
  text: string;
  icon: JSX.Element;
}

const SocialLink = ({ href, text, icon }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    className={cn(
      buttonVariants({ variant: "outline", size: "sm" }),
      "h-11 px-4"
    )}
  >
    {icon}
    {text}
  </a>
);

const AboutSection = () => {
  const socialLinks = [
    {
      href: "https://github.com/soheilghanbary",
      text: "Github",
      icon: <GithubIcon className="w-6 h-6 mr-4" />,
    },
    {
      href: "https://twitter.com/soli_ghanbary",
      text: "Twitter",
      icon: <TwitterIcon className="w-6 h-6 mr-4" />,
    },
    {
      href: "https://tonyfolio-three.vercel.app",
      text: "Personal",
      icon: <Globe className="w-6 h-6 mr-4" />,
    },
    {
      href: "https://instagram.com/soheil__ghanbary",
      text: "Instagram",
      icon: <InstagramIcon className="w-6 h-6 mr-4" />,
    },
  ];

  return (
    <section
      id="about"
      className="md:container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About Me
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {site.aboutDescription}
        </p>
        <Separator />
      </div>
      <div className="text-center space-y-8">
        <h2 className="font-medium text-3xl leading-[1.1]">Follow me</h2>
        <div className="justify-center flex flex-wrap items-center md:gap-4 gap-2">
          {socialLinks.map((link) => (
            <SocialLink key={link.text} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


