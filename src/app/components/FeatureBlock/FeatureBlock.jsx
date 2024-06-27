"use client";

import GameCardProminence from "../Gamecard/Prominence";
import GameCardATM9 from "../Gamecard/ATM9";

const FeatureBlock = () => {
  return (
    <section className="font-body bg-[#170b23] text-gray-600">
      <div className="order-first flex flex-wrap items-stretch text-base">
        <GameCardProminence />
        <GameCardATM9 />
      </div>
    </section>
  );
};

export default FeatureBlock;
