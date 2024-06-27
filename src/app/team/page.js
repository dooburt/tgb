"use client";

import village from "../../../public/stock/village.jpg";
import DiscordInvite from "../components/DiscordInvite/DiscordInvite";
import PageHead from "../components/PageHead/PageHead";
import StaffMember from "../components/StaffMember/StaffMember";
import moderators from "../constants/moderators";

export default function Team({ params, searchParams }) {
  function comparitor(a, b) {
    return a.sort - b.sort;
  }

  return (
    <>
      <PageHead
        image={village}
        title="The Great Beyondn't Team"
        subtitle=" Meet our group of dedicated moderators, admins &amp; owners"
        height={600}
        gradientFromClass="from-pink-900"
      />

      <section className="py-8 bg-pink-900">
        <div className="container px-8 xl:px-0 mx-auto">
          <p className="font-body py-8 text-base lg:text-2xl leading-relaxed text-white">
            Meet our rather bonkers collection of people from around the World who keep The Great Beyond running. Each of these players have been playing
            Minecraft and its modpacks for years and each have an extraordinary knowledge of the game and the packs they look after. They&apos;re here to help
            and if you&apos;re ever stuck, have a question or just like their avatar - send them a hello.
          </p>
          <p className="font-body text-sm text-pink-100">
            * All references to The Great Beyondn&apos;t are the fault of <span className="text-yellow-400">@Grimn&apos;t</span> (obviously)
          </p>
        </div>
      </section>
      <section className="py-8 bg-pink-900">
        <div className="container px-8 xl:px-0 mx-auto flex flex-row gap-4 flex-wrap w-full">
          {moderators.sort(comparitor).map((moderator) => (
            <StaffMember key={moderator.id} handle={moderator.id} discordId={moderator.discordId} servers={moderator.servers} image={moderator.avatar} />
          ))}
        </div>
      </section>
      <DiscordInvite />
    </>
  );
}
