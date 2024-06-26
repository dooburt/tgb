"use client";

import DiscordInvite from "../components/DiscordInvite/DiscordInvite";
import village from "../../../public/stock/dooburt_httpss.mj.runM81V1YZVBB0_a_mangrove_in_minecraft_dark_6f3b9e07-8976-41ce-8cbf-763771feea19_0.png";
import PageHead from "../components/PageHead/PageHead";

export default function Rules({ params, searchParams }) {
  return (
    <>
      <PageHead image={village} title="Rules" subtitle="Our rules of the road so everyone has fun" height={600} gradientFromClass="from-purple-900" />
      <section className="py-8 bg-purple-900">
        <div className="container px-8 xl:px-0 mx-auto">
          <p className="font-body py-8 text-base md:text-2xl leading-relaxed text-white">
            We want everyone to enjoy their time on The Great Beyond. We don't wish to squash creativity or fun. Beyond the walls of the spawn, the Great Beyond
            is for you to explore and build within. However, we do ask that everyone who joins abides by the following:
          </p>
          <h2 className="font-header text-white text-3xl mb-4">Our game servers</h2>
          <ul className="list-disc font-body">
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              Please do not grief other people's claims or builds. That means don't destroy or put blocks around a claim or build to intentionally make access,
              viewing or expansion difficult.
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">Please do not use language that would offend within the chat.</li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              Please do not claim more claim blocks than you need, please do not surround other people's claims with your own (griefing). Please do not place
              your claim directly next to someone else's without some form of discussion/agreement with that person.
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              Please add to the general environment in the open world; be that buildings on roads, bridges or other builds to explore.
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              We try our level best to not remove or ban anything from our modpacks, but each of our servers has a list of banned items (if necessary). You can
              view the updated list for each server here:{" "}
              <a
                href="https://discordapp.com/channels/1200829322425024643/1227301131269439550"
                className="bg-indigo-900 text-indigo-100 hover:text-white hover:bg-indigo-700 px-1 rounded-md"
              >
                #😵-banned-item-list
              </a>
              .
            </li>
          </ul>
          <h2 className="font-header text-white text-3xl mb-4">Discord</h2>
          <ul className="list-disc font-body">
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">Let's keep spam, swearing and general shit-housery to a minimum.</li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              No NSFW emojis, images, language or just stuff. Some people here are younger and their eyes don't need that stuff.
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              No links to other MC servers running the same pack; because that typically means you aren't here to play on TGB, but just promote your own server.
            </li>
            <li className="mb-4 ml-8 text-base md:text-2xl text-white">
              You can post images, gifs, videos, memes etc. as long as they aren't contravening the above rules.
            </li>
          </ul>
        </div>
      </section>

      <DiscordInvite />
    </>
  );
}
