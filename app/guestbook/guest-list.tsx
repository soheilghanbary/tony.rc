import BlurImage from "@/components/blur-image";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/db";
import React from "react";
import GuestDate from "./guest-date";

export default async function GuestList() {
  const guestbooks = await prisma.guestbook.findMany({
    include: { user: true },
  });
  return (
    <div className="mt-8">
      {guestbooks.reverse().map((g) => (
        <>
          <div key={g.id} className="flex items-stretch space-x-4 text-sm">
            <BlurImage
              src={g.user.image as string}
              alt={g.user.name as string}
            />
            <div>
              <p className="font-normal text-sm mb-2">
                <span className="text-foreground/75">{g.user.name}:</span>{" "}
                {g.message}
              </p>
              <GuestDate createdAt={g.createdAt} />
            </div>
          </div>
          <Separator className="my-3" />
        </>
      ))}
    </div>
  );
}
