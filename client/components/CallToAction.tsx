import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="card flex flex-col items-start gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[52ch]">
          <h2 className="text-[clamp(25px,3.4vw,34px)] font-extrabold">
            Looking for someone who builds, not only someone who codes.
          </h2>
          <p className="mt-3 text-[16px] text-soft">
            I am looking for my first role in a team, in Algiers or remote.
            Write to me to set up an interview, I reply within 24 hours.
          </p>
        </div>
        <Link href="/contact" className="btn btn-primary shrink-0 px-7 py-4">
          Contact me
          <LuArrowUpRight aria-hidden="true" className="btn-arrow" />
        </Link>
      </div>
    </section>
  );
}
