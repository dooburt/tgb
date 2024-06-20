"use client";

import React from "react";
import tgb from "../../../../public/tgb-square.png";
import Image from "next/image";
import Link from "next/link";

const Footer = (props) => {
  const renderCopyright = () => {
    return (
      <>
        <p className="text-sm text-gray-100 sm:ml-6">
          &copy; 2024 The Great Beyond. All rights reserved.
          <br />
          <span className="text-xs text-gray-200">
            The Great Beyond is a collection of modified Minecraft&reg; servers. The Great Beyond is not affiliated with Mojang&trade;, Microsoft&trade; or the
            authors or developers of the modded Minecraft content (Valhelsia/DawnCraft/Prominence et al). The game servers are provided free to players and come
            with no warranties, guarantees or service level agreements.
          </span>
        </p>
      </>
    );
  };

  return (
    <footer className="font-body bg-[#1f162c] text-white">
      <div className="container mx-auto px-5 py-24">
        <div className="order-first flex flex-wrap text-center text-base md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-lg tracking-widest text-gray-100">ADVENTURING</h2>
            <nav className="mb-10 list-none ml-2">
              <li>
                <Link href="/modpacks" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  What we&apos;re playing...
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/modpacks/prominence" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Play Prominence II RPG
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/modpacks/steampunk" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Play Steampunk
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/modpacks/atm9" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Play All The Mods 9 (ATM9)
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/modpacks/ciscos-rpg-adventure" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Play Cisco&apos;s RPG Adventure
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/modpacks/bettermc" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Play Better MC (BMC1)
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/modpacks/cobblemon" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Play Cobblemon
                </Link>
              </li>
              <li className="mt-8">
                <Link href="/modpacks" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  What we&apos;ve played...
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/modpacks/dawncraft" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Revisit DawnCraft
                </Link>
              </li>
            </nav>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-lg tracking-widest text-gray-100">STUFF YOU NEED</h2>
            <nav className="mb-10 list-none">
              <li>
                <a href="https://discord.gg/MXmcyScFEZ" target="_blank" rel="noreferrer" className="cursor-pointer text-[#7289da] hover:text-[#8299ee]">
                  Join via Discord
                </a>
              </li>

              <li>
                <a href="/the-great-beyond" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  What is The Great Beyond?
                </a>
              </li>

              <li>
                <a href="/why-play-with-us" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Why Play with Us?
                </a>
              </li>

              <li>
                <a href="/rules" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Rules
                </a>
              </li>

              <li>
                <a href="/vote" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Vote
                </a>
              </li>

              <li>
                <a href="/tip" className="cursor-pointer text-gray-200 hover:text-purple-300">
                  Tip Jar &amp; Helping Out
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 text-base md:w-1/2 lg:w-1/4">&nbsp;</div>
        </div>
      </div>
      <div className=" bg-black">
        <div className="container mx-auto flex flex-col items-center px-5 py-6 sm:flex-row">
          <a href="/" className="title-font flex items-center justify-center font-medium text-gray-100 md:justify-start">
            <div className="inline-flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-md">
              <Image src={tgb} className="h-32 w-32" alt="The Great Beyond" />
            </div>
          </a>
          {renderCopyright()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
