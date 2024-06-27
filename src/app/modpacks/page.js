"use client";

import DiscordInvite from "../components/DiscordInvite/DiscordInvite";
import lighthouse from "../../../public/stock/jjs-lighthouse.jpg";
import PageHead from "../components/PageHead/PageHead";
import FeatureBlock from "../components/FeatureBlock/FeatureBlock";
import FeatureBlockSecondary from "../components/FeatureBlock/FeatureBlockSecondary";
import FeatureBlockTertiary from "../components/FeatureBlock/FeatureBlockTertiary";
import FeatureBlockQuad from "../components/FeatureBlock/FeatureBlockQuad";

export default function Modpacks({ params, searchParams }) {
  return (
    <>
      <PageHead image={lighthouse} title="Modpacks" subtitle="What we're playing..." height={800} gradientFromClass="from-indigo-900" />
      <section className="py-8 bg-indigo-900">
        <div className="container px-8 mb-8 xl:px-0 mx-auto">
          <p className="font-body py-8 text-base md:text-2xl leading-relaxed text-white">
            We play a variety of modpacks at The Great Beyond and we're always looking for new ones to try. We don't keep all our modpacks live continually, but
            most run for several months - ask an owner or admin if you wish to know more about a modpack lifespan. If you have a suggestion of what we should
            play next, hit us up on Discord.
          </p>
        </div>
      </section>
      <FeatureBlock />
      <FeatureBlockSecondary />
      <FeatureBlockTertiary />
      <FeatureBlockQuad />
      <DiscordInvite />
    </>
  );
}
