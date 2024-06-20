"use client";

import Image from "next/image";
import tgb from "../../../../public/the-great-beyond-880-logo.png";

const Logo = () => {
  return (
    <Image
      src={tgb}
      alt="The Great Beyond logo"
      title="The Great Beyond - Explore, build and conquer on Minecraft modded servers!"
      className="tgb-logo"
      style={{ margin: "0 auto" }}
    />
  );
};

export default Logo;
