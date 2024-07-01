"use client";

import Link from "next/link";
import village from "../../../public/stock/village.jpg";
import DiscordInvite from "../components/DiscordInvite/DiscordInvite";
import PageHead from "../components/PageHead/PageHead";

export default function NotFound({ params, searchParams }) {
  return (
    <>
      <PageHead image={village} title="🤒 We can't find that" subtitle="Oh no! We can't find that" height={600} gradientFromClass="from-purple-900" />

      <section className="py-8 bg-purple-900">
        <div className="container px-8 xl:px-0 mx-auto">
          <p className="font-body py-8 text-base lg:text-2xl leading-relaxed text-white">
            Unfortunately, we can't find that 🫤. Sorry! Try our <Link href="/">home page</Link>.
          </p>
        </div>
      </section>
      <DiscordInvite />
    </>
  );
}
