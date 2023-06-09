"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignButton() {
  const [isGitHubLoading, setisGitHubLoading] = useState(false);

  return (
    <Button
        variant={"outline"}
        disabled={isGitHubLoading}
        onClick={() => {
          setisGitHubLoading(true);
          signIn("github");
        }}
      >
        {isGitHubLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <GithubIcon/>
        )}{" "}
        Github
      </Button>
  );
}
