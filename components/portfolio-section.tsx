import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { portfolio } from "@/config";
import { cn } from "@/lib/utils";
import { LinkIcon } from "lucide-react";
import React from "react";
import CardImage from "./card-image";

export default function PortfolioSection() {
return (
    <section
      id="portfolio"
      className="md:container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Portfolio
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-7">
          I like to create something powerful, simple, and clean.
        </p>
        <Separator />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {portfolio.map((p) => (
          <PortfolioCard {...p} key={p.name} />
        ))}
        <div className="space-y-4">
          <div className="bg-secondary rounded-lg w-full h-[240px] flex justify-center items-center">
            <h2 className="lg:text-lg sm:text-base font-medium leading-8">
              Comming Soon ...
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

const PortfolioCard = ({ name, url, image, tags }) => (
  <div className="space-y-2">
    <CardImage alt={name} src={image} />
    <h2 className="lg:text-lg sm:text-base font-medium leading-8">{name}</h2>
    <Separator />
    <div className="flex justify-between items-center">
      <div className="space-x-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <a
        href={url}
        target="_blank"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "whitespace-nowrap"
        )}
      >
        <LinkIcon className="w-4 h-4 mr-2" />
        View Site
      </a>
    </div>
  </div>
);
