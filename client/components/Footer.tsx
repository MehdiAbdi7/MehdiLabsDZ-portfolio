import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="inlay border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js, TypeScript and Motion.</p>
      </div>
    </footer>
  );
}
