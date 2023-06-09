"use client";
import dayjs from "dayjs";
import { useMemo } from "react";
import revalidatetime from "dayjs/plugin/relativeTime";
import { Clock } from "lucide-react";
dayjs.extend(revalidatetime);

export default function GuestDate({ createdAt }: { createdAt: Date }) {
  const day = useMemo(() => dayjs(createdAt), [createdAt]).fromNow();
  return <span className="text-xs font-medium text-muted-foreground flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{day}</span>;
}
