"use client";

import Image from "next/image";
import prominence from "../../../../public/25cec6f9fb1a3b211df1ae0629e2af8c.png";
import bettermc from "../../../../public/better-minecraft.png";
import nether from "../../../../public/nether.png";
import grass from "../../../../public/grass.png";
import Link from "next/link";
import GameCardBetterMC from "../Gamecard/BetterMC";
import GameCardSteampunk from "../Gamecard/Steampunk";

const FeatureBlockSecondary = () => {
  return (
    <section className="font-body bg-[#170b23] text-gray-600">
      <div className="order-first flex flex-wrap items-stretch text-base">
        <GameCardBetterMC />
        <GameCardSteampunk />
      </div>
    </section>
  );
};

export default FeatureBlockSecondary;
