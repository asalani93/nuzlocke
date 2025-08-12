import { createAbility, createAbilityTable } from "../utils"

export const Ability = createAbilityTable({
  ANGER_SHELL: createAbility("ANGER_SHELL", {
    name: "Anger Shell",
    effect:
      "When an attack causes its HP to drop to half or less, the Pokémon gets angry. This lowers its Defense and Sp. Def stats but boosts its Attack, Sp. Atk, and Speed stats.",
  }),
  ANTICIPATION: createAbility("ANTICIPATION", {
    name: "Anticipation",
    effect:
      "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
  }),
  ARMOR_TAIL: createAbility("ARMOR_TAIL", {
    name: "Armor Tail",
    effect:
      "Armor Tail prevents the opponent from using any moves that have priority, such as Quick Attack.",
  }),
  BLAZE: createAbility("BLAZE", {
    name: "Blaze",
    effect: "Strengthens fire moves to inflict 1.5x damage at 1/3 max HP or less.",
  }),
  CHEEK_POUCH: createAbility("CHEEK_POUCH", {
    name: "Cheek Pouch",
    effect: "Restores HP upon eating a Berry, in addition to the Berry's effect.",
  }),
  CHLOROPHYLL: createAbility("CHLOROPHYLL", {
    name: "Chlorophyll",
    effect: "Doubles Speed during strong sunlight.",
  }),
  COMATOSE: createAbility("COMATOSE", {
    name: "Comatose",
    effect: "This Pokémon always  acts as though it were Asleep.",
  }),
  COMMANDER: createAbility("COMMANDER", {
    name: "Commander",
    effect: "Goes inside the mouth of an ally Dondozo if one is on the field. ",
  }),
  CUTE_CHARM: createAbility("CUTE_CHARM", {
    name: "Cute Charm",
    effect: "Has a 30% chance of infatuating attacking Pokémon on contact.",
  }),
  DANCER: createAbility("DANCER", {
    name: "Dancer",
    effect:
      "Whenever another Pokémon uses a dance move, this Pokémon will use the same move immediately afterwards.",
  }),
  DEFIANT: createAbility("DEFIANT", {
    name: "Defiant",
    effect: "Raises Attack two stages upon having any stat lowered.",
  }),
  DISGUISE: createAbility("DISGUISE", {
    name: "Disguise",
    effect: "Prevents the first instance of battle damage.",
  }),
  DROUGHT: createAbility("DROUGHT", {
    name: "Drought",
    effect: "Summons strong sunlight that lasts indefinitely upon entering battle.",
  }),
  EARLY_BIRD: createAbility("EARLY_BIRD", {
    name: "Early Bird",
    effect: "Makes sleep pass twice as quickly.",
  }),
  EARTH_EATER: createAbility("EARTH_EATER", {
    name: "Earth Eater",
    effect: "Restores HP when hit by a Ground-type move. ",
  }),
  EFFECT_SPORE: createAbility("EFFECT_SPORE", {
    name: "Effect Spore",
    effect:
      "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact.",
  }),
  ELECTROMORPHOSIS: createAbility("ELECTROMORPHOSIS", {
    name: "Electromorphosis",
    effect:
      "If a Pokémon with Electromorphosis is hit by an attack, the power of the next Electric-type move it uses is doubled.",
  }),
  FLASH_FIRE: createAbility("FLASH_FIRE", {
    name: "Flash Fire",
    effect:
      "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5x damage until it leaves battle.",
  }),
  FLOWER_VEIL: createAbility("FLOWER_VEIL", {
    name: "Flower Veil",
    effect: "Protects friendly grass Pokémon from having their stats lowered by other Pokémon.",
  }),
  GOOEY: createAbility("GOOEY", {
    name: "Gooey",
    effect: "Lowers attacking Pokémon's Speed by one stage on contact.",
  }),
  HUGE_POWER: createAbility("HUGE_POWER", {
    name: "Huge Power",
    effect: "Doubles Attack in battle.",
  }),
  INFILTRATOR: createAbility("INFILTRATOR", {
    name: "Infiltrator",
    effect: "Bypasses light screen, reflect, and safeguard.",
  }),
  INNER_FOCUS: createAbility("INNER_FOCUS", {
    name: "Inner Focus",
    effect: "Prevents flinching.",
  }),
  INSOMNIA: createAbility("INSOMNIA", {
    name: "Insomnia",
    effect: "Prevents sleep.",
  }),
  INTIMIDATE: createAbility("INTIMIDATE", {
    name: "Intimidate",
    effect: "Lowers opponents' Attack one stage upon entering battle.",
  }),
  IRON_FIST: createAbility("IRON_FIST", {
    name: "Iron Fist",
    effect: "Strengthens punch-based moves to 1.2x their power.",
  }),
  LEAF_GUARD: createAbility("LEAF_GUARD", {
    name: "Leaf Guard",
    effect: "Protects against major status ailments during strong sunlight.",
  }),
  LEVITATE: createAbility("LEVITATE", {
    name: "Levitate",
    effect: "Evades ground moves.",
  }),
  HADRON_ENGINE: createAbility("HADRON_ENGINE", {
    name: "Hadron Engine",
    effect:
      "Turns the ground into Electric Terrain when the Pokémon enters a battle. The futuristic engine within the Pokémon also boosts its Sp. Atk stat on Electric Terrain.",
  }),
  MAGMA_ARMOR: createAbility("MAGMA_ARMOR", {
    name: "Magma Armor",
    effect: "Prevents freezing.",
  }),
  MISTY_SURGE: createAbility("MISTY_SURGE", {
    name: "Misty Surge",
    effect: "When this Pokémon enters battle, it changes the terrain to Misty Terrain.",
  }),
  MOLD_BREAKER: createAbility("MOLD_BREAKER", {
    name: "Mold Breaker",
    effect: "Bypasses targets' abilities if they could hinder or prevent a move.",
  }),
  MYCELIUM_MIGHT: createAbility("MYCELIUM_MIGHT", {
    name: "Mycelium Might",
    effect: "Status moves go last, but are not affected by the opponent's ability. ",
  }),
  NATURAL_CURE: createAbility("NATURAL_CURE", {
    name: "Natural Cure",
    effect: "Cures any major status ailment upon switching out.",
  }),
  OBLIVIOUS: createAbility("OBLIVIOUS", {
    name: "Oblivious",
    effect: "Prevents infatuation and protects against captivate.",
  }),
  OPPORTUNIST: createAbility("OPPORTUNIST", {
    name: "Opportunist",
    effect: "Copies stat boosts by the opponent. ",
  }),
  ORICHALCUM_PULSE: createAbility("ORICHALCUM_PULSE", {
    name: "Orichalcum Pulse",
    effect:
      "Turns the sunlight harsh when the Pokémon enters a battle. The ancient pulse thrumming through the Pokémon also boosts its Attack stat in harsh sunlight.",
  }),
  OVERCOAT: createAbility("OVERCOAT", {
    name: "Overcoat",
    effect: "Protects against damage from weather.",
  }),
  OVERGROW: createAbility("OVERGROW", {
    name: "Overgrow",
    effect: "Strengthens grass moves to inflict 1.5x damage at 1/3 max HP or less.",
  }),
  OWN_TEMPO: createAbility("OWN_TEMPO", {
    name: "Own Tempo",
    effect: "Prevents confusion.",
  }),
  PICKUP: createAbility("PICKUP", {
    name: "Pickup",
    effect:
      "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
  }),
  POISON_POINT: createAbility("POISON_POINT", {
    name: "Poison Point",
    effect: "Has a 30% chance of poisoning attacking Pokémon on contact.",
  }),
  PRESSURE: createAbility("PRESSURE", {
    name: "Pressure",
    effect: "Increases the PP cost of moves targetting the Pokémon by one.",
  }),
  PROTOSYNTHESIS: createAbility("PROTOSYNTHESIS", {
    name: "Protosynthesis",
    effect: "Raises highest stat in harsh sunlight, or if holding Booster Energy. ",
  }),
  PUNK_ROCK: createAbility("PUNK_ROCK", {
    name: "Punk Rock",
    effect: "Boosts sound-based moves and halves damage from the same moves. ",
  }),
  PURIFYING_SALT: createAbility("PURIFYING_SALT", {
    name: "Purifying Salt",
    effect: "Protects from status conditions and halves damage from Ghost-type moves. ",
  }),
  QUARK_DRIVE: createAbility("QUARK_DRIVE", {
    name: "Quark Drive",
    effect:
      "Boosts the Pokémon's most proficient stat on Electric Terrain or if the Pokémon is holding Booster Energy.",
  }),
  QUICK_FEET: createAbility("QUICK_FEET", {
    name: "Quick Feet",
    effect: "Increases Speed to 1.5x with a major status ailment.",
  }),
  RECEIVER: createAbility("RECEIVER", {
    name: "Receiver",
    effect: "When an ally faints, this Pokémon gains its Ability.",
  }),
  RIPEN: createAbility("RIPEN", {
    name: "Ripen",
    effect: "Doubles the effect of berries. ",
  }),
  ROCKY_PAYLOAD: createAbility("ROCKY_PAYLOAD", {
    name: "Rocky Payload",
    effect: "Rocky Payload increases the power of Rock-type moves used by this Pokémon by 50%.",
  }),
  SAND_RUSH: createAbility("SAND_RUSH", {
    name: "Sand Rush",
    effect: "Doubles Speed during a sandstorm.  Protects against sandstorm damage.",
  }),
  SAND_VEIL: createAbility("SAND_VEIL", {
    name: "Sand Veil",
    effect: "Increases evasion to 1.25x during a sandstorm.  Protects against sandstorm damage.",
  }),
  SAP_SIPPER: createAbility("SAP_SIPPER", {
    name: "Sap Sipper",
    effect: "Absorbs grass moves, raising Attack one stage.",
  }),
  SCRAPPY: createAbility("SCRAPPY", {
    name: "Scrappy",
    effect: "Lets the Pokémon's normal and fighting moves hit ghost Pokémon.",
  }),
  SERENE_GRACE: createAbility("SERENE_GRACE", {
    name: "Serene Grace",
    effect: "Doubles the chance of moves' extra effects occurring.",
  }),
  SHEER_FORCE: createAbility("SHEER_FORCE", {
    name: "Sheer Force",
    effect:
      "Strengthens moves with extra effects to 1.3x their power, but prevents their extra effects.",
  }),
  SHIELD_DUST: createAbility("SHIELD_DUST", {
    name: "Shield Dust",
    effect: "Protects against incoming moves' extra effects.",
  }),
  SKILL_LINK: createAbility("SKILL_LINK", {
    name: "Skill Link",
    effect: "Extends two-to-five-hit moves and triple kick to their full length every time.",
  }),
  SNOW_CLOAK: createAbility("SNOW_CLOAK", {
    name: "Snow Cloak",
    effect: "Increases evasion to 1.25x during hail.  Protects against hail damage.",
  }),
  SNOW_WARNING: createAbility("SNOW_WARNING", {
    name: "Snow Warning",
    effect: "Summons hail that lasts indefinitely upon entering battle.",
  }),
  SPEED_BOOST: createAbility("SPEED_BOOST", {
    name: "Speed Boost",
    effect: "Raises Speed one stage after each turn.",
  }),
  STAMINA: createAbility("STAMINA", {
    name: "Stamina",
    effect: "Raises this Pokémon's Defense by one stage when it takes damage from a move.",
  }),
  STATIC: createAbility("STATIC", {
    name: "Static",
    effect: "Has a 30% chance of paralyzing attacking Pokémon on contact.",
  }),
  STEADFAST: createAbility("STEADFAST", {
    name: "Steadfast",
    effect: "Raises Speed one stage upon flinching.",
  }),
  STENCH: createAbility("STENCH", {
    name: "Stench",
    effect: "Has a 10% chance of making target Pokémon flinch with each hit.",
  }),
  STURDY: createAbility("STURDY", {
    name: "Sturdy",
    effect:
      "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
  }),
  SUPREME_OVERLORD: createAbility("SUPREME_OVERLORD", {
    name: "Supreme Overlord",
    effect: "Attack and Special Attack are boosted for each party Pokémon that has been defeated. ",
  }),
  SWARM: createAbility("SWARM", {
    name: "Swarm",
    effect: "Strengthens bug moves to inflict 1.5x damage at 1/3 max HP or less.",
  }),
  SYNCHRONIZE: createAbility("SYNCHRONIZE", {
    name: "Synchronize",
    effect: "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.",
  }),
  THERMAL_EXCHANGE: createAbility("THERMAL_EXCHANGE", {
    name: "Thermal Exchange",
    effect: "Raises Attack when hit by a Fire-type move. Cannot be burned. ",
  }),
  THICK_FAT: createAbility("THICK_FAT", {
    name: "Thick Fat",
    effect: "Halves damage from fire and ice moves.",
  }),
  TORRENT: createAbility("TORRENT", {
    name: "Torrent",
    effect: "Strengthens water moves to inflict 1.5x damage at 1/3 max HP or less.",
  }),
  TOXIC_DEBRIS: createAbility("TOXIC_DEBRIS", {
    name: "Toxic Debris",
    effect:
      "Scatters poison spikes at the feet of the opposing team when the Pokémon takes damage from physical moves. ",
  }),
  VITAL_SPIRIT: createAbility("VITAL_SPIRIT", {
    name: "Vital Spirit",
    effect: "Prevents sleep.",
  }),
  VOLT_ABSORB: createAbility("VOLT_ABSORB", {
    name: "Volt Absorb",
    effect: "Absorbs electric moves, healing for 1/4 max HP.",
  }),
  WATER_ABSORB: createAbility("WATER_ABSORB", {
    name: "Water Absorb",
    effect: "Absorbs water moves, healing for 1/4 max HP.",
  }),
  WEAK_ARMOR: createAbility("WEAK_ARMOR", {
    name: "Weak Armor",
    effect: "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
  }),
  WELL_BAKED_BODY: createAbility("WELL_BAKED_BODY", {
    name: "Well-Baked Body",
    effect: "Immune to Fire-type moves, and Defense is sharply boosted. ",
  }),
  WIND_POWER: createAbility("WIND_POWER", {
    name: "Wind Power",
    effect:
      "If a Pokémon with Wind Power is hit by a wind move, the power of the next Electric-type move it uses is doubled.",
  }),
})
