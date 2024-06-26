"use client";

import village from "../../../public/stock/village.jpg";
import DiscordInvite from "../components/DiscordInvite/DiscordInvite";
import PageHead from "../components/PageHead/PageHead";
import StaffMember from "../components/StaffMember/StaffMember";

export default function Team({ params, searchParams }) {
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
            Meet our rather bonkers collection of people from around the World who help The Great Beyond keep running. Each of these players have been playing
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
          <StaffMember
            handle="FarrinOrbs"
            discordId="177948910843592704"
            servers={["Prominence", "Dawncraft", "ATM9"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/a_a63905fba45e3b4aa138fa9ef13dca80.gif"
          />
          <StaffMember
            handle="TheHSC"
            discordId="252593825233502208"
            servers={["Steampunk", "Prominence", "ATM9"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/1152fe94b8cbb915311c15df7adec17a.png"
          />
          <StaffMember
            handle="Juan (Richy)"
            tagline="Richy"
            discordId="893935260797128735"
            servers={["BetterMC", "Prominence", "ATM9"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/24323c1b5262e75c4e7f4a5f7cbd0ff4.png"
          />
          <StaffMember
            handle="Yattan"
            discordId="560151893867757569"
            servers={["Cobblemon"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/a_b0f568a07f1a337e51acd7871c1e632c.gif"
          />
          <StaffMember
            handle="teew"
            discordId="852580545119911936"
            servers={["ATM9"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/a_dde05290f59f9b6c6b77fda497f447f9.gif"
          />
          <StaffMember
            handle="SenZ0"
            discordId="258628953076400128"
            servers={["Cisco's", "Prominence", "ATM9"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/ebbebd40eea74f22ecf2f71aea46d0cf.png"
          />
          <StaffMember
            handle="Idiotoid"
            discordId="536198853297307699"
            servers={["Cisco's", "Prominence", "ATM9"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/fe8802e9e5f43307f130cd3d16134275.png"
          />
          <StaffMember
            handle="dooburt"
            discordId="177948910843592704"
            servers={["Prominence", "ATM9", "Dawncraft"]}
            image="https://thegreatbeyond.s3.eu-west-1.amazonaws.com/43dbf469674f40be49d3f3d25ab5ecfe.png"
          />
        </div>
      </section>
      <DiscordInvite />
    </>
  );
}
