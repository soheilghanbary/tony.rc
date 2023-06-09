"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignButton() {
  const [isLoading, setisLoading] = useState(false)

  const onSignIn = () => {
    setisLoading(true)
    signIn("github")
  }

  return (
    <Button
      onClick={onSignIn}
      className="mt-4"
      variant={"outline"}
      disabled={isLoading}
    >
      {isLoading ? 'Sign In ...' : 'Sign in with'}
      <GithubIcon className="w-5 h-5 ml-3" />
    </Button>
  );
}
