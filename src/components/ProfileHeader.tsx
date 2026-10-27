import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, photoSrc }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      {photoSrc ? (
        <Image
          src={photoSrc}
          alt={name}
          width={120}
          height={120}
          priority
          className="size-30 rounded-full object-cover shadow-[0_14px_30px_-10px_rgba(120,60,20,0.45)] ring-4 ring-white/70"
        />
      ) : (
        <div aria-hidden="true" className="size-30 rounded-full bg-white/50 ring-4 ring-white/70" />
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-ink">{name}</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
