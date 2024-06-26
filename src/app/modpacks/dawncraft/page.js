"use client";

import DiscordInvite from "../../components/DiscordInvite/DiscordInvite";
import village from "../../../../public/stock/village.jpg";
import PageHead from "../../components/PageHead/PageHead";
import PageHeadWithLogo from "@/app/components/PageHead/PageHeadWithLogo";

export default function Dawncraft({ params, searchParams }) {
  return (
    <>
      <PageHeadWithLogo
        logo={"https://thegreatbeyond.s3.eu-west-1.amazonaws.com/dawncraft.png"}
        image={village}
        title="Dawncraft"
        subtitle="What we're playing..."
        height={800}
        gradientFromClass="from-indigo-900"
      />
      <section className="py-8 bg-indigo-900">
        <div className="container mx-auto px-8 xl:px-0 xl:mx-auto">
          <p className="font-body py-8 text-base md:text-2xl leading-relaxed text-white">
            We play a variety of modpacks at The Great Beyond and we're always looking for new ones to try. We don't keep all our modpacks live continually, but
            most run for several months - ask an owner or admin if you wish to know more about a modpack lifespan. If you have a suggestion of what we should
            play next, hit us up on Discord.
          </p>
        </div>
      </section>

      <DiscordInvite />
    </>
  );
}
