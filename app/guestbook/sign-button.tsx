"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

export default function SignButton() {
  return (
    <Button
      onClick={() => signIn("github")}
      className="mt-4"
      variant={"outline"}
    >
      Sign in with
      <GithubIcon className="w-5 h-5 ml-3" />
    </Button>
  );
}
