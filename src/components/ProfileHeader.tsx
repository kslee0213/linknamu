import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, photoSrc }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {photoSrc ? (
        <Image
          src={photoSrc}
          alt={name}
          width={112}
          height={112}
          className="size-28 rounded-full object-cover"
        />
      ) : (
        <div aria-hidden="true" className="size-28 rounded-full bg-zinc-200 dark:bg-zinc-800" />
      )}
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
