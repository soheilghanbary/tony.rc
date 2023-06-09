"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addGuestbook(message: string, userId: string) {
  await prisma.guestbook.create({ data: { message, userId } });
  return revalidatePath("/guestbook");
}
