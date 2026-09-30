import Link from "next/link";

export const metadata = { title: "Page not found | Mehdi Abdi" };

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28">
      <p className="label">404</p>
      <h1 className="mt-3 max-w-[20ch] text-[clamp(32px,5vw,52px)] font-extrabold">
        This page does not exist
      </h1>
      <p className="mt-4 max-w-[52ch] text-[17px] text-soft">
        The link may be old. The projects and the contact form are in the menu.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </section>
  );
}
