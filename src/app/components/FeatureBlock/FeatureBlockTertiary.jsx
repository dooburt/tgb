"use client";

import GameCardCiscos from "../Gamecard/Cisco";
import GameCardCobblemon from "../Gamecard/Cobblemon";

// cisco's rpg adventure
// atm9

const FeatureBlockTertiary = () => {
  return (
    <section className="font-body bg-[#170b23] text-gray-600">
      <div className="order-first flex flex-wrap items-stretch text-base">
        <GameCardCiscos />
        <GameCardCobblemon />
      </div>
    </section>
  );
};

export default FeatureBlockTertiary;
