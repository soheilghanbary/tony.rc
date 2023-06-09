'use client'
import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
}

export default function BlurImage({ src, alt }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="relative aspect-square bg-muted w-8 h-8 rounded-full">
      <Image
        fill
        alt={alt}
        src={src}
        loading="lazy"
        className={`object-cover rounded-full duration-500 ease-in-out ${
          isLoading ? "blur-sm grayscale" : "blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

