import { bossStep, routeStep, stepTable } from "../types/step"
import { Bosses } from "./bosses"
import { Routes } from "./routes"
import { Versions } from "./versions"

export const Steps = stepTable({
  STARTER: routeStep("STARTER", { index: 0, route: Routes.STARTER.id }),
  NEMONA_1: bossStep("NEMONA_1", {
    index: 1,
    boss: Bosses.NEMONA_1.id,
    blocking: true,
  }),
  POCO_PATH: routeStep("POCO_PATH", { index: 2, route: Routes.POCO_PATH.id }),
  SOUTH_PROVINCE_A1: routeStep("SOUTH_PROVINCE_A1", {
    index: 3,
    route: Routes.SOUTH_PROVINCE_A1.id,
  }),
  NEMONA_2: bossStep("NEMONA_2", {
    index: 4,
    boss: Bosses.NEMONA_2.id,
    blocking: true,
  }),
  INLET_GROTTO: routeStep("INLET_GROTTO", {
    index: 5,
    route: Routes.INLET_GROTTO.id,
  }),
  SOUTH_PROVINCE_A4: routeStep("SOUTH_PROVINCE_A4", {
    index: 6,
    route: Routes.SOUTH_PROVINCE_A4.id,
  }),
  SOUTH_PROVINCE_A2: routeStep("SOUTH_PROVINCE_A2", {
    index: 7,
    route: Routes.SOUTH_PROVINCE_A2.id,
  }),
  KATY: bossStep("KATY", { index: 8, boss: Bosses.KATY.id, blocking: true }),
  SOUTH_PROVINCE_A5: routeStep("SOUTH_PROVINCE_A5", {
    index: 9,
    route: Routes.SOUTH_PROVINCE_A5.id,
  }),
  EAST_PROVINCE_A1: routeStep("EAST_PROVINCE_A1", {
    index: 10,
    route: Routes.EAST_PROVINCE_A1.id,
  }),
  SOUTH_PROVINCE_A3: routeStep("SOUTH_PROVINCE_A3", {
    index: 11,
    route: Routes.SOUTH_PROVINCE_A3.id,
  }),
  KLAWF: bossStep("KLAWF", {
    index: 12,
    boss: Bosses.KLAWF.id,
    blocking: true,
  }),
  BRASSIUS: bossStep("BRASSIUS", {
    index: 13,
    boss: Bosses.BRASSIUS.id,
    blocking: true,
  }),
  WEST_PROVINCE_A1: routeStep("WEST_PROVINCE_A1", {
    index: 14,
    route: Routes.WEST_PROVINCE_A1.id,
  }),
  BOMBIRDIER: bossStep("BOMBIRDIER", {
    index: 15,
    boss: Bosses.BOMBIRDIER.id,
    blocking: true,
  }),
  GIACOMO: bossStep("GIACOMO", {
    index: 16,
    boss: Bosses.GIACOMO.id,
    blocking: true,
  }),
  EAST_PROVINCE_A2: routeStep("EAST_PROVINCE_A2", {
    index: 17,
    route: Routes.EAST_PROVINCE_A2.id,
  }),
  NEMONA_3: bossStep("NEMONA_3", {
    index: 18,
    boss: Bosses.NEMONA_3.id,
    blocking: true,
  }),
  IONO: bossStep("IONO", { index: 19, boss: Bosses.IONO.id, blocking: true }),
  MELA: bossStep("MELA", { index: 20, boss: Bosses.MELA.id, blocking: true }),
  EAST_PROVINCE_A3: routeStep("EAST_PROVINCE_A3", {
    index: 21,
    route: Routes.EAST_PROVINCE_A3.id,
  }),
  ORTHWORM: bossStep("ORTHWORM", {
    index: 22,
    boss: Bosses.ORTHWORM.id,
    blocking: true,
  }),
  WEST_PROVINCE_A2: routeStep("WEST_PROVINCE_A2", {
    index: 23,
    route: Routes.WEST_PROVINCE_A2.id,
  }),
  KOFU: bossStep("KOFU", { index: 24, boss: Bosses.KOFU.id, blocking: true }),
  WEST_PROVINCE_A3: routeStep("WEST_PROVINCE_A3", {
    index: 25,
    route: Routes.WEST_PROVINCE_A3.id,
  }),
  GLASEADO_MOUNTAIN_SOUTH: routeStep("GLASEADO_MOUNTAIN_SOUTH", {
    index: 26,
    route: Routes.GLASEADO_MOUNTAIN_SOUTH.id,
  }),
  DALIZAPA_PASSAGE: routeStep("DALIZAPA_PASSAGE", {
    index: 27,
    route: Routes.DALIZAPA_PASSAGE.id,
  }),
  TAGTREE_THICKET: routeStep("TAGTREE_THICKET", {
    index: 28,
    route: Routes.TAGTREE_THICKET.id,
  }),
  ATTICUS: bossStep("ATTICUS", {
    index: 29,
    boss: Bosses.ATTICUS.id,
    blocking: true,
  }),
  NEMONA_4: bossStep("NEMONA_4", {
    index: 30,
    boss: Bosses.NEMONA_4.id,
    blocking: true,
  }),
  LARRY_1: bossStep("LARRY_1", {
    index: 31,
    boss: Bosses.LARRY_1.id,
    blocking: true,
  }),
  GLASEADO_MOUNTAIN_NORTH: routeStep("GLASEADO_MOUNTAIN_NORTH", {
    index: 32,
    route: Routes.GLASEADO_MOUNTAIN_NORTH.id,
  }),
  RYME: bossStep("RYME", { index: 33, boss: Bosses.RYME.id, blocking: true }),
  SOUTH_PROVINCE_A6: routeStep("SOUTH_PROVINCE_A6", {
    index: 34,
    route: Routes.SOUTH_PROVINCE_A6.id,
  }),
  ASADO_DESERT: routeStep("ASADO_DESERT", {
    index: 35,
    route: Routes.ASADO_DESERT.id,
  }),
  GREAT_TUSK: bossStep("GREAT_TUSK", {
    index: 36,
    boss: Bosses.GREAT_TUSK.id,
    version: Versions.SCARLET.id,
    blocking: true,
  }),
  IRON_TREADS: bossStep("IRON_TREADS", {
    index: 37,
    boss: Bosses.IRON_TREADS.id,
    version: Versions.VIOLET.id,
    blocking: true,
  }),
  NEMONA_5: bossStep("NEMONA_5", {
    index: 38,
    boss: Bosses.NEMONA_4.id,
    blocking: true,
  }),
  TULIP: bossStep("TULIP", {
    index: 39,
    boss: Bosses.TULIP.id,
    blocking: true,
  }),
  GRUSHA: bossStep("GRUSHA", {
    index: 40,
    boss: Bosses.GRUSHA.id,
    blocking: true,
  }),
  NORTH_PROVINCE_A3: routeStep("NORTH_PROVINCE_A3", {
    index: 41,
    route: Routes.NORTH_PROVINCE_A3.id,
  }),
  ORTEGA: bossStep("ORTEGA", {
    index: 42,
    boss: Bosses.ORTEGA.id,
    blocking: true,
  }),
  CASSEROYA_LAKE: routeStep("CASSEROYA_LAKE", {
    index: 43,
    route: Routes.CASSEROYA_LAKE.id,
  }),
  TATSUGIRI: bossStep("TATSUGIRI", {
    index: 44,
    boss: Bosses.TATSUGIRI.id,
    blocking: true,
  }),
  NORTH_PROVINCE_A1: routeStep("NORTH_PROVINCE_A1", {
    index: 45,
    route: Routes.NORTH_PROVINCE_A1.id,
  }),
  NORTH_PROVINCE_A2: routeStep("NORTH_PROVINCE_A2", {
    index: 46,
    route: Routes.NORTH_PROVINCE_A2.id,
  }),
  ERI: bossStep("ERI", { index: 47, boss: Bosses.ERI.id, blocking: true }),
  WEST_PALDEAN_SEA: routeStep("WEST_PALDEAN_SEA", {
    index: 48,
    route: Routes.WEST_PALDEAN_SEA.id,
  }),
  SOUTH_PALDEAN_SEA: routeStep("SOUTH_PALDEAN_SEA", {
    index: 49,
    route: Routes.SOUTH_PALDEAN_SEA.id,
  }),
  EAST_PALDEAN_SEA: routeStep("EAST_PALDEAN_SEA", {
    index: 50,
    route: Routes.EAST_PALDEAN_SEA.id,
  }),
  NORTH_PALDEAN_SEA: routeStep("NORTH_PALDEAN_SEA", {
    index: 51,
    route: Routes.NORTH_PALDEAN_SEA.id,
  }),
  SOCARRAT_TRAIL: routeStep("SOCARRAT_TRAIL", {
    index: 52,
    route: Routes.SOCARRAT_TRAIL.id,
  }),
  AREA_ZERO: routeStep("AREA_ZERO", { index: 53, route: Routes.AREA_ZERO.id }),
  POKEMON_LEAGUE: routeStep("POKEMON_LEAGUE", {
    index: 54,
    route: Routes.POKEMON_LEAGUE.id,
  }),
  RIKA: bossStep("RIKA", { index: 55, boss: Bosses.RIKA.id }),
  POPPY: bossStep("POPPY", { index: 56, boss: Bosses.POPPY.id }),
  LARRY_2: bossStep("LARRY_2", { index: 57, boss: Bosses.LARRY_2.id }),
  HASSEL: bossStep("HASSEL", { index: 58, boss: Bosses.HASSEL.id }),
  GEETA: bossStep("GEETA", {
    index: 59,
    boss: Bosses.GEETA.id,
    blocking: true,
  }),
  ARVEN: bossStep("ARVEN", {
    index: 60,
    boss: Bosses.ARVEN.id,
    blocking: true,
  }),
  CLIVE: bossStep("CLIVE", { index: 61, boss: Bosses.CLIVE.id }),
  PENNY: bossStep("PENNY", {
    index: 62,
    boss: Bosses.PENNY.id,
    blocking: true,
  }),
  NEMONA_6: bossStep("NEMONA_6", {
    index: 63,
    boss: Bosses.NEMONA_6.id,
    blocking: true,
  }),
  SADA_1: bossStep("SADA_1", {
    index: 64,
    boss: Bosses.SADA_1.id,
    version: Versions.SCARLET.id,
    blocking: true,
  }),
  TURO_1: bossStep("TURO_1", {
    index: 65,
    boss: Bosses.TURO_1.id,
    version: Versions.VIOLET.id,
    blocking: true,
  }),
  SADA_2: bossStep("SADA_2", {
    index: 66,
    boss: Bosses.SADA_2.id,
    version: Versions.SCARLET.id,
    blocking: true,
  }),
  TURO_2: bossStep("TURO_2", {
    index: 67,
    boss: Bosses.TURO_2.id,
    version: Versions.VIOLET.id,
    blocking: true,
  }),
})

export const StepOrder = (() => {
  const steps = Object.values(Steps)
  steps.sort((l, r) => l.index - r.index)
  return steps
})()
