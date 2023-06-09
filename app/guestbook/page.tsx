import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import GuestForm from "./guest-form";
import GuestList from "./guest-list";
import SignButton from "./sign-button";

export default async function Guestbook() {
  const session = await getServerSession(authOptions);
  return (
    <div className="mt-4">
      <h1 className="font-bold leading-loose text-3xl sm:text-5xl md:text-3xl lg:text-4xl">
        Guestbook
      </h1>
      {session ? <GuestForm user={session.user} /> : <SignButton />}
      {/* @ts-expect-error async server component */}
      <GuestList />
    </div>
  );
}
