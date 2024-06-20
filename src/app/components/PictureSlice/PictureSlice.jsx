"use client";

// import bg from "../../assets/Alexandro_A_minecraft_the_game_adventure_in_nether_portal_with__48a94b2b-13d4-456d-92e0-1c03bc259715.png";
import spawn from "../../assets/tgb-spawn.png";
import farrin from "../../assets/farrin.png";
import cyberpunk from "../../assets/cyberpunk.png";
import dawncraftSpawn from "../../assets/dawncraft-spawn.png";

const PictureSlice = (props) => {
  return (
    <section
      className="flex h-[220px] md:h-[450px] md:max-h-[450px] w-full max-w-full overflow-hidden relative object-cover bg-slate-800"
      style={{ backgroundImage: `url(${spawn})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <span> </span>
      {/* <img src={spawn} className="object-cover" alt="" /> */}
    </section>
  );
};

const PictureSliceFarrin = (props) => {
  return (
    <section
      className="flex h-[220px] md:h-[550px] md:max-h-[550px] w-full max-w-full overflow-hidden relative object-cover bg-slate-800"
      style={{ backgroundImage: `url(${farrin})`, backgroundSize: "cover", backgroundPosition: "top center" }}
    >
      <span> </span>
      {/* <img src={spawn} className="object-cover" alt="" /> */}
    </section>
  );
};

const PictureSliceDawncraftSpawn = (props) => {
  return (
    <section
      className="flex h-[280px] md:h-[850px] md:max-h-[850px] w-full max-w-full overflow-hidden relative object-cover bg-slate-800"
      style={{ backgroundImage: `url(${dawncraftSpawn})`, backgroundSize: "cover", backgroundPosition: "top center" }}
    >
      <span> </span>
      {/* <img src={spawn} className="object-cover" alt="" /> */}
    </section>
  );
};

const PictureSliceCyberpunk = (props) => {
  return (
    <section
      className="flex h-[220px] md:h-[550px] md:max-h-[550px] w-full max-w-full overflow-hidden relative object-cover bg-slate-800"
      style={{ backgroundImage: `url(${cyberpunk})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <span> </span>
      {/* <img src={spawn} className="object-cover" alt="" /> */}
    </section>
  );
};

export default PictureSlice;
export { PictureSliceFarrin, PictureSliceCyberpunk, PictureSliceDawncraftSpawn };
