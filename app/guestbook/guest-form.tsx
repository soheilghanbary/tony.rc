"use client";
import { addGuestbook } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTransition, useRef } from "react";
export default function GuestForm({ user }: any) {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  const onAddMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = messageRef.current?.value;
    if (!message) return;
    startTransition(async () => {
      await addGuestbook(message, user.id as string);
    });
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={onAddMessage}
      className="flex w-full max-w-sm items-center space-x-2 my-4"
    >
      <Input
        ref={messageRef}
        name="message"
        type="text"
        required
        defaultValue=""
        placeholder="Your message ..."
      />
      <Button type="submit" disabled={isPending}>
        Send
      </Button>
    </form>
  );
}
