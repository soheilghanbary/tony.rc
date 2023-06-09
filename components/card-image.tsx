'use client'
import Image from "next/image";
import { useState } from "react";

interface BlurImageProps {
  src: string;
  alt: string;
}

export default function CardImage({ src, alt }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="relative aspect-video bg-muted rounded-lg border">
      <Image
        fill
        alt={alt}
        src={src}
        loading="lazy"
        className={`object-cover rounded-lg duration-700 ease-in-out ${
          isLoading ? "blur grayscale" : "blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}

