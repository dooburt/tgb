export const VERSION = {
  Minecraft: "1.18.2",
  Modpack: "2.0.8 beta",
  Forge: "40.2.9",
};

export const CHANGELOG = [
  {
    version: "1.27",
    applied: "26/07/2023 22:30",
    current: true,
    active: true,
    changes: [
      {
        key: 1,
        value: "Removed ImmediatelyFast for incompat issue",
      },
      { key: 2, value: "Add new item drops from Gryphon and Shade that have unique abilities" },
      { key: 3, value: "Giant Skeleton now despawns naturally" },
      { key: 4, value: "Added new performance mod" },
      {
        key: 5,
        value: "Fixed cutting board crash by reverting back to earlier version",
      },
      {
        key: 6,
        value: "Fixed ocean tower not working properly",
      },
      {
        key: 7,
        value: "Tweaked mob spawn rate slightly",
      },
      {
        key: 8,
        value: "Reactive enchantment now takes 2 enchantment points per increment",
      },
      {
        key: 9,
        value: "Apotheosis charm can only be activated when its in the charm slot",
      },
      {
        key: 10,
        value: "Mending no longer works on charms",
      },
      {
        key: 11,
        value: "Buffed harm spell damage",
      },
    ],
  },
  {
    version: "1.26",
    applied: "14/07/2023 14:00",
    current: false,
    active: false,
    changes: [
      {
        key: 1,
        value: "Drygmy charm is now crafted with imp drop instead of gryghon drop",
      },
      { key: 2, value: "Fractured Soul no longer diminishes tool/weapon/armor durability (exp and item drop penalty is increased instead)" },
      { key: 3, value: "Added more trades for dawncraft drops" },
      { key: 4, value: "Tweaked skeleton demon, tiny necromancer spawn rate" },
      {
        key: 5,
        value: "Updated apotheosis, modernfix, and farmer's delight",
      },
    ],
  },
  {
    version: "1.25",
    applied: "10/07/2023 14:00",
    current: false,
    active: false,
    changes: [
      {
        key: 1,
        value: "Re-enabled rubidium max entity distance culling, tweaked immersiveweathering config to improve FPS",
      },
      { key: 2, value: "Slight changes to shade and sentinel knight" },
      { key: 3, value: "Fixed a few rare crashes" },
      { key: 4, value: "Fixed Apotheosis adventure module config syntax" },
      {
        key: 5,
        value: "Nerfed vindicator and iron golem damage",
      },
      {
        key: 6,
        value: "Corrupted Ogre now only drops essence when its killed by player",
      },
      {
        key: 7,
        value: "Improved Mobs difficulty scaling is now regional instead of global (should be easier now for new players on older servers)",
      },
      {
        key: 8,
        value: "Changed crafting recipe for drygmy charm, glyph of conjure magelight, glyph of heal & cage trap",
      },
      {
        key: 9,
        value: "Buffed 'Heal' spell, Magelight no longer stays indefinitely",
      },
      {
        key: 10,
        value: "Updated pre-installed shaders to latest versions",
      },
      {
        key: 11,
        value: "Added texture compat between Excalibur and Enlightened End",
      },
    ],
  },
  {
    version: "1.24 - please use client 1.23",
    applied: "20/06/2023 17:00",
    current: false,
    active: false,
    changes: [
      {
        key: 1,
        value: "Forge is now 40.2.9",
      },
      { key: 2, value: "New creatures from mutant monsters (Spawn gated behind Knight Rober's quest) and updated Majrusz's Difficulty" },
      { key: 3, value: "Fixed Battletower spawners not working" },
      { key: 4, value: "Fixed a potential few uncommon crashes (credit: settingdust)" },
      {
        key: 5,
        value: "Updated most mods, notable ones include: Create, Majrusz's Difficulty",
      },
      {
        key: 6,
        value: "Reworked silver beast and brain sucker textures",
      },
      {
        key: 7,
        value: "Minor changes",
      },
    ],
  },
  {
    version: "1.23",
    applied: "19/06/2023 14:00",
    current: false,
    active: false,
    changes: [
      {
        key: 1,
        value: "The last few raiders will be highlighted in raids",
      },
      { key: 2, value: "Fixed goblin crown causing cloud storage search to fail (credit: settingdust)" },
      { key: 3, value: "Fixed potential deadlock caused by dragon spawn" },
      { key: 4, value: "Fixed tiny necromancer loot" },
      {
        key: 5,
        value: "Buffed notch damage",
      },
      {
        key: 6,
        value: "Food diversity effects now give a total of 7 hearts when maxed out",
      },
      {
        key: 7,
        value: "All blood and madness weapons now have 15 enchantability hard cap",
      },
      {
        key: 8,
        value: "Nerfed apotheosis berserking module",
      },
      {
        key: 9,
        value: "Changed crafting recipe of prismatic cobweb and paladin armour",
      },
      {
        key: 10,
        value: "Changed coral lance moveset",
      },
      {
        key: 11,
        value: "Tome of Scrapping can now only be found in dungeon loots",
      },
      {
        key: 12,
        value: "Quest language is now localised",
      },
      {
        key: 13,
        value:
          "Mod changes to: BH Menu, Dawncraft Mobs, Dawncraft Fixes, Difficult Raids, Modernfix, Quest Giver, Jade, Sophisticated Core, Oculus, Flywheel Compat, Drippyloading, Controlling",
      },
      {
        key: 14,
        value: "Added: fullstack watchdog",
      },
    ],
  },
  {
    version: "1.22_hf",
    applied: "13/06/2023 15:00",
    current: false,
    active: false,
    changes: [
      {
        key: 1,
        value: "Fix log spam and reset REI config (client-side only, no need to update serverpack)",
      },
      { key: 2, value: "Major Loot Overhaul" },
      { key: 3, value: "Overhauled Most Dungeon Loots" },
      { key: 4, value: "Magistu Medieval Armory, Jet and Elia Armory, and some Scattered Weapons will now appear in most dungeon chest loot" },
      {
        key: 5,
        value: "Nerfed non-dungeon loots",
      },
      {
        key: 6,
        value: "Improved cheese protection for Notch, Skeleton Lord and Nine Tails",
      },
      {
        key: 7,
        value: "New Armor Sets from Jet and Elia's Armor",
      },
      {
        key: 8,
        value: "Buffed Elemental Deity armor values",
      },
      {
        key: 9,
        value: "Items now have a hard limit on the amount of enchantments they can have",
      },
      {
        key: 10,
        value: "Armor value now has diminishing returns",
      },
      {
        key: 11,
        value: "Nerfed Apotheosis Bolstering Module",
      },
      {
        key: 12,
        value: "Disabled Champion Adaptable affix on mobs",
      },
      {
        key: 13,
        value: "Chikage now deals damage to user when swung on top of blood loss",
      },
      {
        key: 14,
        value: "Fixed Chikage visual bug",
      },
      {
        key: 15,
        value: "Removed regeneration buff from diets",
      },
      {
        key: 16,
        value: "Fixed creative search bar not working",
      },
      {
        key: 17,
        value: "Updated default keybinds",
      },
    ],
  },
  {
    version: "1.21_hf",
    applied: "03/06/2023 15:00",
    current: false,
    active: false,
    changes: [
      {
        key: 1,
        value: "Improved world load time",
      },
      { key: 2, value: "Fixed rare invalid player data issue from quest giver (credit: settingdust)" },
      { key: 3, value: "Fixed rare dual greatsword related crash (credit: settingdust)" },
      { key: 4, value: "Fixed pillagers and illusioners spawned from spawners not doing damage" },
      {
        key: 5,
        value: "Added katana drop for shogunate",
      },
      {
        key: 6,
        value: "Nerfed blood and madness weapon durability",
      },
      {
        key: 7,
        value: "Ported new goblin combat AI to CurseForge version",
      },
    ],
  },
  {
    version: "1.20",
    applied: "25/05/2023 20:00",
    current: false,
    active: false,
    changes: [
      {
        key: 1,
        value: "Fixed untamed wilds/REI related crash (credit: settingdust)",
      },
      { key: 2, value: "Slight rework for Sentinel Knight (new movesets)" },
      { key: 3, value: "Stuns against bosses now only work in close range" },
      { key: 4, value: "Nerfed graceful modules in Apotheosis" },
      {
        key: 5,
        value: "Reduced trench size around ocean battle tower to reduce world gen lag",
      },
      {
        key: 6,
        value: "Disabled idas maps from villager trades to prevent deadlocks",
      },
      {
        key: 7,
        value: "Updated mods: Dawncraft Mobs, Dawncraft Fix, BrassAmber's Battle Tower, Passable Foliage, Supermartin Core Lib",
      },
    ],
  },
];
