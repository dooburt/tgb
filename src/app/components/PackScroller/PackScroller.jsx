"use client";

import modpacks from "@/app/constants/modpacks";
import Link from "next/link";

const PackScroller = ({ packId = "dawncraft", bg = "bg-black", linkColor = "text-gray-600" }) => {
  let current = modpacks.find((pack) => pack.id === packId);
  let index = modpacks.indexOf(current);
  let prev = (index - 1 + modpacks.length) % modpacks.length;
  let next = (index + 1) % modpacks.length;

  let prevPack = modpacks[prev];
  let nextPack = modpacks[next];

  return (
    <section className={`w-full ${bg}`}>
      <div className="container mx-auto px-8 xl:px-0 xl:mx-auto font-body text-lg flex justify-between">
        <Link href={`${prevPack.url}`} className={`${linkColor}`}>
          &laquo; Previous pack: {prevPack.name}
        </Link>
        <Link href={`${nextPack.url}`} className={`${linkColor}`}>
          Next pack: {nextPack.name} &raquo;
        </Link>
      </div>
    </section>
  );
};

export default PackScroller;
