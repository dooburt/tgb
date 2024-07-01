"use client";

import DiscordInvite from "../components/DiscordInvite/DiscordInvite";
import tgbspawn from "../../../public/stock/tgb-spawn.png";
import PageHead from "../components/PageHead/PageHead";

export default function WhyPlayWithUs({ params, searchParams }) {
  return (
    <>
      <PageHead
        image={tgbspawn}
        title="Why Play with Us"
        subtitle="Obviously because we're a bag of laughs?"
        height={600}
        gradientFromClass="from-yellow-900"
      />
      <section className="py-8 bg-yellow-900">
        <div className="container px-8 xl:px-0 mx-auto">
          <p className="font-body py-8 text-base md:text-2xl leading-relaxed text-white">If you need convincing to join us, consider:</p>

          <ul className="list-disc font-body">
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              We play multiple modpacks, not from a single author or group of authors. From the mainstream to the obscure. From the large to the small. What
              we're aiming for in our modpack selection is fun and playability.
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              We play on powerful dedicated EU servers, which are available 24/7 and are not whitelisted. All we ask is you join us in Discord (even if you say
              nothing there).
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              Our players (and even our team members) are dedicated, knowledgeable players and are here to have fun also. Our team members are a little older
              (ha!) and that means we do at least tend to not have any drama or nonsense.
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">We're a damned friendly bunch!</li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">We smell good.</li>
          </ul>
        </div>
      </section>

      <DiscordInvite />
    </>
  );
}
