const modpacks = [
  {
    id: "prominence",
    sort: 1,
    name: "Prominence II RPG",
    active: true,
    hidden: false,
    url: "/modpacks/prominence",
    image: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/25cec6f9fb1a3b211df1ae0629e2af8c.png",
    background: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/catherdral.jpg",
    title: "Role play your way in readiness for Hasturian Era...",
    hasVideoBack: false,
    description:
      "Prepare your equipment and your homestead; Hasturian Era is coming and we invite players who believe they have what it takes to survive to join the fray...",
    buttonLabel: "Into the breach...",
    moderators: ["@dooburt", "@FarrinOrbs", "@the_HSC"],
    download: "https://www.curseforge.com/minecraft/modpacks/prominence-2-rpg",
    styles: {
      link: "font-body justify-center shadow-md bg-purple-800 text-white border-0 overflow-hidden focus:outline-none hover:bg-purple-500 rounded mt-8 lg:inline-flex relative block p-4",
      logo: "w-full lg:w-[550px] xl:w-[650px] mx-auto md:mx-0",
    },
    version: {
      minecraft: "1.20.1",
      modpack: "2.8.7",
      loaderVersion: "0.14.25",
      loader: "Fabric",
      lastUpdated: "1st July 2024 at 10:00",
    },
    tags: ["rpg", "create", "better combat", "ad astra", "quests", "shaders"],
  },
  {
    id: "steampunk",
    sort: 5,
    name: "Steampunk",
    active: true,
    hidden: false,
    url: "/modpacks/steampunk",
    image: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/steampunk.png",
    background: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/cottage.webp",
    hasVideoBack: false,
    title: "Victorian aesthetics and mechanical marvels",
    description:
      "Transform you Minecraft experience into a fanastical adventure filled with steam-powered creations, intricate gears and gigantic airships! Battle new bosses and explore new strongholds and fortresses.",
    buttonLabel: "Fire up your furnace!",
    moderators: ["@the_HSC", "@FarrinOrbs"],
    download: "https://www.curseforge.com/minecraft/modpacks/steampunk",
    styles: {
      link: "font-body justify-center shadow-md bg-orange-800 text-white border-0 focus:outline-none hover:bg-orange-500 rounded text-2xl mt-8 lg:inline-flex relative block p-4",
      logo: "w-full lg:w-[550px] xl:w-[650px] mx-auto md:mx-0",
    },
    version: {
      minecraft: "1.19.2",
      modpack: "23.5",
      loaderVersion: "47.2.20",
      loader: "Forge",
      lastUpdated: "1st July 2024 at 10:00",
    },
    tags: ["ad astra", "alex's mobs", "create", "end remastered", "immersive engineering", "shaders"],
  },
  {
    id: "atm9",
    sort: 3,
    name: "All The Mods 9 (ATM9)",
    image: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/atm9.png",
    background:
      "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/dooburt_steve_character_from_minecraft_staring_with_white_eye_9fc140f7-0a95-4640-9097-d7860ebccee5_0.png",
    hasVideoBack: false,
    title: "It's not called All The Mods for nothing...",
    description:
      "Cram your Minecraft experience to bursting with ATM9's ever-growing collection of mods. With countless quests and challenging end-game, you can sink days into this pack and explore many mods unseen or unloved in other packs.",
    active: true,
    hidden: false,
    url: "/modpacks/atm9",
    buttonLabel: "Cram it in!",
    moderators: ["@dooburt", "@teew", "@FarrinOrbs"],
    download: "https://www.curseforge.com/minecraft/modpacks/all-the-mods-9",
    styles: {
      link: "justify-center shadow-md bg-yellow-500 text-black border-0 focus:outline-none hover:bg-orange-800 rounded text-2xl mt-8 lg:inline-flex relative block p-4",
      logo: "w-full w-[330px] lg:w-[400px] xl:w-[420px] mx-auto md:mx-0",
    },
    version: {
      minecraft: "1.20.1",
      modpack: "9-0.2.60",
      loaderVersion: "47.2.20",
      loader: "Forge",
      lastUpdated: "1st July 2024 at 10:00",
    },
    tags: ["ae2", "ad astra", "ars elemental", "ars nouveau", "create", "immersive engineering"],
  },
  {
    id: "bettermc",
    name: "Better MC",
    active: true,
    url: "/modpacks/bettermc",
    title: "Breathe life into your blocky universe...",
    image: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/better-minecraft.png",
    background: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/Better_Minecraft_FABRIC_1.19.2_03_06_2024_12_56_47.png",
    hasVideoBack: false,
    buttonLabel: "Don't play vanilla, play this",
    description:
      "Elevate your vanilla Minecraft experience with Better Minecraft (BMC1 for 1.19.2) with overhauled world gen, over 100 quests, 5 new dimensions and new bosses and foes from AdventureZ and Bosses of Mass Destruction.",
    styles: {
      link: "justify-center shadow-md bg-purple-400 text-white border-0 focus:outline-none hover:bg-purple-800 rounded text-2xl mt-8 lg:inline-flex relative block p-4",
      logo: "w-full lg:w-[550px] xl:w-[650px] mx-auto md:mx-0",
    },
    version: {
      minecraft: "1.20.1",
      modpack: "20",
      loaderVersion: "47.2.20",
      loader: "Forge",
      lastUpdated: "1st July 2024 at 10:00",
    },
    tags: ["vanilla+", "adventurez", "waystones", "xaero", "dragons", "shaders"],
  },
  {
    id: "ciscos-rpg-adventure",
    name: "Cisco's RPG Adventure",
    active: true,
    url: "/modpacks/ciscos-rpg-adventure",
    title: "Tough challenges, exciting loot and deep RPG mechanics await...",
    image: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/ciscos-logo.png",
    background: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/cave.jpg",
    hasVideoBack: false,
    buttonLabel: "Onward!",
    description:
      "Overhaul your Minecraft experience with Cisco's RPG Adventure. Hundreds of new structures and dungeons need exploring, enemies need fighting and custom weapons need crafting. Are you up to the challenge?",
    styles: {
      link: "justify-center shadow-md bg-purple-800 text-white border-0 focus:outline-none hover:bg-purple-900 rounded text-2xl mt-8 lg:inline-flex relative block p-4",
      logo: "w-full lg:w-[550px] xl:w-[650px] mx-auto md:mx-0",
    },
    version: {
      minecraft: "1.19.2",
      modpack: "4d",
      loaderVersion: "47.2.20",
      loader: "Forge",
      lastUpdated: "1st July 2024 at 10:00",
    },
    tags: ["apotheosis", "better combat", "ars nouveau", "end remastered", "yung's"],
  },
  {
    id: "cobblemon",
    name: "Cobblemon",
    active: true,
    url: "/modpacks/cobblemon",
    title: "Pokemon for everyone!",
    image: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/cobblemon.png",
    background: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/wall.jpg",
    hasVideoBack: false,
    buttonLabel: "Get your cobblemon on...",
    description:
      "Capture Pokemon and expand your team, battling wild Pokemon to gain experience. Trade and battle with other players all whilst crafting your own world.",
    styles: {
      link: "justify-center shadow-md bg-indigo-800 text-white border-0 focus:outline-none hover:bg-indigo-800 rounded text-2xl mt-8 lg:inline-flex relative block p-4",
      logo: "w-full lg:w-[550px] xl:w-[650px] mx-auto md:mx-0",
    },
    version: {
      minecraft: "1.20.1",
      modpack: "9-0.2.60",
      loaderVersion: "47.2.20",
      loader: "Forge",
      lastUpdated: "1st July 2024 at 10:00",
    },
    tags: ["pokemon"],
  },
  {
    id: "dawncraft",
    sort: 50,
    name: "Dawncraft",
    active: false,
    hidden: false,
    url: "/modpacks/dawncraft",
    image: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/dawncraft.png",
    background: "https://thegreatbeyond.s3.eu-west-1.amazonaws.com/village.jpg",
    hasVideoBack: false,
    title: "Nothing comes easy in DawnCraft...",
    buttonLabel: "Revisit what was...",
    description:
      "Buckle-up buttercup, because in DawnCraft everything is monstrously difficult. The latest episode Echoes of Legends tasks you on a hardcore adventure that will require all your skills in combat, building and exploration. Dive into dungeons, battle dozens of bosses and complete a unique questline. Can you engineer your survival?",
    styles: {
      link: "justify-center shadow-md bg-indigo-800 text-white border-0 focus:outline-none hover:bg-indigo-800 rounded text-2xl mt-8 lg:inline-flex relative block p-4",
      logo: "w-full lg:w-[550px] xl:w-[650px] mx-auto md:mx-0",
    },
    version: {
      minecraft: "1.20.1",
      modpack: "9-0.2.60",
      loaderVersion: "47.2.20",
      loader: "Forge",
      lastUpdated: "1st July 2024 at 10:00",
    },
    tags: ["rpg"],
  },
];

export default modpacks;
