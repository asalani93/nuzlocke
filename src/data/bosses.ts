import { boss, createBossTable as bossTable } from "../types/boss";
import { Abilities } from "./abilities";
import { Locations } from "./locations";
import { Moves } from "./moves";
import { Pokemons } from "./pokemons";

export const BossType = {
  RIVAL: "rival",
  GYM: "gym",
  TITAN: "titan",
  TEAM_STAR: "team_star",
  ELITE_FOUR: "elite_four",
} as const;

export const Bosses = bossTable({
  ARVEN: boss("ARVEN", {
    name: "Arven",
    type: BossType.RIVAL,
    location: Locations.POCO_PATH_LIGHTHOUSE.id,
    team: [
      {
        pokemon: Pokemons.GREEDENT.id,
        level: 58,
        ability: Abilities.CHEEK_POUCH.id,
        moves: [
          Moves.BULLET_SEED.id,
          Moves.BODY_SLAM.id,
          Moves.PSYCHIC_FANGS.id,
          Moves.EARTHQUAKE.id,
        ],
      },
      {
        pokemon: Pokemons.CLOYSTER.id,
        level: 59,
        ability: Abilities.SKILL_LINK.id,
        moves: [
          Moves.ROCK_BLAST.id,
          Moves.ICICLE_SPEAR.id,
          Moves.LIQUIDATION.id,
          Moves.LIGHT_SCREEN.id,
        ],
      },
      {
        pokemon: Pokemons.SCOVILLAIN.id,
        level: 60,
        ability: Abilities.CHLOROPHYLL.id,
        moves: [
          Moves.FIRE_BLAST.id,
          Moves.ENERGY_BALL.id,
          Moves.ZEN_HEADBUTT.id,
          Moves.CRUNCH.id,
        ],
      },
      {
        pokemon: Pokemons.TOEDSCRUEL.id,
        level: 61,
        ability: Abilities.MYCELIUM_MIGHT.id,
        moves: [
          Moves.POWER_WHIP.id,
          Moves.EARTH_POWER.id,
          Moves.SPORE.id,
          Moves.SLUDGE_BOMB.id,
        ],
      },
      {
        pokemon: Pokemons.GARGANACL.id,
        level: 62,
        ability: Abilities.PURIFYING_SALT.id,
        moves: [
          Moves.STONE_EDGE.id,
          Moves.EARTHQUAKE.id,
          Moves.BODY_PRESS.id,
          Moves.STEALTH_ROCK.id,
        ],
      },
      {
        pokemon: Pokemons.MABOSSTIFF.id,
        level: 63,
        ability: Abilities.INTIMIDATE.id,
        moves: [
          Moves.CRUNCH.id,
          Moves.PSYCHIC_FANGS.id,
          Moves.FIRE_FANG.id,
          Moves.PLAY_ROUGH.id,
        ],
      },
    ],
  }),
  ATTICUS: boss("ATTICUS", {
    name: "Atticus",
    type: BossType.TEAM_STAR,
    location: Locations.TAGTREE_THICKET.id,
    team: [
      {
        pokemon: Pokemons.SKUNTANK.id,
        level: 32,
        ability: Abilities.STENCH.id,
        moves: [Moves.SUCKER_PUNCH.id, Moves.TOXIC.id, Moves.VENOSHOCK.id],
      },
      {
        pokemon: Pokemons.MUK.id,
        level: 32,
        ability: Abilities.STENCH.id,
        moves: [Moves.SLUDGE_WAVE.id, Moves.MUD_SLAP.id],
      },
      {
        pokemon: Pokemons.REVAVROOM.id,
        level: 33,
        ability: Abilities.OVERCOAT.id,
        moves: [
          Moves.IRON_HEAD.id,
          Moves.SLUDGE.id,
          Moves.ASSURANCE.id,
          Moves.BULLDOZE.id,
        ],
      },
      {
        pokemon: Pokemons.REVAVROOM.id,
        level: 32,
        ability: Abilities.TOXIC_DEBRIS.id,
        moves: [
          Moves.SPIN_OUT.id,
          Moves.NOXIOUS_TORQUE.id,
          Moves.FLAME_CHARGE.id,
          Moves.SMOG.id,
        ],
      },
    ],
  }),
  BOMBIRDIER: boss("BOMBIRDIER", {
    name: "Bombirdier",
    type: BossType.TITAN,
    location: Locations.WEST_PROVINCE_A1.id,
    team: [
      {
        pokemon: Pokemons.BOMBIRDIER.id,
        level: 20,
        ability: Abilities.ROCKY_PAYLOAD.id,
        moves: [
          Moves.ROCK_THROW.id,
          Moves.WING_ATTACK.id,
          Moves.PLUCK.id,
          Moves.TORMENT.id,
        ],
      },
    ],
  }),
  BRASSIUS: boss("BRASSIUS", {
    name: "Brassius",
    type: BossType.GYM,
    location: Locations.ARTAZON_CITY.id,
    team: [
      {
        pokemon: Pokemons.PETILIL.id,
        level: 16,
        ability: Abilities.OWN_TEMPO.id,
        moves: [Moves.SLEEP_POWDER.id, Moves.MEGA_DRAIN.id],
      },
      {
        pokemon: Pokemons.SMOLIV.id,
        level: 16,
        ability: Abilities.EARLY_BIRD.id,
        moves: [Moves.TACKLE.id, Moves.RAZOR_LEAF.id],
      },
      {
        pokemon: Pokemons.SUDOWOODO.id,
        level: 17,
        ability: Abilities.STURDY.id,
        moves: [Moves.TRAILBLAZE.id, Moves.ROCK_THROW.id],
      },
    ],
  }),
  CLIVE: boss("CLIVE", {
    name: "Clive",
    type: BossType.RIVAL,
    location: Locations.MESAGOZA.id,
    team: [
      {
        pokemon: Pokemons.ORANGURU.id,
        level: 60,
        ability: Abilities.INNER_FOCUS.id,
        moves: [
          Moves.YAWN.id,
          Moves.DREAM_EATER.id,
          Moves.REFLECT.id,
          Moves.FOUL_PLAY.id,
        ],
      },
      {
        pokemon: Pokemons.ABOMASNOW.id,
        level: 60,
        ability: Abilities.SNOW_WARNING.id,
        moves: [
          Moves.AURORA_VEIL.id,
          Moves.BLIZZARD.id,
          Moves.WOOD_HAMMER.id,
          Moves.ICE_SHARD.id,
        ],
      },
      {
        pokemon: Pokemons.POLTEAGEIST.id,
        level: 60,
        ability: Abilities.WEAK_ARMOR.id,
        moves: [
          Moves.SHELL_SMASH.id,
          Moves.SHADOW_BALL.id,
          Moves.SUCKER_PUNCH.id,
          Moves.WILL_O_WISP.id,
        ],
      },
      {
        pokemon: Pokemons.HOUNDOOM.id,
        level: 60,
        ability: Abilities.FLASH_FIRE.id,
        moves: [
          Moves.DARK_PULSE.id,
          Moves.FIRE_BLAST.id,
          Moves.SLUDGE_BOMB.id,
          Moves.THUNDER_FANG.id,
        ],
      },
      {
        pokemon: Pokemons.AMOONGUSS.id,
        level: 60,
        ability: Abilities.EFFECT_SPORE.id,
        moves: [
          Moves.SPORE.id,
          Moves.TOXIC.id,
          Moves.GIGA_DRAIN.id,
          Moves.HEX.id,
        ],
      },
      {
        pokemon: Pokemons.QUAQUAVAL.id,
        level: 61,
        ability: Abilities.TORRENT.id,
        moves: [
          Moves.BRICK_BREAK.id,
          Moves.AQUA_STEP.id,
          Moves.AERIAL_ACE.id,
          Moves.ICE_SPINNER.id,
        ],
      },
    ],
  }),
  ERI: boss("ERI", {
    name: "Eri",
    type: BossType.TEAM_STAR,
    location: Locations.NORTH_PROVINCE_A2.id,
    team: [
      {
        pokemon: Pokemons.TOXICROAK.id,
        level: 55,
        ability: Abilities.ANTICIPATION.id,
        moves: [
          Moves.POISON_JAB.id,
          Moves.BRICK_BREAK.id,
          Moves.SUCKER_PUNCH.id,
        ],
      },
      {
        pokemon: Pokemons.PASSIMIAN.id,
        level: 55,
        ability: Abilities.RECEIVER.id,
        moves: [Moves.CLOSE_COMBAT.id, Moves.ROCK_TOMB.id, Moves.SEED_BOMB.id],
      },
      {
        pokemon: Pokemons.LUCARIO.id,
        level: 55,
        ability: Abilities.STEADFAST.id,
        moves: [
          Moves.DRAGON_PULSE.id,
          Moves.AURA_SPHERE.id,
          Moves.DARK_PULSE.id,
        ],
      },
      {
        pokemon: Pokemons.ANNIHILAPE.id,
        level: 56,
        ability: Abilities.VITAL_SPIRIT.id,
        moves: [
          Moves.RAGE_FIST.id,
          Moves.CLOSE_COMBAT.id,
          Moves.ICE_PUNCH.id,
          Moves.FIRE_PUNCH.id,
        ],
      },
      {
        pokemon: Pokemons.REVAVROOM.id,
        level: 56,
        ability: Abilities.STAMINA.id,
        moves: [
          Moves.COMBAT_TORQUE.id,
          Moves.SPIN_OUT.id,
          Moves.SHIFT_GEAR.id,
          Moves.HIGH_HORSEPOWER.id,
        ],
      },
    ],
  }),
  GEETA: boss("GEETA", {
    name: "Geeta",
    type: BossType.ELITE_FOUR,
    location: Locations.ELITE_FOUR.id,
    team: [
      {
        pokemon: Pokemons.ESPATHRA.id,
        level: 61,
        ability: Abilities.OPPORTUNIST.id,
        moves: [
          Moves.LUMINA_CRASH.id,
          Moves.DAZZLING_GLEAM.id,
          Moves.QUICK_ATTACK.id,
          Moves.REFLECT.id,
        ],
      },
      {
        pokemon: Pokemons.GOGOAT.id,
        level: 61,
        ability: Abilities.SAP_SIPPER.id,
        moves: [
          Moves.HORN_LEECH.id,
          Moves.ZEN_HEADBUTT.id,
          Moves.PLAY_ROUGH.id,
          Moves.BULK_UP.id,
        ],
      },
      {
        pokemon: Pokemons.VELUZA.id,
        level: 61,
        ability: Abilities.MOLD_BREAKER.id,
        moves: [
          Moves.AQUA_JET.id,
          Moves.LIQUIDATION.id,
          Moves.PSYCHO_CUT.id,
          Moves.ICE_FANG.id,
        ],
      },
      {
        pokemon: Pokemons.AVALUGG.id,
        level: 61,
        ability: Abilities.OWN_TEMPO.id,
        moves: [
          Moves.AVALANCHE.id,
          Moves.CRUNCH.id,
          Moves.EARTHQUAKE.id,
          Moves.BODY_PRESS.id,
        ],
      },
      {
        pokemon: Pokemons.KINGAMBIT.id,
        level: 61,
        ability: Abilities.SUPREME_OVERLORD.id,
        moves: [
          Moves.IRON_HEAD.id,
          Moves.KOWTOW_CLEAVE.id,
          Moves.ZEN_HEADBUTT.id,
          Moves.STONE_EDGE.id,
        ],
      },
      {
        pokemon: Pokemons.GLIMMORA.id,
        level: 62,
        ability: Abilities.TOXIC_DEBRIS.id,
        moves: [
          Moves.TERA_BLAST.id,
          Moves.SLUDGE_WAVE.id,
          Moves.EARTH_POWER.id,
          Moves.DAZZLING_GLEAM.id,
        ],
      },
    ],
  }),
  GIACOMO: boss("GIACOMO", {
    name: "Giacomo",
    type: BossType.TEAM_STAR,
    location: Locations.WEST_PROVINCE_A1.id,
    team: [
      {
        pokemon: Pokemons.PAWNIARD.id,
        level: 21,
        ability: Abilities.DEFIANT.id,
        moves: [Moves.METAL_CLAW.id, Moves.FURY_CUTTER.id, Moves.AERIAL_ACE.id],
      },
      {
        pokemon: Pokemons.REVAVROOM.id,
        level: 20,
        ability: Abilities.INTIMIDATE.id,
        moves: [
          Moves.WICKED_TORQUE.id,
          Moves.SNARL.id,
          Moves.METAL_SOUND.id,
          Moves.SWIFT.id,
        ],
      },
    ],
  }),
  GREAT_TUSK: boss("GREAT_TUSK", {
    name: "Great Tusk",
    type: BossType.TITAN,
    location: Locations.ASADO_DESERT.id,
    team: [
      {
        pokemon: Pokemons.GREAT_TUSK.id,
        level: 45,
        ability: Abilities.PROTOSYNTHESIS.id,
        moves: [
          Moves.RAPID_SPIN.id,
          Moves.BRICK_BREAK.id,
          Moves.KNOCK_OFF.id,
          Moves.STOMPING_TANTRUM.id,
        ],
      },
    ],
  }),
  GRUSHA: boss("GRUSHA", {
    name: "Grusha",
    type: BossType.GYM,
    location: Locations.GLASEADO_CITY.id,
    team: [
      {
        pokemon: Pokemons.FROSMOTH.id,
        level: 47,
        ability: Abilities.SHIELD_DUST.id,
        moves: [Moves.BLIZZARD.id, Moves.BUG_BUZZ.id, Moves.TAILWIND.id],
      },
      {
        pokemon: Pokemons.BEARTIC.id,
        level: 47,
        ability: Abilities.SNOW_CLOAK.id,
        moves: [Moves.AQUA_JET.id, Moves.ICICLE_CRASH.id, Moves.EARTHQUAKE.id],
      },
      {
        pokemon: Pokemons.CETITAN.id,
        level: 47,
        ability: Abilities.THICK_FAT.id,
        moves: [Moves.ICE_SPINNER.id, Moves.LIQUIDATION.id, Moves.ICE_SHARD.id],
      },
      {
        pokemon: Pokemons.ALTARIA.id,
        level: 48,
        ability: Abilities.NATURAL_CURE.id,
        moves: [
          Moves.ICE_BEAM.id,
          Moves.DRAGON_PULSE.id,
          Moves.MOONBLAST.id,
          Moves.HURRICANE.id,
        ],
      },
    ],
  }),
  HASSEL: boss("HASSEL", {
    name: "Hassel",
    type: BossType.ELITE_FOUR,
    location: Locations.ELITE_FOUR.id,
    team: [
      {
        pokemon: Pokemons.NOIVERN.id,
        level: 60,
        ability: Abilities.INFILTRATOR.id,
        moves: [
          Moves.AIR_SLASH.id,
          Moves.DRAGON_PULSE.id,
          Moves.SUPER_FANG.id,
          Moves.HYPER_VOICE.id,
        ],
      },
      {
        pokemon: Pokemons.HAXORUS.id,
        level: 60,
        ability: Abilities.MOLD_BREAKER.id,
        moves: [
          Moves.DRAGON_CLAW.id,
          Moves.CRUNCH.id,
          Moves.IRON_HEAD.id,
          Moves.ROCK_TOMB.id,
        ],
      },
      {
        pokemon: Pokemons.DRAGALGE.id,
        level: 60,
        ability: Abilities.POISON_POINT.id,
        moves: [
          Moves.SLUDGE_BOMB.id,
          Moves.DRAGON_PULSE.id,
          Moves.HYDRO_PUMP.id,
          Moves.THUNDERBOLT.id,
        ],
      },
      {
        pokemon: Pokemons.FLAPPLE.id,
        level: 60,
        ability: Abilities.RIPEN.id,
        moves: [
          Moves.DRAGON_RUSH.id,
          Moves.SEED_BOMB.id,
          Moves.AERIAL_ACE.id,
          Moves.LEECH_SEED.id,
        ],
      },
      {
        pokemon: Pokemons.BAXCALIBUR.id,
        level: 61,
        ability: Abilities.THERMAL_EXCHANGE.id,
        moves: [
          Moves.ICICLE_CRASH.id,
          Moves.BRICK_BREAK.id,
          Moves.GLAIVE_RUSH.id,
        ],
      },
    ],
  }),
  IONO: boss("IONO", {
    name: "Iono",
    type: BossType.GYM,
    location: Locations.LEVINCIA_CITY.id,
    team: [
      {
        pokemon: Pokemons.WATTREL.id,
        level: 23,
        ability: Abilities.WIND_POWER.id,
        moves: [Moves.PLUCK.id, Moves.QUICK_ATTACK.id, Moves.SPARK.id],
      },
      {
        pokemon: Pokemons.BELLIBOLT.id,
        level: 23,
        ability: Abilities.ELECTROMORPHOSIS.id,
        moves: [Moves.WATER_GUN.id, Moves.SPARK.id],
      },
      {
        pokemon: Pokemons.LUXIO.id,
        level: 23,
        ability: Abilities.INTIMIDATE.id,
        moves: [Moves.SPARK.id, Moves.BITE.id],
      },
      {
        pokemon: Pokemons.MISMAGIUS.id,
        level: 24,
        ability: Abilities.LEVITATE.id,
        moves: [Moves.CHARGE_BEAM.id, Moves.HEX.id, Moves.CONFUSE_RAY.id],
      },
    ],
  }),
  IRON_TREADS: boss("IRON_TREADS", {
    name: "Iron Treads",
    type: BossType.TITAN,
    location: Locations.ASADO_DESERT.id,
    team: [
      {
        pokemon: Pokemons.IRON_TREADS.id,
        level: 45,
        ability: Abilities.QUARK_DRIVE.id,
        moves: [
          Moves.RAPID_SPIN.id,
          Moves.IRON_HEAD.id,
          Moves.KNOCK_OFF.id,
          Moves.STOMPING_TANTRUM.id,
        ],
      },
    ],
  }),
  KATY: boss("KATY", {
    name: "Katy",
    type: BossType.GYM,
    location: Locations.CORTONDO_CITY.id,
    team: [
      {
        pokemon: Pokemons.NYMBLE.id,
        level: 14,
        ability: Abilities.SWARM.id,
        moves: [Moves.STRUGGLE_BUG.id, Moves.DOUBLE_KICK.id],
      },
      {
        pokemon: Pokemons.TAROUNTULA.id,
        level: 14,
        ability: Abilities.INSOMNIA.id,
        moves: [Moves.BUG_BITE.id, Moves.ASSURANCE.id],
      },
      {
        pokemon: Pokemons.TEDDIURSA.id,
        level: 15,
        ability: Abilities.PICKUP.id,
        moves: [Moves.FURY_CUTTER.id, Moves.FURY_SWIPES.id],
      },
    ],
  }),
  KLAWF: boss("KLAWF", {
    name: "Klawf",
    type: BossType.TITAN,
    location: Locations.SOUTH_PROVINCE_A3.id,
    team: [
      {
        pokemon: Pokemons.KLAWF.id,
        level: 16,
        ability: Abilities.ANGER_SHELL.id,
        moves: [
          Moves.VISE_GRIP.id,
          Moves.ROCK_SMASH.id,
          Moves.BLOCK.id,
          Moves.ROCK_TOMB.id,
        ],
      },
    ],
  }),
  KOFU: boss("KOFU", {
    name: "Kofu",
    type: BossType.GYM,
    location: Locations.CASCARRAFA_CITY.id,
    team: [
      {
        pokemon: Pokemons.VELUZA.id,
        level: 29,
        ability: Abilities.MOLD_BREAKER.id,
        moves: [Moves.SLASH.id, Moves.PLUCK.id, Moves.AQUA_CUTTER.id],
      },
      {
        pokemon: Pokemons.WUGTRIO.id,
        level: 29,
        ability: Abilities.GOOEY.id,
        moves: [Moves.MUD_SLAP.id, Moves.WATER_PULSE.id, Moves.HEADBUTT.id],
      },
      {
        pokemon: Pokemons.CRABOMINABLE.id,
        level: 30,
        ability: Abilities.IRON_FIST.id,
        moves: [Moves.CRABHAMMER.id, Moves.ROCK_SMASH.id, Moves.SLAM.id],
      },
    ],
  }),
  LARRY_1: boss("LARRY_1", {
    name: "Larry",
    type: BossType.GYM,
    location: Locations.MEDALI_CITY.id,
    team: [
      {
        pokemon: Pokemons.KOMALA.id,
        level: 35,
        ability: Abilities.COMATOSE.id,
        moves: [Moves.YAWN.id, Moves.SUCKER_PUNCH.id, Moves.SLAM.id],
      },
      {
        pokemon: Pokemons.DUDUNSPARCE.id,
        level: 35,
        ability: Abilities.SERENE_GRACE.id,
        moves: [Moves.HYPER_DRILL.id, Moves.DRILL_RUN.id, Moves.GLARE.id],
      },
      {
        pokemon: Pokemons.STARAPTOR.id,
        level: 36,
        ability: Abilities.INTIMIDATE.id,
        moves: [Moves.FACADE.id, Moves.AERIAL_ACE.id],
      },
    ],
  }),
  LARRY_2: boss("LARRY_2", {
    name: "Larry",
    type: BossType.ELITE_FOUR,
    location: Locations.ELITE_FOUR.id,
    team: [
      {
        pokemon: Pokemons.TROPIUS.id,
        level: 59,
        ability: Abilities.CHLOROPHYLL.id,
        moves: [
          Moves.AIR_SLASH.id,
          Moves.SOLAR_BEAM.id,
          Moves.DRAGON_PULSE.id,
          Moves.SUNNY_DAY.id,
        ],
      },
      {
        pokemon: Pokemons.ORICORIO.id,
        level: 59,
        ability: Abilities.DANCER.id,
        moves: [
          Moves.REVELATION_DANCE.id,
          Moves.AIR_SLASH.id,
          Moves.TEETER_DANCE.id,
          Moves.ICY_WIND.id,
        ],
      },
      {
        pokemon: Pokemons.ALTARIA.id,
        level: 59,
        ability: Abilities.NATURAL_CURE.id,
        moves: [
          Moves.MOONBLAST.id,
          Moves.FLAMETHROWER.id,
          Moves.ICE_BEAM.id,
          Moves.DRAGON_PULSE.id,
        ],
      },
      {
        pokemon: Pokemons.STARAPTOR.id,
        level: 59,
        ability: Abilities.INTIMIDATE.id,
        moves: [
          Moves.FACADE.id,
          Moves.BRAVE_BIRD.id,
          Moves.CLOSE_COMBAT.id,
          Moves.THIEF.id,
        ],
      },
      {
        pokemon: Pokemons.FLAMIGO.id,
        level: 60,
        ability: Abilities.SCRAPPY.id,
        moves: [
          Moves.BRAVE_BIRD.id,
          Moves.CLOSE_COMBAT.id,
          Moves.THROAT_CHOP.id,
          Moves.LIQUIDATION.id,
        ],
      },
    ],
  }),
  MELA: boss("MELA", {
    name: "Mela",
    type: BossType.TEAM_STAR,
    location: Locations.EAST_PROVINCE_A1.id,
    team: [
      {
        pokemon: Pokemons.TORKOAL.id,
        level: 27,
        ability: Abilities.DROUGHT.id,
        moves: [Moves.FLAME_WHEEL.id, Moves.CLEAR_SMOG.id],
      },
      {
        pokemon: Pokemons.REVAVROOM.id,
        level: 26,
        ability: Abilities.SPEED_BOOST.id,
        moves: [
          Moves.OVERHEAT.id,
          Moves.BLAZING_TORQUE.id,
          Moves.SCREECH.id,
          Moves.SWIFT.id,
        ],
      },
    ],
  }),
  NEMONA_1: boss("NEMONA_1", {
    name: "Nemona 1",
    type: BossType.RIVAL,
    location: Locations.POCO_PATH.id,
    team: [
      {
        pokemon: Pokemons.SPRIGATITO.id,
        level: 5,
        ability: Abilities.OVERGROW.id,
        moves: [Moves.SCRATCH.id, Moves.TAIL_WHIP.id, Moves.LEAFAGE.id],
      },
    ],
  }),
  NEMONA_2: boss("NEMONA_2", {
    name: "Nemona 2",
    type: BossType.RIVAL,
    location: Locations.MESAGOZA.id,
    team: [
      {
        pokemon: Pokemons.SPRIGATITO.id,
        level: 8,
        ability: Abilities.OVERGROW.id,
        moves: [
          Moves.SCRATCH.id,
          Moves.TAIL_WHIP.id,
          Moves.LEAFAGE.id,
          Moves.BITE.id,
        ],
      },
      {
        pokemon: Pokemons.PAWMI.id,
        level: 9,
        ability: Abilities.STATIC.id,
        moves: [Moves.THUNDER_SHOCK.id],
      },
    ],
  }),
  NEMONA_3: boss("NEMONA_3", {
    name: "Nemona 3",
    type: BossType.RIVAL,
    location: Locations.LEVINCIA_CITY.id,
    team: [
      {
        pokemon: Pokemons.ROCKRUFF.id,
        level: 21,
        ability: Abilities.VITAL_SPIRIT.id,
        moves: [
          Moves.DOUBLE_TEAM.id,
          Moves.ROCK_THROW.id,
          Moves.HOWL.id,
          Moves.BITE.id,
        ],
      },
      {
        pokemon: Pokemons.PAWMI.id,
        level: 21,
        ability: Abilities.STATIC.id,
        moves: [Moves.CHARGE.id, Moves.NUZZLE.id, Moves.DIG.id, Moves.BITE.id],
      },
      {
        pokemon: Pokemons.FLORAGATO.id,
        level: 22,
        ability: Abilities.OVERGROW.id,
        moves: [
          Moves.QUICK_ATTACK.id,
          Moves.MAGICAL_LEAF.id,
          Moves.HONE_CLAWS.id,
          Moves.BITE.id,
        ],
      },
    ],
  }),
  NEMONA_4: boss("NEMONA_4", {
    name: "Nemona 4",
    type: BossType.RIVAL,
    location: Locations.MEDALI_CITY.id,
    team: [
      {
        pokemon: Pokemons.LYCANROC.id,
        level: 36,
        ability: Abilities.SAND_RUSH.id,
        moves: [Moves.QUICK_ATTACK.id, Moves.ACCELEROCK.id, Moves.BITE.id],
      },
      {
        pokemon: Pokemons.GOOMY.id,
        level: 36,
        ability: Abilities.SAP_SIPPER.id,
        moves: [Moves.DRAGON_PULSE.id, Moves.WATER_PULSE.id, Moves.FLAIL.id],
      },
      {
        pokemon: Pokemons.PAWMO.id,
        level: 36,
        ability: Abilities.VOLT_ABSORB.id,
        moves: [
          Moves.ARM_THRUST.id,
          Moves.SPARK.id,
          Moves.THUNDER_WAVE.id,
          Moves.QUICK_ATTACK.id,
        ],
      },
      {
        pokemon: Pokemons.MEOWSCARADA.id,
        level: 37,
        ability: Abilities.OVERGROW.id,
        moves: [Moves.SLASH.id, Moves.FLOWER_TRICK.id, Moves.QUICK_ATTACK.id],
      },
    ],
  }),
  NEMONA_5: boss("NEMONA_5", {
    name: "Nemona 5",
    type: BossType.RIVAL,
    location: Locations.ALFORNADA_CITY.id,
    team: [
      {
        pokemon: Pokemons.LYCANROC.id,
        level: 42,
        ability: Abilities.SAND_RUSH.id,
        moves: [
          Moves.ACCELEROCK.id,
          Moves.CRUNCH.id,
          Moves.ROCK_SLIDE.id,
          Moves.SAND_ATTACK.id,
        ],
      },
      {
        pokemon: Pokemons.SLIGGOO.id,
        level: 42,
        ability: Abilities.SAP_SIPPER.id,
        moves: [Moves.DRAGON_PULSE.id, Moves.WATER_PULSE.id, Moves.FLAIL.id],
      },
      {
        pokemon: Pokemons.PAWMOT.id,
        level: 42,
        ability: Abilities.VOLT_ABSORB.id,
        moves: [
          Moves.ARM_THRUST.id,
          Moves.SPARK.id,
          Moves.THUNDER_WAVE.id,
          Moves.QUICK_ATTACK.id,
        ],
      },
      {
        pokemon: Pokemons.MEOWSCARADA.id,
        level: 43,
        ability: Abilities.OVERGROW.id,
        moves: [Moves.SLASH.id, Moves.FLOWER_TRICK.id, Moves.QUICK_ATTACK.id],
      },
    ],
  }),
  NEMONA_6: boss("NEMONA_6", {
    name: "Nemona 6",
    type: BossType.RIVAL,
    location: Locations.MESAGOZA.id,
    team: [
      {
        pokemon: Pokemons.LYCANROC.id,
        level: 65,
        ability: Abilities.SAND_RUSH.id,
        moves: [
          Moves.ACCELEROCK.id,
          Moves.DRILL_RUN.id,
          Moves.STEALTH_ROCK.id,
          Moves.STONE_EDGE.id,
        ],
      },
      {
        pokemon: Pokemons.GOODRA.id,
        level: 65,
        ability: Abilities.SAP_SIPPER.id,
        moves: [
          Moves.DRAGON_PULSE.id,
          Moves.MUDDY_WATER.id,
          Moves.ICE_BEAM.id,
          Moves.SLUDGE_BOMB.id,
        ],
      },
      {
        pokemon: Pokemons.DUDUNSPARCE.id,
        level: 65,
        ability: Abilities.SERENE_GRACE.id,
        moves: [
          Moves.HYPER_DRILL.id,
          Moves.DRILL_RUN.id,
          Moves.DRAGON_RUSH.id,
          Moves.COIL.id,
        ],
      },
      {
        pokemon: Pokemons.ORTHWORM.id,
        level: 65,
        ability: Abilities.EARTH_EATER.id,
        moves: [
          Moves.IRON_TAIL.id,
          Moves.BODY_PRESS.id,
          Moves.EARTHQUAKE.id,
          Moves.ROCK_BLAST.id,
        ],
      },
      {
        pokemon: Pokemons.PAWMOT.id,
        level: 65,
        ability: Abilities.VOLT_ABSORB.id,
        moves: [
          Moves.DOUBLE_SHOCK.id,
          Moves.CLOSE_COMBAT.id,
          Moves.ICE_PUNCH.id,
          Moves.QUICK_ATTACK.id,
        ],
      },
      {
        pokemon: Pokemons.MEOWSCARADA.id,
        level: 66,
        ability: Abilities.OVERGROW.id,
        moves: [
          Moves.THUNDER_PUNCH.id,
          Moves.FLOWER_TRICK.id,
          Moves.SHADOW_CLAW.id,
          Moves.PLAY_ROUGH.id,
        ],
      },
    ],
  }),
  ORTEGA: boss("ORTEGA", {
    name: "Ortega",
    type: BossType.TEAM_STAR,
    location: Locations.NORTH_PROVINCE_A1.id,
    team: [
      {
        pokemon: Pokemons.AZUMARILL.id,
        level: 50,
        ability: Abilities.HUGE_POWER.id,
        moves: [
          Moves.AQUA_TAIL.id,
          Moves.PLAY_ROUGH.id,
          Moves.BOUNCE.id,
          Moves.CHARM.id,
        ],
      },
      {
        pokemon: Pokemons.WIGGLYTUFF.id,
        level: 50,
        ability: Abilities.CUTE_CHARM.id,
        moves: [
          Moves.BODY_SLAM.id,
          Moves.PLAY_ROUGH.id,
          Moves.GYRO_BALL.id,
          Moves.CHARM.id,
        ],
      },
      {
        pokemon: Pokemons.DACHSBUN.id,
        level: 51,
        ability: Abilities.WELL_BAKED_BODY.id,
        moves: [
          Moves.CRUNCH.id,
          Moves.PLAY_ROUGH.id,
          Moves.BABY_DOLL_EYES.id,
          Moves.MUD_SLAP.id,
        ],
      },
      {
        pokemon: Pokemons.REVAVROOM.id,
        level: 50,
        ability: Abilities.MISTY_SURGE.id,
        moves: [
          Moves.MAGICAL_TORQUE.id,
          Moves.SPIN_OUT.id,
          Moves.STEEL_ROLLER.id,
          Moves.CONFUSE_RAY.id,
        ],
      },
    ],
  }),
  ORTHWORM: boss("ORTHWORM", {
    name: "Orthworm",
    type: BossType.TITAN,
    location: Locations.EAST_PROVINCE_A3.id,
    team: [
      {
        pokemon: Pokemons.ORTHWORM.id,
        level: 29,
        ability: Abilities.EARTH_EATER.id,
        moves: [
          Moves.IRON_TAIL.id,
          Moves.HEADBUTT.id,
          Moves.WRAP.id,
          Moves.SANDSTORM.id,
        ],
      },
    ],
  }),
  PENNY: boss("PENNY", {
    name: "Penny",
    type: BossType.RIVAL,
    location: Locations.MESAGOZA.id,
    team: [
      {
        pokemon: Pokemons.UMBREON.id,
        level: 62,
        ability: Abilities.SYNCHRONIZE.id,
        moves: [
          Moves.DARK_PULSE.id,
          Moves.QUICK_ATTACK.id,
          Moves.BABY_DOLL_EYES.id,
          Moves.PSYCHIC.id,
        ],
      },
      {
        pokemon: Pokemons.VAPOREON.id,
        level: 62,
        ability: Abilities.WATER_ABSORB.id,
        moves: [
          Moves.HYDRO_PUMP.id,
          Moves.QUICK_ATTACK.id,
          Moves.BABY_DOLL_EYES.id,
          Moves.AURORA_BEAM.id,
        ],
      },
      {
        pokemon: Pokemons.JOLTEON.id,
        level: 62,
        ability: Abilities.QUICK_FEET.id,
        moves: [
          Moves.THUNDER.id,
          Moves.QUICK_ATTACK.id,
          Moves.BABY_DOLL_EYES.id,
          Moves.PIN_MISSILE.id,
        ],
      },
      {
        pokemon: Pokemons.FLAREON.id,
        level: 62,
        ability: Abilities.FLASH_FIRE.id,
        moves: [
          Moves.FLARE_BLITZ.id,
          Moves.QUICK_ATTACK.id,
          Moves.BABY_DOLL_EYES.id,
          Moves.FIRE_SPIN.id,
        ],
      },
      {
        pokemon: Pokemons.LEAFEON.id,
        level: 62,
        ability: Abilities.LEAF_GUARD.id,
        moves: [
          Moves.LEAF_BLADE.id,
          Moves.QUICK_ATTACK.id,
          Moves.BABY_DOLL_EYES.id,
          Moves.X_SCISSOR.id,
        ],
      },
      {
        pokemon: Pokemons.SYLVEON.id,
        level: 63,
        ability: Abilities.CUTE_CHARM.id,
        moves: [
          Moves.MOONBLAST.id,
          Moves.QUICK_ATTACK.id,
          Moves.BABY_DOLL_EYES.id,
          Moves.SHADOW_BALL.id,
        ],
      },
    ],
  }),
  POPPY: boss("POPPY", {
    name: "Poppy",
    type: BossType.ELITE_FOUR,
    location: Locations.ELITE_FOUR.id,
    team: [
      {
        pokemon: Pokemons.COPPERAJAH.id,
        level: 58,
        ability: Abilities.SHEER_FORCE.id,
        moves: [
          Moves.HIGH_HORSEPOWER.id,
          Moves.PLAY_ROUGH.id,
          Moves.HEAVY_SLAM.id,
          Moves.STEALTH_ROCK.id,
        ],
      },
      {
        pokemon: Pokemons.MAGNEZONE.id,
        level: 58,
        ability: Abilities.STURDY.id,
        moves: [
          Moves.DISCHARGE.id,
          Moves.FLASH_CANNON.id,
          Moves.LIGHT_SCREEN.id,
          Moves.TRI_ATTACK.id,
        ],
      },
      {
        pokemon: Pokemons.BRONZONG.id,
        level: 58,
        ability: Abilities.LEVITATE.id,
        moves: [
          Moves.IRON_HEAD.id,
          Moves.ZEN_HEADBUTT.id,
          Moves.ROCK_BLAST.id,
          Moves.EARTHQUAKE.id,
        ],
      },
      {
        pokemon: Pokemons.CORVIKNIGHT.id,
        level: 58,
        ability: Abilities.PRESSURE.id,
        moves: [
          Moves.BRAVE_BIRD.id,
          Moves.IRON_HEAD.id,
          Moves.BODY_PRESS.id,
          Moves.IRON_DEFENSE.id,
        ],
      },
      {
        pokemon: Pokemons.TINKATON.id,
        level: 58,
        ability: Abilities.MOLD_BREAKER.id,
        moves: [
          Moves.PLAY_ROUGH.id,
          Moves.GIGATON_HAMMER.id,
          Moves.BRICK_BREAK.id,
          Moves.STONE_EDGE.id,
        ],
      },
    ],
  }),
  RIKA: boss("RIKA", {
    name: "Rika",
    type: BossType.ELITE_FOUR,
    location: Locations.ELITE_FOUR.id,
    team: [
      {
        pokemon: Pokemons.WHISCASH.id,
        level: 57,
        ability: Abilities.OBLIVIOUS.id,
        moves: [
          Moves.MUDDY_WATER.id,
          Moves.EARTH_POWER.id,
          Moves.BLIZZARD.id,
          Moves.FUTURE_SIGHT.id,
        ],
      },
      {
        pokemon: Pokemons.CAMERUPT.id,
        level: 57,
        ability: Abilities.MAGMA_ARMOR.id,
        moves: [
          Moves.EARTH_POWER.id,
          Moves.FIRE_BLAST.id,
          Moves.FLASH_CANNON.id,
          Moves.YAWN.id,
        ],
      },
      {
        pokemon: Pokemons.DONPHAN.id,
        level: 57,
        ability: Abilities.STURDY.id,
        moves: [
          Moves.EARTHQUAKE.id,
          Moves.STONE_EDGE.id,
          Moves.IRON_HEAD.id,
          Moves.POISON_JAB.id,
        ],
      },
      {
        pokemon: Pokemons.DUGTRIO.id,
        level: 57,
        ability: Abilities.SAND_VEIL.id,
        moves: [
          Moves.EARTHQUAKE.id,
          Moves.ROCK_SLIDE.id,
          Moves.SUCKER_PUNCH.id,
          Moves.SANDSTORM.id,
        ],
      },
      {
        pokemon: Pokemons.CLODSIRE.id,
        level: 58,
        ability: Abilities.WATER_ABSORB.id,
        moves: [
          Moves.EARTHQUAKE.id,
          Moves.LIQUIDATION.id,
          Moves.TOXIC.id,
          Moves.PROTECT.id,
        ],
      },
    ],
  }),
  RYME: boss("RYME", {
    name: "Ryme",
    type: BossType.GYM,
    location: Locations.MONTENEVERA_CITY.id,
    team: [
      {
        pokemon: Pokemons.BANETTE.id,
        level: 41,
        ability: Abilities.INSOMNIA.id,
        moves: [
          Moves.ICY_WIND.id,
          Moves.SUCKER_PUNCH.id,
          Moves.SHADOW_SNEAK.id,
        ],
      },
      {
        pokemon: Pokemons.MIMIKYU.id,
        level: 41,
        ability: Abilities.DISGUISE.id,
        moves: [Moves.LIGHT_SCREEN.id, Moves.SHADOW_SNEAK.id, Moves.SLASH.id],
      },
      {
        pokemon: Pokemons.HOUNDSTONE.id,
        level: 41,
        ability: Abilities.SAND_RUSH.id,
        moves: [Moves.PLAY_ROUGH.id, Moves.CRUNCH.id, Moves.PHANTOM_FORCE.id],
      },
      {
        pokemon: Pokemons.TOXTRICITY.id,
        level: 42,
        ability: Abilities.PUNK_ROCK.id,
        moves: [Moves.DISCHARGE.id, Moves.HEX.id, Moves.HYPER_VOICE.id],
      },
    ],
  }),
  SADA_1: boss("SADA_1", {
    name: "Sada 1",
    type: BossType.RIVAL,
    location: Locations.AREA_ZERO.id,
    team: [
      {
        pokemon: Pokemons.SLITHER_WING.id,
        level: 66,
        ability: Abilities.PROTOSYNTHESIS.id,
        moves: [
          Moves.LUNGE.id,
          Moves.LEECH_LIFE.id,
          Moves.LOW_SWEEP.id,
          Moves.ZEN_HEADBUTT.id,
        ],
      },
      {
        pokemon: Pokemons.SCREAM_TAIL.id,
        level: 66,
        ability: Abilities.PROTOSYNTHESIS.id,
        moves: [
          Moves.PLAY_ROUGH.id,
          Moves.DRAIN_PUNCH.id,
          Moves.ICE_PUNCH.id,
          Moves.ZEN_HEADBUTT.id,
        ],
      },
      {
        pokemon: Pokemons.BRUTE_BONNET.id,
        level: 66,
        ability: Abilities.PROTOSYNTHESIS.id,
        moves: [
          Moves.EARTH_POWER.id,
          Moves.GIGA_DRAIN.id,
          Moves.PAYBACK.id,
          Moves.SUCKER_PUNCH.id,
        ],
      },
      {
        pokemon: Pokemons.FLUTTER_MANE.id,
        level: 66,
        ability: Abilities.PROTOSYNTHESIS.id,
        moves: [
          Moves.POWER_GEM.id,
          Moves.MYSTICAL_FIRE.id,
          Moves.SHADOW_BALL.id,
          Moves.THUNDERBOLT.id,
        ],
      },
      {
        pokemon: Pokemons.SANDY_SHOCKS.id,
        level: 66,
        ability: Abilities.PROTOSYNTHESIS.id,
        moves: [
          Moves.DISCHARGE.id,
          Moves.EARTH_POWER.id,
          Moves.FLASH_CANNON.id,
          Moves.POWER_GEM.id,
        ],
      },
      {
        pokemon: Pokemons.ROARING_MOON.id,
        level: 67,
        ability: Abilities.PROTOSYNTHESIS.id,
        moves: [
          Moves.DRAGON_CLAW.id,
          Moves.NIGHT_SLASH.id,
          Moves.STONE_EDGE.id,
          Moves.EARTHQUAKE.id,
        ],
      },
    ],
  }),
  SADA_2: boss("SADA_2", {
    name: "Sada 2",
    type: BossType.RIVAL,
    location: Locations.AREA_ZERO.id,
    team: [
      {
        pokemon: Pokemons.KORAIDON.id,
        level: 72,
        ability: Abilities.ORICHALCUM_PULSE.id,
        moves: [
          Moves.GIGA_IMPACT.id,
          Moves.BULK_UP.id,
          Moves.TAUNT.id,
          Moves.FLAMETHROWER.id,
        ],
      },
    ],
  }),
  TATSUGIRI: boss("TATSUGIRI", {
    name: "Tatsugiri",
    type: BossType.TITAN,
    location: Locations.CASSEROYA_LAKE.id,
    team: [
      {
        pokemon: Pokemons.TATSUGIRI.id,
        level: 57,
        ability: Abilities.COMMANDER.id,
        moves: [
          Moves.MUDDY_WATER.id,
          Moves.ICY_WIND.id,
          Moves.TAUNT.id,
          Moves.DRAGON_PULSE.id,
        ],
      },
    ],
  }),
  TULIP: boss("TULIP", {
    name: "Tulip",
    type: BossType.GYM,
    location: Locations.ALFORNADA_CITY.id,
    team: [
      {
        pokemon: Pokemons.FARIGIRAF.id,
        level: 44,
        ability: Abilities.ARMOR_TAIL.id,
        moves: [Moves.CRUNCH.id, Moves.ZEN_HEADBUTT.id, Moves.REFLECT.id],
      },
      {
        pokemon: Pokemons.GARDEVOIR.id,
        level: 44,
        ability: Abilities.SYNCHRONIZE.id,
        moves: [
          Moves.PSYCHIC.id,
          Moves.DAZZLING_GLEAM.id,
          Moves.ENERGY_BALL.id,
        ],
      },
      {
        pokemon: Pokemons.ESPATHRA.id,
        level: 44,
        ability: Abilities.OPPORTUNIST.id,
        moves: [Moves.PSYCHIC.id, Moves.QUICK_ATTACK.id, Moves.SHADOW_BALL.id],
      },
      {
        pokemon: Pokemons.FLORGES.id,
        level: 45,
        ability: Abilities.FLOWER_VEIL.id,
        moves: [Moves.PSYCHIC.id, Moves.MOONBLAST.id, Moves.PETAL_BLIZZARD.id],
      },
    ],
  }),
  TURO_1: boss("TURO_1", {
    name: "Turo 1",
    type: BossType.RIVAL,
    location: Locations.AREA_ZERO.id,
    team: [
      {
        pokemon: Pokemons.IRON_MOTH.id,
        level: 66,
        ability: Abilities.QUARK_DRIVE.id,
        moves: [
          Moves.SLUDGE_WAVE.id,
          Moves.FIERY_DANCE.id,
          Moves.DISCHARGE.id,
          Moves.AIR_SLASH.id,
        ],
      },
      {
        pokemon: Pokemons.IRON_BUNDLE.id,
        level: 66,
        ability: Abilities.QUARK_DRIVE.id,
        moves: [
          Moves.DRILL_PECK.id,
          Moves.WATER_PULSE.id,
          Moves.FREEZE_DRY.id,
          Moves.SNOWSCAPE.id,
        ],
      },
      {
        pokemon: Pokemons.IRON_HANDS.id,
        level: 66,
        ability: Abilities.QUARK_DRIVE.id,
        moves: [
          Moves.THUNDER_PUNCH.id,
          Moves.DRAIN_PUNCH.id,
          Moves.IRON_HEAD.id,
          Moves.FAKE_OUT.id,
        ],
      },
      {
        pokemon: Pokemons.IRON_JUGULIS.id,
        level: 66,
        ability: Abilities.QUARK_DRIVE.id,
        moves: [
          Moves.AIR_SLASH.id,
          Moves.DARK_PULSE.id,
          Moves.FLAMETHROWER.id,
          Moves.FLASH_CANNON.id,
        ],
      },
      {
        pokemon: Pokemons.IRON_THORNS.id,
        level: 66,
        ability: Abilities.QUARK_DRIVE.id,
        moves: [
          Moves.THUNDER_PUNCH.id,
          Moves.BRICK_BREAK.id,
          Moves.STONE_EDGE.id,
          Moves.EARTHQUAKE.id,
        ],
      },
      {
        pokemon: Pokemons.IRON_MOTH.id,
        level: 67,
        ability: Abilities.QUARK_DRIVE.id,
        moves: [
          Moves.PSYCHO_CUT.id,
          Moves.BRICK_BREAK.id,
          Moves.SPIRIT_BREAK.id,
          Moves.POISON_JAB.id,
        ],
      },
    ],
  }),
  TURO_2: boss("TURO_2", {
    name: "Turo 2",
    type: BossType.RIVAL,
    location: Locations.AREA_ZERO.id,
    team: [
      {
        pokemon: Pokemons.MIRAIDON.id,
        level: 72,
        ability: Abilities.HADRON_ENGINE.id,
        moves: [
          Moves.HYPER_BEAM.id,
          Moves.CHARGE.id,
          Moves.TAUNT.id,
          Moves.POWER_GEM.id,
        ],
      },
    ],
  }),
});
