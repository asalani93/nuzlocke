import { BossTypes } from "@/src/types/boss"
import { ConditionType } from "@/src/types/condition"

import { createBoss, createBossTable } from "../utils"

import { Ability } from "./abilities"
import { Location } from "./locations"
import { Move } from "./moves"
import { Pokemon } from "./pokemon"
import { Route } from "./routes"

export const Boss = createBossTable({
  ARVEN: createBoss("ARVEN", {
    name: "Arven",
    type: BossTypes.RIVAL,
    locationId: Location.POCO_PATH_LIGHTHOUSE.id,
    team: [
      {
        pokemonId: Pokemon.GREEDENT.id,
        level: 58,
        abilityId: Ability.CHEEK_POUCH.id,
        moveIds: [
          Move.BULLET_SEED.id,
          Move.BODY_SLAM.id,
          Move.PSYCHIC_FANGS.id,
          Move.EARTHQUAKE.id,
        ],
      },
      {
        pokemonId: Pokemon.CLOYSTER.id,
        level: 59,
        abilityId: Ability.SKILL_LINK.id,
        moveIds: [
          Move.ROCK_BLAST.id,
          Move.ICICLE_SPEAR.id,
          Move.LIQUIDATION.id,
          Move.LIGHT_SCREEN.id,
        ],
      },
      {
        pokemonId: Pokemon.SCOVILLAIN.id,
        level: 60,
        abilityId: Ability.CHLOROPHYLL.id,
        moveIds: [Move.FIRE_BLAST.id, Move.ENERGY_BALL.id, Move.ZEN_HEADBUTT.id, Move.CRUNCH.id],
      },
      {
        pokemonId: Pokemon.TOEDSCRUEL.id,
        level: 61,
        abilityId: Ability.MYCELIUM_MIGHT.id,
        moveIds: [Move.POWER_WHIP.id, Move.EARTH_POWER.id, Move.SPORE.id, Move.SLUDGE_BOMB.id],
      },
      {
        pokemonId: Pokemon.GARGANACL.id,
        level: 62,
        abilityId: Ability.PURIFYING_SALT.id,
        moveIds: [Move.STONE_EDGE.id, Move.EARTHQUAKE.id, Move.BODY_PRESS.id, Move.STEALTH_ROCK.id],
      },
      {
        pokemonId: Pokemon.MABOSSTIFF.id,
        level: 63,
        abilityId: Ability.INTIMIDATE.id,
        moveIds: [Move.CRUNCH.id, Move.PSYCHIC_FANGS.id, Move.FIRE_FANG.id, Move.PLAY_ROUGH.id],
      },
    ],
  }),
  ATTICUS: createBoss("ATTICUS", {
    name: "Atticus",
    type: BossTypes.TEAM_STAR,
    locationId: Location.TAGTREE_THICKET.id,
    team: [
      {
        pokemonId: Pokemon.SKUNTANK.id,
        level: 32,
        abilityId: Ability.STENCH.id,
        moveIds: [Move.SUCKER_PUNCH.id, Move.TOXIC.id, Move.VENOSHOCK.id],
      },
      {
        pokemonId: Pokemon.MUK.id,
        level: 32,
        abilityId: Ability.STENCH.id,
        moveIds: [Move.SLUDGE_WAVE.id, Move.MUD_SLAP.id],
      },
      {
        pokemonId: Pokemon.REVAVROOM.id,
        level: 33,
        abilityId: Ability.OVERCOAT.id,
        moveIds: [Move.IRON_HEAD.id, Move.SLUDGE.id, Move.ASSURANCE.id, Move.BULLDOZE.id],
      },
      {
        pokemonId: Pokemon.NAVI_STARMOBILE.id,
        level: 32,
        abilityId: Ability.TOXIC_DEBRIS.id,
        moveIds: [Move.SPIN_OUT.id, Move.NOXIOUS_TORQUE.id, Move.FLAME_CHARGE.id, Move.SMOG.id],
      },
    ],
  }),
  BOMBIRDIER: createBoss("BOMBIRDIER", {
    name: "Bombirdier",
    type: BossTypes.TITAN,
    locationId: Location.WEST_PROVINCE_A1.id,
    team: [
      {
        pokemonId: Pokemon.BOMBIRDIER.id,
        level: 20,
        abilityId: Ability.ROCKY_PAYLOAD.id,
        moveIds: [Move.ROCK_THROW.id, Move.WING_ATTACK.id, Move.PLUCK.id, Move.TORMENT.id],
      },
    ],
  }),
  BRASSIUS: createBoss("BRASSIUS", {
    name: "Brassius",
    type: BossTypes.GYM,
    locationId: Location.ARTAZON_CITY.id,
    team: [
      {
        pokemonId: Pokemon.PETILIL.id,
        level: 16,
        abilityId: Ability.OWN_TEMPO.id,
        moveIds: [Move.SLEEP_POWDER.id, Move.MEGA_DRAIN.id],
      },
      {
        pokemonId: Pokemon.SMOLIV.id,
        level: 16,
        abilityId: Ability.EARLY_BIRD.id,
        moveIds: [Move.TACKLE.id, Move.RAZOR_LEAF.id],
      },
      {
        pokemonId: Pokemon.SUDOWOODO.id,
        level: 17,
        abilityId: Ability.STURDY.id,
        moveIds: [Move.TRAILBLAZE.id, Move.ROCK_THROW.id],
      },
    ],
  }),
  CLIVE: createBoss("CLIVE", {
    name: "Clive",
    type: BossTypes.RIVAL,
    locationId: Location.MESAGOZA.id,
    team: [
      {
        pokemonId: Pokemon.ORANGURU.id,
        level: 60,
        abilityId: Ability.INNER_FOCUS.id,
        moveIds: [Move.YAWN.id, Move.DREAM_EATER.id, Move.REFLECT.id, Move.FOUL_PLAY.id],
      },
      {
        pokemonId: Pokemon.ABOMASNOW.id,
        level: 60,
        abilityId: Ability.SNOW_WARNING.id,
        moveIds: [Move.AURORA_VEIL.id, Move.BLIZZARD.id, Move.WOOD_HAMMER.id, Move.ICE_SHARD.id],
      },
      {
        pokemonId: Pokemon.POLTEAGEIST.id,
        level: 60,
        abilityId: Ability.WEAK_ARMOR.id,
        moveIds: [
          Move.SHELL_SMASH.id,
          Move.SHADOW_BALL.id,
          Move.SUCKER_PUNCH.id,
          Move.WILL_O_WISP.id,
        ],
      },
      {
        pokemonId: Pokemon.HOUNDOOM.id,
        level: 60,
        abilityId: Ability.FLASH_FIRE.id,
        moveIds: [
          Move.DARK_PULSE.id,
          Move.FIRE_BLAST.id,
          Move.SLUDGE_BOMB.id,
          Move.THUNDER_FANG.id,
        ],
      },
      {
        pokemonId: Pokemon.AMOONGUSS.id,
        level: 60,
        abilityId: Ability.EFFECT_SPORE.id,
        moveIds: [Move.SPORE.id, Move.TOXIC.id, Move.GIGA_DRAIN.id, Move.HEX.id],
      },
      {
        pokemonId: Pokemon.QUAQUAVAL.id,
        level: 61,
        abilityId: Ability.TORRENT.id,
        moveIds: [Move.BRICK_BREAK.id, Move.AQUA_STEP.id, Move.AERIAL_ACE.id, Move.ICE_SPINNER.id],
      },
    ],
  }),
  ERI: createBoss("ERI", {
    name: "Eri",
    type: BossTypes.TEAM_STAR,
    locationId: Location.NORTH_PROVINCE_A2.id,
    team: [
      {
        pokemonId: Pokemon.TOXICROAK.id,
        level: 55,
        abilityId: Ability.ANTICIPATION.id,
        moveIds: [Move.POISON_JAB.id, Move.BRICK_BREAK.id, Move.SUCKER_PUNCH.id],
      },
      {
        pokemonId: Pokemon.PASSIMIAN.id,
        level: 55,
        abilityId: Ability.RECEIVER.id,
        moveIds: [Move.CLOSE_COMBAT.id, Move.ROCK_TOMB.id, Move.SEED_BOMB.id],
      },
      {
        pokemonId: Pokemon.LUCARIO.id,
        level: 55,
        abilityId: Ability.STEADFAST.id,
        moveIds: [Move.DRAGON_PULSE.id, Move.AURA_SPHERE.id, Move.DARK_PULSE.id],
      },
      {
        pokemonId: Pokemon.ANNIHILAPE.id,
        level: 56,
        abilityId: Ability.VITAL_SPIRIT.id,
        moveIds: [Move.RAGE_FIST.id, Move.CLOSE_COMBAT.id, Move.ICE_PUNCH.id, Move.FIRE_PUNCH.id],
      },
      {
        pokemonId: Pokemon.CAPH_STARMOBILE.id,
        level: 56,
        abilityId: Ability.STAMINA.id,
        moveIds: [
          Move.COMBAT_TORQUE.id,
          Move.SPIN_OUT.id,
          Move.SHIFT_GEAR.id,
          Move.HIGH_HORSEPOWER.id,
        ],
      },
    ],
  }),
  GEETA: createBoss("GEETA", {
    name: "Geeta",
    type: BossTypes.ELITE_FOUR,
    locationId: Location.ELITE_FOUR.id,
    team: [
      {
        pokemonId: Pokemon.ESPATHRA.id,
        level: 61,
        abilityId: Ability.OPPORTUNIST.id,
        moveIds: [
          Move.LUMINA_CRASH.id,
          Move.DAZZLING_GLEAM.id,
          Move.QUICK_ATTACK.id,
          Move.REFLECT.id,
        ],
      },
      {
        pokemonId: Pokemon.GOGOAT.id,
        level: 61,
        abilityId: Ability.SAP_SIPPER.id,
        moveIds: [Move.HORN_LEECH.id, Move.ZEN_HEADBUTT.id, Move.PLAY_ROUGH.id, Move.BULK_UP.id],
      },
      {
        pokemonId: Pokemon.VELUZA.id,
        level: 61,
        abilityId: Ability.MOLD_BREAKER.id,
        moveIds: [Move.AQUA_JET.id, Move.LIQUIDATION.id, Move.PSYCHO_CUT.id, Move.ICE_FANG.id],
      },
      {
        pokemonId: Pokemon.AVALUGG.id,
        level: 61,
        abilityId: Ability.OWN_TEMPO.id,
        moveIds: [Move.AVALANCHE.id, Move.CRUNCH.id, Move.EARTHQUAKE.id, Move.BODY_PRESS.id],
      },
      {
        pokemonId: Pokemon.KINGAMBIT.id,
        level: 61,
        abilityId: Ability.SUPREME_OVERLORD.id,
        moveIds: [
          Move.IRON_HEAD.id,
          Move.KOWTOW_CLEAVE.id,
          Move.ZEN_HEADBUTT.id,
          Move.STONE_EDGE.id,
        ],
      },
      {
        pokemonId: Pokemon.GLIMMORA.id,
        level: 62,
        abilityId: Ability.TOXIC_DEBRIS.id,
        moveIds: [
          Move.TERA_BLAST.id,
          Move.SLUDGE_WAVE.id,
          Move.EARTH_POWER.id,
          Move.DAZZLING_GLEAM.id,
        ],
      },
    ],
  }),
  GIACOMO: createBoss("GIACOMO", {
    name: "Giacomo",
    type: BossTypes.TEAM_STAR,
    locationId: Location.WEST_PROVINCE_A1.id,
    team: [
      {
        pokemonId: Pokemon.PAWNIARD.id,
        level: 21,
        abilityId: Ability.DEFIANT.id,
        moveIds: [Move.METAL_CLAW.id, Move.FURY_CUTTER.id, Move.AERIAL_ACE.id],
      },
      {
        pokemonId: Pokemon.SEGIN_STARMOBILE.id,
        level: 20,
        abilityId: Ability.INTIMIDATE.id,
        moveIds: [Move.WICKED_TORQUE.id, Move.SNARL.id, Move.METAL_SOUND.id, Move.SWIFT.id],
      },
    ],
  }),
  GREAT_TUSK: createBoss("GREAT_TUSK", {
    name: "Great Tusk",
    type: BossTypes.TITAN,
    locationId: Location.ASADO_DESERT.id,
    team: [
      {
        pokemonId: Pokemon.GREAT_TUSK.id,
        level: 45,
        abilityId: Ability.PROTOSYNTHESIS.id,
        moveIds: [
          Move.RAPID_SPIN.id,
          Move.BRICK_BREAK.id,
          Move.KNOCK_OFF.id,
          Move.STOMPING_TANTRUM.id,
        ],
      },
    ],
  }),
  GRUSHA: createBoss("GRUSHA", {
    name: "Grusha",
    type: BossTypes.GYM,
    locationId: Location.GLASEADO_CITY.id,
    team: [
      {
        pokemonId: Pokemon.FROSMOTH.id,
        level: 47,
        abilityId: Ability.SHIELD_DUST.id,
        moveIds: [Move.BLIZZARD.id, Move.BUG_BUZZ.id, Move.TAILWIND.id],
      },
      {
        pokemonId: Pokemon.BEARTIC.id,
        level: 47,
        abilityId: Ability.SNOW_CLOAK.id,
        moveIds: [Move.AQUA_JET.id, Move.ICICLE_CRASH.id, Move.EARTHQUAKE.id],
      },
      {
        pokemonId: Pokemon.CETITAN.id,
        level: 47,
        abilityId: Ability.THICK_FAT.id,
        moveIds: [Move.ICE_SPINNER.id, Move.LIQUIDATION.id, Move.ICE_SHARD.id],
      },
      {
        pokemonId: Pokemon.ALTARIA.id,
        level: 48,
        abilityId: Ability.NATURAL_CURE.id,
        moveIds: [Move.ICE_BEAM.id, Move.DRAGON_PULSE.id, Move.MOONBLAST.id, Move.HURRICANE.id],
      },
    ],
  }),
  HASSEL: createBoss("HASSEL", {
    name: "Hassel",
    type: BossTypes.ELITE_FOUR,
    locationId: Location.ELITE_FOUR.id,
    team: [
      {
        pokemonId: Pokemon.NOIVERN.id,
        level: 60,
        abilityId: Ability.INFILTRATOR.id,
        moveIds: [Move.AIR_SLASH.id, Move.DRAGON_PULSE.id, Move.SUPER_FANG.id, Move.HYPER_VOICE.id],
      },
      {
        pokemonId: Pokemon.HAXORUS.id,
        level: 60,
        abilityId: Ability.MOLD_BREAKER.id,
        moveIds: [Move.DRAGON_CLAW.id, Move.CRUNCH.id, Move.IRON_HEAD.id, Move.ROCK_TOMB.id],
      },
      {
        pokemonId: Pokemon.DRAGALGE.id,
        level: 60,
        abilityId: Ability.POISON_POINT.id,
        moveIds: [
          Move.SLUDGE_BOMB.id,
          Move.DRAGON_PULSE.id,
          Move.HYDRO_PUMP.id,
          Move.THUNDERBOLT.id,
        ],
      },
      {
        pokemonId: Pokemon.FLAPPLE.id,
        level: 60,
        abilityId: Ability.RIPEN.id,
        moveIds: [Move.DRAGON_RUSH.id, Move.SEED_BOMB.id, Move.AERIAL_ACE.id, Move.LEECH_SEED.id],
      },
      {
        pokemonId: Pokemon.BAXCALIBUR.id,
        level: 61,
        abilityId: Ability.THERMAL_EXCHANGE.id,
        moveIds: [Move.ICICLE_CRASH.id, Move.BRICK_BREAK.id, Move.GLAIVE_RUSH.id],
      },
    ],
  }),
  IONO: createBoss("IONO", {
    name: "Iono",
    type: BossTypes.GYM,
    locationId: Location.LEVINCIA_CITY.id,
    team: [
      {
        pokemonId: Pokemon.WATTREL.id,
        level: 23,
        abilityId: Ability.WIND_POWER.id,
        moveIds: [Move.PLUCK.id, Move.QUICK_ATTACK.id, Move.SPARK.id],
      },
      {
        pokemonId: Pokemon.BELLIBOLT.id,
        level: 23,
        abilityId: Ability.ELECTROMORPHOSIS.id,
        moveIds: [Move.WATER_GUN.id, Move.SPARK.id],
      },
      {
        pokemonId: Pokemon.LUXIO.id,
        level: 23,
        abilityId: Ability.INTIMIDATE.id,
        moveIds: [Move.SPARK.id, Move.BITE.id],
      },
      {
        pokemonId: Pokemon.MISMAGIUS.id,
        level: 24,
        abilityId: Ability.LEVITATE.id,
        moveIds: [Move.CHARGE_BEAM.id, Move.HEX.id, Move.CONFUSE_RAY.id],
      },
    ],
  }),
  IRON_TREADS: createBoss("IRON_TREADS", {
    name: "Iron Treads",
    type: BossTypes.TITAN,
    locationId: Location.ASADO_DESERT.id,
    team: [
      {
        pokemonId: Pokemon.IRON_TREADS.id,
        level: 45,
        abilityId: Ability.QUARK_DRIVE.id,
        moveIds: [
          Move.RAPID_SPIN.id,
          Move.IRON_HEAD.id,
          Move.KNOCK_OFF.id,
          Move.STOMPING_TANTRUM.id,
        ],
      },
    ],
  }),
  KATY: createBoss("KATY", {
    name: "Katy",
    type: BossTypes.GYM,
    locationId: Location.CORTONDO_CITY.id,
    team: [
      {
        pokemonId: Pokemon.NYMBLE.id,
        level: 14,
        abilityId: Ability.SWARM.id,
        moveIds: [Move.STRUGGLE_BUG.id, Move.DOUBLE_KICK.id],
      },
      {
        pokemonId: Pokemon.TAROUNTULA.id,
        level: 14,
        abilityId: Ability.INSOMNIA.id,
        moveIds: [Move.BUG_BITE.id, Move.ASSURANCE.id],
      },
      {
        pokemonId: Pokemon.TEDDIURSA.id,
        level: 15,
        abilityId: Ability.PICKUP.id,
        moveIds: [Move.FURY_CUTTER.id, Move.FURY_SWIPES.id],
      },
    ],
  }),
  KLAWF: createBoss("KLAWF", {
    name: "Klawf",
    type: BossTypes.TITAN,
    locationId: Location.SOUTH_PROVINCE_A3.id,
    team: [
      {
        pokemonId: Pokemon.KLAWF.id,
        level: 16,
        abilityId: Ability.ANGER_SHELL.id,
        moveIds: [Move.VISE_GRIP.id, Move.ROCK_SMASH.id, Move.BLOCK.id, Move.ROCK_TOMB.id],
      },
    ],
  }),
  KOFU: createBoss("KOFU", {
    name: "Kofu",
    type: BossTypes.GYM,
    locationId: Location.CASCARRAFA_CITY.id,
    team: [
      {
        pokemonId: Pokemon.VELUZA.id,
        level: 29,
        abilityId: Ability.MOLD_BREAKER.id,
        moveIds: [Move.SLASH.id, Move.PLUCK.id, Move.AQUA_CUTTER.id],
      },
      {
        pokemonId: Pokemon.WUGTRIO.id,
        level: 29,
        abilityId: Ability.GOOEY.id,
        moveIds: [Move.MUD_SLAP.id, Move.WATER_PULSE.id, Move.HEADBUTT.id],
      },
      {
        pokemonId: Pokemon.CRABOMINABLE.id,
        level: 30,
        abilityId: Ability.IRON_FIST.id,
        moveIds: [Move.CRABHAMMER.id, Move.ROCK_SMASH.id, Move.SLAM.id],
      },
    ],
  }),
  LARRY_1: createBoss("LARRY_1", {
    name: "Larry",
    type: BossTypes.GYM,
    locationId: Location.MEDALI_CITY.id,
    team: [
      {
        pokemonId: Pokemon.KOMALA.id,
        level: 35,
        abilityId: Ability.COMATOSE.id,
        moveIds: [Move.YAWN.id, Move.SUCKER_PUNCH.id, Move.SLAM.id],
      },
      {
        pokemonId: Pokemon.DUDUNSPARCE.id,
        level: 35,
        abilityId: Ability.SERENE_GRACE.id,
        moveIds: [Move.HYPER_DRILL.id, Move.DRILL_RUN.id, Move.GLARE.id],
      },
      {
        pokemonId: Pokemon.STARAPTOR.id,
        level: 36,
        abilityId: Ability.INTIMIDATE.id,
        moveIds: [Move.FACADE.id, Move.AERIAL_ACE.id],
      },
    ],
  }),
  LARRY_2: createBoss("LARRY_2", {
    name: "Larry",
    type: BossTypes.ELITE_FOUR,
    locationId: Location.ELITE_FOUR.id,
    team: [
      {
        pokemonId: Pokemon.TROPIUS.id,
        level: 59,
        abilityId: Ability.CHLOROPHYLL.id,
        moveIds: [Move.AIR_SLASH.id, Move.SOLAR_BEAM.id, Move.DRAGON_PULSE.id, Move.SUNNY_DAY.id],
      },
      {
        pokemonId: Pokemon.ORICORIO.id,
        level: 59,
        abilityId: Ability.DANCER.id,
        moveIds: [
          Move.REVELATION_DANCE.id,
          Move.AIR_SLASH.id,
          Move.TEETER_DANCE.id,
          Move.ICY_WIND.id,
        ],
      },
      {
        pokemonId: Pokemon.ALTARIA.id,
        level: 59,
        abilityId: Ability.NATURAL_CURE.id,
        moveIds: [Move.MOONBLAST.id, Move.FLAMETHROWER.id, Move.ICE_BEAM.id, Move.DRAGON_PULSE.id],
      },
      {
        pokemonId: Pokemon.STARAPTOR.id,
        level: 59,
        abilityId: Ability.INTIMIDATE.id,
        moveIds: [Move.FACADE.id, Move.BRAVE_BIRD.id, Move.CLOSE_COMBAT.id, Move.THIEF.id],
      },
      {
        pokemonId: Pokemon.FLAMIGO.id,
        level: 60,
        abilityId: Ability.SCRAPPY.id,
        moveIds: [
          Move.BRAVE_BIRD.id,
          Move.CLOSE_COMBAT.id,
          Move.THROAT_CHOP.id,
          Move.LIQUIDATION.id,
        ],
      },
    ],
  }),
  MELA: createBoss("MELA", {
    name: "Mela",
    type: BossTypes.TEAM_STAR,
    locationId: Location.EAST_PROVINCE_A1.id,
    team: [
      {
        pokemonId: Pokemon.TORKOAL.id,
        level: 27,
        abilityId: Ability.DROUGHT.id,
        moveIds: [Move.FLAME_WHEEL.id, Move.CLEAR_SMOG.id],
      },
      {
        pokemonId: Pokemon.SCHEDAR_STARMOBILE.id,
        level: 26,
        abilityId: Ability.SPEED_BOOST.id,
        moveIds: [Move.OVERHEAT.id, Move.BLAZING_TORQUE.id, Move.SCREECH.id, Move.SWIFT.id],
      },
    ],
  }),
  NEMONA_1: createBoss("NEMONA_1", {
    name: "Nemona",
    type: BossTypes.RIVAL,
    locationId: Location.POCO_PATH.id,
    team: [
      {
        pokemonId: Pokemon.QUAXLY.id,
        level: 5,
        abilityId: Ability.TORRENT.id,
        moveIds: [Move.POUND.id, Move.GROWL.id, Move.WATER_GUN.id],
      },
    ],
    teamVariants: [
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.SPRIGATITO.id,
        },
        team: [
          {
            pokemonId: Pokemon.QUAXLY.id,
            level: 5,
            abilityId: Ability.TORRENT.id,
            moveIds: [Move.POUND.id, Move.GROWL.id, Move.WATER_GUN.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.FUECOCO.id,
        },
        team: [
          {
            pokemonId: Pokemon.SPRIGATITO.id,
            level: 5,
            abilityId: Ability.OVERGROW.id,
            moveIds: [Move.SCRATCH.id, Move.TAIL_WHIP.id, Move.LEAFAGE.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.QUAXLY.id,
        },
        team: [
          {
            pokemonId: Pokemon.FUECOCO.id,
            level: 5,
            abilityId: Ability.BLAZE.id,
            moveIds: [Move.TACKLE.id, Move.LEER.id, Move.EMBER.id],
          },
        ],
      },
    ],
  }),
  NEMONA_2: createBoss("NEMONA_2", {
    name: "Nemona",
    type: BossTypes.RIVAL,
    locationId: Location.MESAGOZA.id,
    team: [
      {
        pokemonId: Pokemon.QUAXLY.id,
        level: 8,
        abilityId: Ability.TORRENT.id,
        moveIds: [Move.POUND.id, Move.GROWL.id, Move.WATER_GUN.id, Move.WORK_UP.id],
      },
      {
        pokemonId: Pokemon.PAWMI.id,
        level: 9,
        abilityId: Ability.STATIC.id,
        moveIds: [Move.THUNDER_SHOCK.id],
      },
    ],
    teamVariants: [
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.SPRIGATITO.id,
        },
        team: [
          {
            pokemonId: Pokemon.QUAXLY.id,
            level: 8,
            abilityId: Ability.TORRENT.id,
            moveIds: [Move.POUND.id, Move.GROWL.id, Move.WATER_GUN.id, Move.WORK_UP.id],
          },
          {
            pokemonId: Pokemon.PAWMI.id,
            level: 9,
            abilityId: Ability.STATIC.id,
            moveIds: [Move.THUNDER_SHOCK.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.FUECOCO.id,
        },
        team: [
          {
            pokemonId: Pokemon.SPRIGATITO.id,
            level: 8,
            abilityId: Ability.OVERGROW.id,
            moveIds: [Move.SCRATCH.id, Move.TAIL_WHIP.id, Move.LEAFAGE.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.PAWMI.id,
            level: 9,
            abilityId: Ability.STATIC.id,
            moveIds: [Move.THUNDER_SHOCK.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.QUAXLY.id,
        },
        team: [
          {
            pokemonId: Pokemon.FUECOCO.id,
            level: 8,
            abilityId: Ability.BLAZE.id,
            moveIds: [Move.TACKLE.id, Move.LEER.id, Move.EMBER.id, Move.ROUND.id],
          },
          {
            pokemonId: Pokemon.PAWMI.id,
            level: 9,
            abilityId: Ability.STATIC.id,
            moveIds: [Move.THUNDER_SHOCK.id],
          },
        ],
      },
    ],
  }),
  NEMONA_3: createBoss("NEMONA_3", {
    name: "Nemona",
    type: BossTypes.RIVAL,
    locationId: Location.LEVINCIA_CITY.id,
    team: [
      {
        pokemonId: Pokemon.ROCKRUFF.id,
        level: 21,
        abilityId: Ability.VITAL_SPIRIT.id,
        moveIds: [Move.DOUBLE_TEAM.id, Move.ROCK_THROW.id, Move.HOWL.id, Move.BITE.id],
      },
      {
        pokemonId: Pokemon.PAWMI.id,
        level: 21,
        abilityId: Ability.STATIC.id,
        moveIds: [Move.CHARGE.id, Move.NUZZLE.id, Move.DIG.id, Move.BITE.id],
      },
      {
        pokemonId: Pokemon.QUAXWELL.id,
        level: 22,
        abilityId: Ability.TORRENT.id,
        moveIds: [Move.DOUBLE_HIT.id, Move.WATER_PULSE.id, Move.WING_ATTACK.id, Move.WORK_UP.id],
      },
    ],
    teamVariants: [
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.SPRIGATITO.id,
        },
        team: [
          {
            pokemonId: Pokemon.ROCKRUFF.id,
            level: 21,
            abilityId: Ability.VITAL_SPIRIT.id,
            moveIds: [Move.DOUBLE_TEAM.id, Move.ROCK_THROW.id, Move.HOWL.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.PAWMI.id,
            level: 21,
            abilityId: Ability.STATIC.id,
            moveIds: [Move.CHARGE.id, Move.NUZZLE.id, Move.DIG.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.QUAXWELL.id,
            level: 22,
            abilityId: Ability.TORRENT.id,
            moveIds: [
              Move.DOUBLE_HIT.id,
              Move.WATER_PULSE.id,
              Move.WING_ATTACK.id,
              Move.WORK_UP.id,
            ],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.FUECOCO.id,
        },
        team: [
          {
            pokemonId: Pokemon.ROCKRUFF.id,
            level: 21,
            abilityId: Ability.VITAL_SPIRIT.id,
            moveIds: [Move.DOUBLE_TEAM.id, Move.ROCK_THROW.id, Move.HOWL.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.PAWMI.id,
            level: 21,
            abilityId: Ability.STATIC.id,
            moveIds: [Move.CHARGE.id, Move.NUZZLE.id, Move.DIG.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.FLORAGATO.id,
            level: 22,
            abilityId: Ability.OVERGROW.id,
            moveIds: [Move.QUICK_ATTACK.id, Move.MAGICAL_LEAF.id, Move.HONE_CLAWS.id, Move.BITE.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.QUAXLY.id,
        },
        team: [
          {
            pokemonId: Pokemon.ROCKRUFF.id,
            level: 21,
            abilityId: Ability.VITAL_SPIRIT.id,
            moveIds: [Move.DOUBLE_TEAM.id, Move.ROCK_THROW.id, Move.HOWL.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.PAWMI.id,
            level: 21,
            abilityId: Ability.STATIC.id,
            moveIds: [Move.CHARGE.id, Move.NUZZLE.id, Move.DIG.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.CROCALOR.id,
            level: 22,
            abilityId: Ability.BLAZE.id,
            moveIds: [Move.INCINERATE.id, Move.YAWN.id, Move.BITE.id, Move.ROUND.id],
          },
        ],
      },
    ],
  }),
  NEMONA_4: createBoss("NEMONA_4", {
    name: "Nemona",
    type: BossTypes.RIVAL,
    locationId: Location.MEDALI_CITY.id,
    team: [
      {
        pokemonId: Pokemon.LYCANROC.id,
        level: 36,
        abilityId: Ability.SAND_RUSH.id,
        moveIds: [Move.QUICK_ATTACK.id, Move.ACCELEROCK.id, Move.BITE.id],
      },
      {
        pokemonId: Pokemon.GOOMY.id,
        level: 36,
        abilityId: Ability.SAP_SIPPER.id,
        moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
      },
      {
        pokemonId: Pokemon.PAWMO.id,
        level: 36,
        abilityId: Ability.VOLT_ABSORB.id,
        moveIds: [Move.ARM_THRUST.id, Move.SPARK.id, Move.THUNDER_WAVE.id, Move.QUICK_ATTACK.id],
      },
      {
        pokemonId: Pokemon.QUAQUAVAL.id,
        level: 37,
        abilityId: Ability.TORRENT.id,
        moveIds: [Move.AIR_SLASH.id, Move.AQUA_STEP.id, Move.AQUA_JET.id],
      },
    ],
    teamVariants: [
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.SPRIGATITO.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 36,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [Move.QUICK_ATTACK.id, Move.ACCELEROCK.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.GOOMY.id,
            level: 36,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
          },
          {
            pokemonId: Pokemon.PAWMO.id,
            level: 36,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.ARM_THRUST.id,
              Move.SPARK.id,
              Move.THUNDER_WAVE.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.QUAQUAVAL.id,
            level: 37,
            abilityId: Ability.TORRENT.id,
            moveIds: [Move.AIR_SLASH.id, Move.AQUA_STEP.id, Move.AQUA_JET.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.FUECOCO.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 36,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [Move.QUICK_ATTACK.id, Move.ACCELEROCK.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.GOOMY.id,
            level: 36,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
          },
          {
            pokemonId: Pokemon.PAWMO.id,
            level: 36,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.ARM_THRUST.id,
              Move.SPARK.id,
              Move.THUNDER_WAVE.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.MEOWSCARADA.id,
            level: 37,
            abilityId: Ability.OVERGROW.id,
            moveIds: [Move.SLASH.id, Move.FLOWER_TRICK.id, Move.QUICK_ATTACK.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.QUAXLY.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 36,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [Move.QUICK_ATTACK.id, Move.ACCELEROCK.id, Move.BITE.id],
          },
          {
            pokemonId: Pokemon.GOOMY.id,
            level: 36,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
          },
          {
            pokemonId: Pokemon.PAWMO.id,
            level: 36,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.ARM_THRUST.id,
              Move.SPARK.id,
              Move.THUNDER_WAVE.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.SKELEDIRGE.id,
            level: 37,
            abilityId: Ability.BLAZE.id,
            moveIds: [Move.SNARL.id, Move.TORCH_SONG.id, Move.LICK.id],
          },
        ],
      },
    ],
  }),
  NEMONA_5: createBoss("NEMONA_5", {
    name: "Nemona",
    type: BossTypes.RIVAL,
    locationId: Location.ALFORNADA_CITY.id,
    team: [
      {
        pokemonId: Pokemon.LYCANROC.id,
        level: 42,
        abilityId: Ability.SAND_RUSH.id,
        moveIds: [Move.ACCELEROCK.id, Move.CRUNCH.id, Move.ROCK_SLIDE.id, Move.SAND_ATTACK.id],
      },
      {
        pokemonId: Pokemon.SLIGGOO.id,
        level: 42,
        abilityId: Ability.SAP_SIPPER.id,
        moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
      },
      {
        pokemonId: Pokemon.PAWMOT.id,
        level: 42,
        abilityId: Ability.VOLT_ABSORB.id,
        moveIds: [Move.ARM_THRUST.id, Move.SPARK.id, Move.THUNDER_WAVE.id, Move.QUICK_ATTACK.id],
      },
      {
        pokemonId: Pokemon.QUAQUAVAL.id,
        level: 43,
        abilityId: Ability.TORRENT.id,
        moveIds: [Move.AIR_SLASH.id, Move.AQUA_STEP.id, Move.AQUA_JET.id],
      },
    ],
    teamVariants: [
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.SPRIGATITO.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 42,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [Move.ACCELEROCK.id, Move.CRUNCH.id, Move.ROCK_SLIDE.id, Move.SAND_ATTACK.id],
          },
          {
            pokemonId: Pokemon.SLIGGOO.id,
            level: 42,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
          },
          {
            pokemonId: Pokemon.PAWMOT.id,
            level: 42,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.ARM_THRUST.id,
              Move.SPARK.id,
              Move.THUNDER_WAVE.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.QUAQUAVAL.id,
            level: 43,
            abilityId: Ability.TORRENT.id,
            moveIds: [Move.AIR_SLASH.id, Move.AQUA_STEP.id, Move.AQUA_JET.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.FUECOCO.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 42,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [Move.ACCELEROCK.id, Move.CRUNCH.id, Move.ROCK_SLIDE.id, Move.SAND_ATTACK.id],
          },
          {
            pokemonId: Pokemon.SLIGGOO.id,
            level: 42,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
          },
          {
            pokemonId: Pokemon.PAWMOT.id,
            level: 42,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.ARM_THRUST.id,
              Move.SPARK.id,
              Move.THUNDER_WAVE.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.MEOWSCARADA.id,
            level: 43,
            abilityId: Ability.OVERGROW.id,
            moveIds: [Move.SLASH.id, Move.FLOWER_TRICK.id, Move.QUICK_ATTACK.id],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.QUAXLY.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 42,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [Move.ACCELEROCK.id, Move.CRUNCH.id, Move.ROCK_SLIDE.id, Move.SAND_ATTACK.id],
          },
          {
            pokemonId: Pokemon.SLIGGOO.id,
            level: 42,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [Move.DRAGON_PULSE.id, Move.WATER_PULSE.id, Move.FLAIL.id],
          },
          {
            pokemonId: Pokemon.PAWMOT.id,
            level: 42,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.ARM_THRUST.id,
              Move.SPARK.id,
              Move.THUNDER_WAVE.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.SKELEDIRGE.id,
            level: 43,
            abilityId: Ability.BLAZE.id,
            moveIds: [Move.SNARL.id, Move.TORCH_SONG.id, Move.LICK.id],
          },
        ],
      },
    ],
  }),
  NEMONA_6: createBoss("NEMONA_6", {
    name: "Nemona",
    type: BossTypes.RIVAL,
    locationId: Location.MESAGOZA.id,
    team: [
      {
        pokemonId: Pokemon.LYCANROC.id,
        level: 65,
        abilityId: Ability.SAND_RUSH.id,
        moveIds: [Move.ACCELEROCK.id, Move.DRILL_RUN.id, Move.STEALTH_ROCK.id, Move.STONE_EDGE.id],
      },
      {
        pokemonId: Pokemon.GOODRA.id,
        level: 65,
        abilityId: Ability.SAP_SIPPER.id,
        moveIds: [Move.DRAGON_PULSE.id, Move.MUDDY_WATER.id, Move.ICE_BEAM.id, Move.SLUDGE_BOMB.id],
      },
      {
        pokemonId: Pokemon.DUDUNSPARCE.id,
        level: 65,
        abilityId: Ability.SERENE_GRACE.id,
        moveIds: [Move.HYPER_DRILL.id, Move.DRILL_RUN.id, Move.DRAGON_RUSH.id, Move.COIL.id],
      },
      {
        pokemonId: Pokemon.ORTHWORM.id,
        level: 65,
        abilityId: Ability.EARTH_EATER.id,
        moveIds: [Move.IRON_TAIL.id, Move.BODY_PRESS.id, Move.EARTHQUAKE.id, Move.ROCK_BLAST.id],
      },
      {
        pokemonId: Pokemon.PAWMOT.id,
        level: 65,
        abilityId: Ability.VOLT_ABSORB.id,
        moveIds: [
          Move.DOUBLE_SHOCK.id,
          Move.CLOSE_COMBAT.id,
          Move.ICE_PUNCH.id,
          Move.QUICK_ATTACK.id,
        ],
      },
      {
        pokemonId: Pokemon.QUAQUAVAL.id,
        level: 66,
        abilityId: Ability.TORRENT.id,
        moveIds: [Move.AQUA_STEP.id, Move.BRICK_BREAK.id, Move.AERIAL_ACE.id, Move.ICE_SPINNER.id],
      },
    ],
    teamVariants: [
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.SPRIGATITO.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 65,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [
              Move.ACCELEROCK.id,
              Move.DRILL_RUN.id,
              Move.STEALTH_ROCK.id,
              Move.STONE_EDGE.id,
            ],
          },
          {
            pokemonId: Pokemon.GOODRA.id,
            level: 65,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [
              Move.DRAGON_PULSE.id,
              Move.MUDDY_WATER.id,
              Move.ICE_BEAM.id,
              Move.SLUDGE_BOMB.id,
            ],
          },
          {
            pokemonId: Pokemon.DUDUNSPARCE.id,
            level: 65,
            abilityId: Ability.SERENE_GRACE.id,
            moveIds: [Move.HYPER_DRILL.id, Move.DRILL_RUN.id, Move.DRAGON_RUSH.id, Move.COIL.id],
          },
          {
            pokemonId: Pokemon.ORTHWORM.id,
            level: 65,
            abilityId: Ability.EARTH_EATER.id,
            moveIds: [
              Move.IRON_TAIL.id,
              Move.BODY_PRESS.id,
              Move.EARTHQUAKE.id,
              Move.ROCK_BLAST.id,
            ],
          },
          {
            pokemonId: Pokemon.PAWMOT.id,
            level: 65,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.DOUBLE_SHOCK.id,
              Move.CLOSE_COMBAT.id,
              Move.ICE_PUNCH.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.QUAQUAVAL.id,
            level: 66,
            abilityId: Ability.TORRENT.id,
            moveIds: [
              Move.AQUA_STEP.id,
              Move.BRICK_BREAK.id,
              Move.AERIAL_ACE.id,
              Move.ICE_SPINNER.id,
            ],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.FUECOCO.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 65,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [
              Move.ACCELEROCK.id,
              Move.DRILL_RUN.id,
              Move.STEALTH_ROCK.id,
              Move.STONE_EDGE.id,
            ],
          },
          {
            pokemonId: Pokemon.GOODRA.id,
            level: 65,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [
              Move.DRAGON_PULSE.id,
              Move.MUDDY_WATER.id,
              Move.ICE_BEAM.id,
              Move.SLUDGE_BOMB.id,
            ],
          },
          {
            pokemonId: Pokemon.DUDUNSPARCE.id,
            level: 65,
            abilityId: Ability.SERENE_GRACE.id,
            moveIds: [Move.HYPER_DRILL.id, Move.DRILL_RUN.id, Move.DRAGON_RUSH.id, Move.COIL.id],
          },
          {
            pokemonId: Pokemon.ORTHWORM.id,
            level: 65,
            abilityId: Ability.EARTH_EATER.id,
            moveIds: [
              Move.IRON_TAIL.id,
              Move.BODY_PRESS.id,
              Move.EARTHQUAKE.id,
              Move.ROCK_BLAST.id,
            ],
          },
          {
            pokemonId: Pokemon.PAWMOT.id,
            level: 65,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.DOUBLE_SHOCK.id,
              Move.CLOSE_COMBAT.id,
              Move.ICE_PUNCH.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.MEOWSCARADA.id,
            level: 66,
            abilityId: Ability.OVERGROW.id,
            moveIds: [
              Move.THUNDER_PUNCH.id,
              Move.FLOWER_TRICK.id,
              Move.SHADOW_CLAW.id,
              Move.PLAY_ROUGH.id,
            ],
          },
        ],
      },
      {
        condition: {
          type: ConditionType.ENCOUNTER,
          routeId: Route.STARTER.id,
          pokemonId: Pokemon.QUAXLY.id,
        },
        team: [
          {
            pokemonId: Pokemon.LYCANROC.id,
            level: 65,
            abilityId: Ability.SAND_RUSH.id,
            moveIds: [
              Move.ACCELEROCK.id,
              Move.DRILL_RUN.id,
              Move.STEALTH_ROCK.id,
              Move.STONE_EDGE.id,
            ],
          },
          {
            pokemonId: Pokemon.GOODRA.id,
            level: 65,
            abilityId: Ability.SAP_SIPPER.id,
            moveIds: [
              Move.DRAGON_PULSE.id,
              Move.MUDDY_WATER.id,
              Move.ICE_BEAM.id,
              Move.SLUDGE_BOMB.id,
            ],
          },
          {
            pokemonId: Pokemon.DUDUNSPARCE.id,
            level: 65,
            abilityId: Ability.SERENE_GRACE.id,
            moveIds: [Move.HYPER_DRILL.id, Move.DRILL_RUN.id, Move.DRAGON_RUSH.id, Move.COIL.id],
          },
          {
            pokemonId: Pokemon.ORTHWORM.id,
            level: 65,
            abilityId: Ability.EARTH_EATER.id,
            moveIds: [
              Move.IRON_TAIL.id,
              Move.BODY_PRESS.id,
              Move.EARTHQUAKE.id,
              Move.ROCK_BLAST.id,
            ],
          },
          {
            pokemonId: Pokemon.PAWMOT.id,
            level: 65,
            abilityId: Ability.VOLT_ABSORB.id,
            moveIds: [
              Move.DOUBLE_SHOCK.id,
              Move.CLOSE_COMBAT.id,
              Move.ICE_PUNCH.id,
              Move.QUICK_ATTACK.id,
            ],
          },
          {
            pokemonId: Pokemon.SKELEDIRGE.id,
            level: 66,
            abilityId: Ability.BLAZE.id,
            moveIds: [Move.TORCH_SONG.id, Move.EARTH_POWER.id, Move.SHADOW_BALL.id, Move.SNARL.id],
          },
        ],
      },
    ],
  }),
  ORTEGA: createBoss("ORTEGA", {
    name: "Ortega",
    type: BossTypes.TEAM_STAR,
    locationId: Location.NORTH_PROVINCE_A1.id,
    team: [
      {
        pokemonId: Pokemon.AZUMARILL.id,
        level: 50,
        abilityId: Ability.HUGE_POWER.id,
        moveIds: [Move.AQUA_TAIL.id, Move.PLAY_ROUGH.id, Move.BOUNCE.id, Move.CHARM.id],
      },
      {
        pokemonId: Pokemon.WIGGLYTUFF.id,
        level: 50,
        abilityId: Ability.CUTE_CHARM.id,
        moveIds: [Move.BODY_SLAM.id, Move.PLAY_ROUGH.id, Move.GYRO_BALL.id, Move.CHARM.id],
      },
      {
        pokemonId: Pokemon.DACHSBUN.id,
        level: 51,
        abilityId: Ability.WELL_BAKED_BODY.id,
        moveIds: [Move.CRUNCH.id, Move.PLAY_ROUGH.id, Move.BABY_DOLL_EYES.id, Move.MUD_SLAP.id],
      },
      {
        pokemonId: Pokemon.RUCHBAH_STARMOBILE.id,
        level: 50,
        abilityId: Ability.MISTY_SURGE.id,
        moveIds: [
          Move.MAGICAL_TORQUE.id,
          Move.SPIN_OUT.id,
          Move.STEEL_ROLLER.id,
          Move.CONFUSE_RAY.id,
        ],
      },
    ],
  }),
  ORTHWORM: createBoss("ORTHWORM", {
    name: "Orthworm",
    type: BossTypes.TITAN,
    locationId: Location.EAST_PROVINCE_A3.id,
    team: [
      {
        pokemonId: Pokemon.ORTHWORM.id,
        level: 29,
        abilityId: Ability.EARTH_EATER.id,
        moveIds: [Move.IRON_TAIL.id, Move.HEADBUTT.id, Move.WRAP.id, Move.SANDSTORM.id],
      },
    ],
  }),
  PENNY: createBoss("PENNY", {
    name: "Penny",
    type: BossTypes.RIVAL,
    locationId: Location.MESAGOZA.id,
    team: [
      {
        pokemonId: Pokemon.UMBREON.id,
        level: 62,
        abilityId: Ability.SYNCHRONIZE.id,
        moveIds: [
          Move.DARK_PULSE.id,
          Move.QUICK_ATTACK.id,
          Move.BABY_DOLL_EYES.id,
          Move.PSYCHIC.id,
        ],
      },
      {
        pokemonId: Pokemon.VAPOREON.id,
        level: 62,
        abilityId: Ability.WATER_ABSORB.id,
        moveIds: [
          Move.HYDRO_PUMP.id,
          Move.QUICK_ATTACK.id,
          Move.BABY_DOLL_EYES.id,
          Move.AURORA_BEAM.id,
        ],
      },
      {
        pokemonId: Pokemon.JOLTEON.id,
        level: 62,
        abilityId: Ability.QUICK_FEET.id,
        moveIds: [
          Move.THUNDER.id,
          Move.QUICK_ATTACK.id,
          Move.BABY_DOLL_EYES.id,
          Move.PIN_MISSILE.id,
        ],
      },
      {
        pokemonId: Pokemon.FLAREON.id,
        level: 62,
        abilityId: Ability.FLASH_FIRE.id,
        moveIds: [
          Move.FLARE_BLITZ.id,
          Move.QUICK_ATTACK.id,
          Move.BABY_DOLL_EYES.id,
          Move.FIRE_SPIN.id,
        ],
      },
      {
        pokemonId: Pokemon.LEAFEON.id,
        level: 62,
        abilityId: Ability.LEAF_GUARD.id,
        moveIds: [
          Move.LEAF_BLADE.id,
          Move.QUICK_ATTACK.id,
          Move.BABY_DOLL_EYES.id,
          Move.X_SCISSOR.id,
        ],
      },
      {
        pokemonId: Pokemon.SYLVEON.id,
        level: 63,
        abilityId: Ability.CUTE_CHARM.id,
        moveIds: [
          Move.MOONBLAST.id,
          Move.QUICK_ATTACK.id,
          Move.BABY_DOLL_EYES.id,
          Move.SHADOW_BALL.id,
        ],
      },
    ],
  }),
  POPPY: createBoss("POPPY", {
    name: "Poppy",
    type: BossTypes.ELITE_FOUR,
    locationId: Location.ELITE_FOUR.id,
    team: [
      {
        pokemonId: Pokemon.COPPERAJAH.id,
        level: 58,
        abilityId: Ability.SHEER_FORCE.id,
        moveIds: [
          Move.HIGH_HORSEPOWER.id,
          Move.PLAY_ROUGH.id,
          Move.HEAVY_SLAM.id,
          Move.STEALTH_ROCK.id,
        ],
      },
      {
        pokemonId: Pokemon.MAGNEZONE.id,
        level: 58,
        abilityId: Ability.STURDY.id,
        moveIds: [
          Move.DISCHARGE.id,
          Move.FLASH_CANNON.id,
          Move.LIGHT_SCREEN.id,
          Move.TRI_ATTACK.id,
        ],
      },
      {
        pokemonId: Pokemon.BRONZONG.id,
        level: 58,
        abilityId: Ability.LEVITATE.id,
        moveIds: [Move.IRON_HEAD.id, Move.ZEN_HEADBUTT.id, Move.ROCK_BLAST.id, Move.EARTHQUAKE.id],
      },
      {
        pokemonId: Pokemon.CORVIKNIGHT.id,
        level: 58,
        abilityId: Ability.PRESSURE.id,
        moveIds: [Move.BRAVE_BIRD.id, Move.IRON_HEAD.id, Move.BODY_PRESS.id, Move.IRON_DEFENSE.id],
      },
      {
        pokemonId: Pokemon.TINKATON.id,
        level: 58,
        abilityId: Ability.MOLD_BREAKER.id,
        moveIds: [
          Move.PLAY_ROUGH.id,
          Move.GIGATON_HAMMER.id,
          Move.BRICK_BREAK.id,
          Move.STONE_EDGE.id,
        ],
      },
    ],
  }),
  RIKA: createBoss("RIKA", {
    name: "Rika",
    type: BossTypes.ELITE_FOUR,
    locationId: Location.ELITE_FOUR.id,
    team: [
      {
        pokemonId: Pokemon.WHISCASH.id,
        level: 57,
        abilityId: Ability.OBLIVIOUS.id,
        moveIds: [Move.MUDDY_WATER.id, Move.EARTH_POWER.id, Move.BLIZZARD.id, Move.FUTURE_SIGHT.id],
      },
      {
        pokemonId: Pokemon.CAMERUPT.id,
        level: 57,
        abilityId: Ability.MAGMA_ARMOR.id,
        moveIds: [Move.EARTH_POWER.id, Move.FIRE_BLAST.id, Move.FLASH_CANNON.id, Move.YAWN.id],
      },
      {
        pokemonId: Pokemon.DONPHAN.id,
        level: 57,
        abilityId: Ability.STURDY.id,
        moveIds: [Move.EARTHQUAKE.id, Move.STONE_EDGE.id, Move.IRON_HEAD.id, Move.POISON_JAB.id],
      },
      {
        pokemonId: Pokemon.DUGTRIO.id,
        level: 57,
        abilityId: Ability.SAND_VEIL.id,
        moveIds: [Move.EARTHQUAKE.id, Move.ROCK_SLIDE.id, Move.SUCKER_PUNCH.id, Move.SANDSTORM.id],
      },
      {
        pokemonId: Pokemon.CLODSIRE.id,
        level: 58,
        abilityId: Ability.WATER_ABSORB.id,
        moveIds: [Move.EARTHQUAKE.id, Move.LIQUIDATION.id, Move.TOXIC.id, Move.PROTECT.id],
      },
    ],
  }),
  RYME: createBoss("RYME", {
    name: "Ryme",
    type: BossTypes.GYM,
    locationId: Location.MONTENEVERA_CITY.id,
    team: [
      {
        pokemonId: Pokemon.BANETTE.id,
        level: 41,
        abilityId: Ability.INSOMNIA.id,
        moveIds: [Move.ICY_WIND.id, Move.SUCKER_PUNCH.id, Move.SHADOW_SNEAK.id],
      },
      {
        pokemonId: Pokemon.MIMIKYU.id,
        level: 41,
        abilityId: Ability.DISGUISE.id,
        moveIds: [Move.LIGHT_SCREEN.id, Move.SHADOW_SNEAK.id, Move.SLASH.id],
      },
      {
        pokemonId: Pokemon.HOUNDSTONE.id,
        level: 41,
        abilityId: Ability.SAND_RUSH.id,
        moveIds: [Move.PLAY_ROUGH.id, Move.CRUNCH.id, Move.PHANTOM_FORCE.id],
      },
      {
        pokemonId: Pokemon.TOXTRICITY.id,
        level: 42,
        abilityId: Ability.PUNK_ROCK.id,
        moveIds: [Move.DISCHARGE.id, Move.HEX.id, Move.HYPER_VOICE.id],
      },
    ],
  }),
  SADA_1: createBoss("SADA_1", {
    name: "Sada 1",
    type: BossTypes.RIVAL,
    locationId: Location.AREA_ZERO.id,
    team: [
      {
        pokemonId: Pokemon.SLITHER_WING.id,
        level: 66,
        abilityId: Ability.PROTOSYNTHESIS.id,
        moveIds: [Move.LUNGE.id, Move.LEECH_LIFE.id, Move.LOW_SWEEP.id, Move.ZEN_HEADBUTT.id],
      },
      {
        pokemonId: Pokemon.SCREAM_TAIL.id,
        level: 66,
        abilityId: Ability.PROTOSYNTHESIS.id,
        moveIds: [Move.PLAY_ROUGH.id, Move.DRAIN_PUNCH.id, Move.ICE_PUNCH.id, Move.ZEN_HEADBUTT.id],
      },
      {
        pokemonId: Pokemon.BRUTE_BONNET.id,
        level: 66,
        abilityId: Ability.PROTOSYNTHESIS.id,
        moveIds: [Move.EARTH_POWER.id, Move.GIGA_DRAIN.id, Move.PAYBACK.id, Move.SUCKER_PUNCH.id],
      },
      {
        pokemonId: Pokemon.FLUTTER_MANE.id,
        level: 66,
        abilityId: Ability.PROTOSYNTHESIS.id,
        moveIds: [
          Move.POWER_GEM.id,
          Move.MYSTICAL_FIRE.id,
          Move.SHADOW_BALL.id,
          Move.THUNDERBOLT.id,
        ],
      },
      {
        pokemonId: Pokemon.SANDY_SHOCKS.id,
        level: 66,
        abilityId: Ability.PROTOSYNTHESIS.id,
        moveIds: [Move.DISCHARGE.id, Move.EARTH_POWER.id, Move.FLASH_CANNON.id, Move.POWER_GEM.id],
      },
      {
        pokemonId: Pokemon.ROARING_MOON.id,
        level: 67,
        abilityId: Ability.PROTOSYNTHESIS.id,
        moveIds: [Move.DRAGON_CLAW.id, Move.NIGHT_SLASH.id, Move.STONE_EDGE.id, Move.EARTHQUAKE.id],
      },
    ],
  }),
  SADA_2: createBoss("SADA_2", {
    name: "Sada 2",
    type: BossTypes.RIVAL,
    locationId: Location.AREA_ZERO.id,
    team: [
      {
        pokemonId: Pokemon.KORAIDON.id,
        level: 72,
        abilityId: Ability.ORICHALCUM_PULSE.id,
        moveIds: [Move.GIGA_IMPACT.id, Move.BULK_UP.id, Move.TAUNT.id, Move.FLAMETHROWER.id],
      },
    ],
  }),
  TATSUGIRI: createBoss("TATSUGIRI", {
    name: "Tatsugiri",
    type: BossTypes.TITAN,
    locationId: Location.CASSEROYA_LAKE.id,
    team: [
      {
        pokemonId: Pokemon.TATSUGIRI.id,
        level: 57,
        abilityId: Ability.COMMANDER.id,
        moveIds: [Move.MUDDY_WATER.id, Move.ICY_WIND.id, Move.TAUNT.id, Move.DRAGON_PULSE.id],
      },
    ],
  }),
  TULIP: createBoss("TULIP", {
    name: "Tulip",
    type: BossTypes.GYM,
    locationId: Location.ALFORNADA_CITY.id,
    team: [
      {
        pokemonId: Pokemon.FARIGIRAF.id,
        level: 44,
        abilityId: Ability.ARMOR_TAIL.id,
        moveIds: [Move.CRUNCH.id, Move.ZEN_HEADBUTT.id, Move.REFLECT.id],
      },
      {
        pokemonId: Pokemon.GARDEVOIR.id,
        level: 44,
        abilityId: Ability.SYNCHRONIZE.id,
        moveIds: [Move.PSYCHIC.id, Move.DAZZLING_GLEAM.id, Move.ENERGY_BALL.id],
      },
      {
        pokemonId: Pokemon.ESPATHRA.id,
        level: 44,
        abilityId: Ability.OPPORTUNIST.id,
        moveIds: [Move.PSYCHIC.id, Move.QUICK_ATTACK.id, Move.SHADOW_BALL.id],
      },
      {
        pokemonId: Pokemon.FLORGES.id,
        level: 45,
        abilityId: Ability.FLOWER_VEIL.id,
        moveIds: [Move.PSYCHIC.id, Move.MOONBLAST.id, Move.PETAL_BLIZZARD.id],
      },
    ],
  }),
  TURO_1: createBoss("TURO_1", {
    name: "Turo 1",
    type: BossTypes.RIVAL,
    locationId: Location.AREA_ZERO.id,
    team: [
      {
        pokemonId: Pokemon.IRON_MOTH.id,
        level: 66,
        abilityId: Ability.QUARK_DRIVE.id,
        moveIds: [Move.SLUDGE_WAVE.id, Move.FIERY_DANCE.id, Move.DISCHARGE.id, Move.AIR_SLASH.id],
      },
      {
        pokemonId: Pokemon.IRON_BUNDLE.id,
        level: 66,
        abilityId: Ability.QUARK_DRIVE.id,
        moveIds: [Move.DRILL_PECK.id, Move.WATER_PULSE.id, Move.FREEZE_DRY.id, Move.SNOWSCAPE.id],
      },
      {
        pokemonId: Pokemon.IRON_HANDS.id,
        level: 66,
        abilityId: Ability.QUARK_DRIVE.id,
        moveIds: [Move.THUNDER_PUNCH.id, Move.DRAIN_PUNCH.id, Move.IRON_HEAD.id, Move.FAKE_OUT.id],
      },
      {
        pokemonId: Pokemon.IRON_JUGULIS.id,
        level: 66,
        abilityId: Ability.QUARK_DRIVE.id,
        moveIds: [
          Move.AIR_SLASH.id,
          Move.DARK_PULSE.id,
          Move.FLAMETHROWER.id,
          Move.FLASH_CANNON.id,
        ],
      },
      {
        pokemonId: Pokemon.IRON_THORNS.id,
        level: 66,
        abilityId: Ability.QUARK_DRIVE.id,
        moveIds: [
          Move.THUNDER_PUNCH.id,
          Move.BRICK_BREAK.id,
          Move.STONE_EDGE.id,
          Move.EARTHQUAKE.id,
        ],
      },
      {
        pokemonId: Pokemon.IRON_MOTH.id,
        level: 67,
        abilityId: Ability.QUARK_DRIVE.id,
        moveIds: [
          Move.PSYCHO_CUT.id,
          Move.BRICK_BREAK.id,
          Move.SPIRIT_BREAK.id,
          Move.POISON_JAB.id,
        ],
      },
    ],
  }),
  TURO_2: createBoss("TURO_2", {
    name: "Turo 2",
    type: BossTypes.RIVAL,
    locationId: Location.AREA_ZERO.id,
    team: [
      {
        pokemonId: Pokemon.MIRAIDON.id,
        level: 72,
        abilityId: Ability.HADRON_ENGINE.id,
        moveIds: [Move.HYPER_BEAM.id, Move.CHARGE.id, Move.TAUNT.id, Move.POWER_GEM.id],
      },
    ],
  }),
})
