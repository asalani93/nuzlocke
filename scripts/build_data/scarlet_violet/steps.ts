import { createBossStep, createRouteStep, createStepTable } from "../utils"

import { Boss } from "./bosses"
import { Route } from "./routes"
import { Version } from "./versions"

export const Step = createStepTable({
  STARTER: createRouteStep("STARTER", {
    index: 0,
    routeId: Route.STARTER.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  NEMONA_1: createBossStep("NEMONA_1", {
    index: 1,
    bossId: Boss.NEMONA_1.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  POCO_PATH: createRouteStep("POCO_PATH", {
    index: 2,
    routeId: Route.POCO_PATH.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  INLET_GROTTO: createRouteStep("INLET_GROTTO", {
    index: 3,
    routeId: Route.INLET_GROTTO.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  SOUTH_PROVINCE_A1: createRouteStep("SOUTH_PROVINCE_A1", {
    index: 4,
    routeId: Route.SOUTH_PROVINCE_A1.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  NEMONA_2: createBossStep("NEMONA_2", {
    index: 5,
    bossId: Boss.NEMONA_2.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  SOUTH_PROVINCE_A2: createRouteStep("SOUTH_PROVINCE_A2", {
    index: 6,
    routeId: Route.SOUTH_PROVINCE_A2.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  KATY: createBossStep("KATY", {
    index: 7,
    bossId: Boss.KATY.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  SOUTH_PROVINCE_A3: createRouteStep("SOUTH_PROVINCE_A3", {
    index: 8,
    routeId: Route.SOUTH_PROVINCE_A3.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  KLAWF: createBossStep("KLAWF", {
    index: 9,
    bossId: Boss.KLAWF.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  BRASSIUS: createBossStep("BRASSIUS", {
    index: 10,
    bossId: Boss.BRASSIUS.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  WEST_PROVINCE_A1: createRouteStep("WEST_PROVINCE_A1", {
    // 18-20
    index: 11,
    routeId: Route.WEST_PROVINCE_A1.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  BOMBIRDIER: createBossStep("BOMBIRDIER", {
    index: 12,
    bossId: Boss.BOMBIRDIER.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  GIACOMO: createBossStep("GIACOMO", {
    index: 13,
    bossId: Boss.GIACOMO.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  SOUTH_PROVINCE_A4: createRouteStep("SOUTH_PROVINCE_A4", {
    // 16-23
    index: 14,
    routeId: Route.SOUTH_PROVINCE_A4.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  SOUTH_PROVINCE_A5: createRouteStep("SOUTH_PROVINCE_A5", {
    // 19-22
    index: 15,
    routeId: Route.SOUTH_PROVINCE_A5.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  EAST_PROVINCE_A1: createRouteStep("EAST_PROVINCE_A1", {
    // 17-23
    index: 16,
    routeId: Route.EAST_PROVINCE_A1.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  EAST_PROVINCE_A2: createRouteStep("EAST_PROVINCE_A2", {
    // 19-23
    index: 17,
    routeId: Route.EAST_PROVINCE_A2.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  NEMONA_3: createBossStep("NEMONA_3", {
    index: 18,
    bossId: Boss.NEMONA_3.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  IONO: createBossStep("IONO", {
    index: 19,
    bossId: Boss.IONO.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  SOUTH_PALDEAN_SEA: createRouteStep("SOUTH_PALDEAN_SEA", {
    // 15-23
    index: 20,
    routeId: Route.SOUTH_PALDEAN_SEA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  MELA: createBossStep("MELA", {
    index: 21,
    bossId: Boss.MELA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  EAST_PROVINCE_A3: createRouteStep("EAST_PROVINCE_A3", {
    // 17-28
    index: 22,
    routeId: Route.EAST_PROVINCE_A3.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  EAST_PALDEAN_SEA: createRouteStep("EAST_PALDEAN_SEA", {
    // 14-30
    index: 23,
    routeId: Route.EAST_PALDEAN_SEA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  ORTHWORM: createBossStep("ORTHWORM", {
    index: 24,
    bossId: Boss.ORTHWORM.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  WEST_PROVINCE_A2: createRouteStep("WEST_PROVINCE_A2", {
    // 26-29
    index: 25,
    routeId: Route.WEST_PROVINCE_A2.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  ASADO_DESERT: createRouteStep("ASADO_DESERT", {
    index: 26,
    routeId: Route.ASADO_DESERT.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  KOFU: createBossStep("KOFU", {
    index: 27,
    bossId: Boss.KOFU.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  WEST_PROVINCE_A3: createRouteStep("WEST_PROVINCE_A3", {
    // 28-29
    index: 28,
    routeId: Route.WEST_PROVINCE_A3.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  TAGTREE_THICKET: createRouteStep("TAGTREE_THICKET", {
    // 30-32
    index: 29,
    routeId: Route.TAGTREE_THICKET.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  ATTICUS: createBossStep("ATTICUS", {
    index: 30,
    bossId: Boss.ATTICUS.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  DALIZAPA_PASSAGE: createRouteStep("DALIZAPA_PASSAGE", {
    // 31-37
    index: 31,
    routeId: Route.DALIZAPA_PASSAGE.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  NEMONA_4: createBossStep("NEMONA_4", {
    index: 32,
    bossId: Boss.NEMONA_4.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  LARRY_1: createBossStep("LARRY_1", {
    index: 33,
    bossId: Boss.LARRY_1.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  GLASEADO_MOUNTAIN_SOUTH: createRouteStep("GLASEADO_MOUNTAIN_SOUTH", {
    // 40-42
    index: 34,
    routeId: Route.GLASEADO_MOUNTAIN_SOUTH.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  GLASEADO_MOUNTAIN_NORTH: createRouteStep("GLASEADO_MOUNTAIN_NORTH", {
    // 34-41
    index: 35,
    routeId: Route.GLASEADO_MOUNTAIN_NORTH.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  WEST_PALDEAN_SEA: createRouteStep("WEST_PALDEAN_SEA", {
    // 18-39
    index: 36,
    routeId: Route.WEST_PALDEAN_SEA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  RYME: createBossStep("RYME", {
    index: 37,
    bossId: Boss.RYME.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  SOUTH_PROVINCE_A6: createRouteStep("SOUTH_PROVINCE_A6", {
    // 37-43
    index: 38,
    routeId: Route.SOUTH_PROVINCE_A6.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  GREAT_TUSK: createBossStep("GREAT_TUSK", {
    index: 39,
    bossId: Boss.GREAT_TUSK.id,
    versionIds: [Version.SCARLET.id],
    enforceCap: true,
  }),
  IRON_TREADS: createBossStep("IRON_TREADS", {
    index: 40,
    bossId: Boss.IRON_TREADS.id,
    versionIds: [Version.VIOLET.id],
    enforceCap: true,
  }),
  NEMONA_5: createBossStep("NEMONA_5", {
    index: 41,
    bossId: Boss.NEMONA_5.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  TULIP: createBossStep("TULIP", {
    index: 42,
    bossId: Boss.TULIP.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  GRUSHA: createBossStep("GRUSHA", {
    index: 43,
    bossId: Boss.GRUSHA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  NORTH_PROVINCE_A3: createRouteStep("NORTH_PROVINCE_A3", {
    index: 44,
    routeId: Route.NORTH_PROVINCE_A3.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  ORTEGA: createBossStep("ORTEGA", {
    index: 45,
    bossId: Boss.ORTEGA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  CASSEROYA_LAKE: createRouteStep("CASSEROYA_LAKE", {
    index: 46,
    routeId: Route.CASSEROYA_LAKE.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  TATSUGIRI: createBossStep("TATSUGIRI", {
    index: 47,
    bossId: Boss.TATSUGIRI.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  NORTH_PROVINCE_A1: createRouteStep("NORTH_PROVINCE_A1", {
    index: 48,
    routeId: Route.NORTH_PROVINCE_A1.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  NORTH_PROVINCE_A2: createRouteStep("NORTH_PROVINCE_A2", {
    index: 49,
    routeId: Route.NORTH_PROVINCE_A2.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  NORTH_PALDEAN_SEA: createRouteStep("NORTH_PALDEAN_SEA", {
    // 48-50
    index: 50,
    routeId: Route.NORTH_PALDEAN_SEA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  ERI: createBossStep("ERI", {
    index: 51,
    bossId: Boss.ERI.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  SOCARRAT_TRAIL: createRouteStep("SOCARRAT_TRAIL", {
    // 53-56
    index: 52,
    routeId: Route.SOCARRAT_TRAIL.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  AREA_ZERO: createRouteStep("AREA_ZERO", {
    // 59
    index: 53,
    routeId: Route.AREA_ZERO.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  POKEMON_LEAGUE: createRouteStep("POKEMON_LEAGUE", {
    index: 54,
    routeId: Route.POKEMON_LEAGUE.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
  }),
  RIKA: createBossStep("RIKA", {
    index: 55,
    bossId: Boss.RIKA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: false,
  }),
  POPPY: createBossStep("POPPY", {
    index: 56,
    bossId: Boss.POPPY.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: false,
  }),
  LARRY_2: createBossStep("LARRY_2", {
    index: 57,
    bossId: Boss.LARRY_2.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: false,
  }),
  HASSEL: createBossStep("HASSEL", {
    index: 58,
    bossId: Boss.HASSEL.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: false,
  }),
  GEETA: createBossStep("GEETA", {
    index: 59,
    bossId: Boss.GEETA.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  ARVEN: createBossStep("ARVEN", {
    index: 60,
    bossId: Boss.ARVEN.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  CLIVE: createBossStep("CLIVE", {
    index: 61,
    bossId: Boss.CLIVE.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: false,
  }),
  PENNY: createBossStep("PENNY", {
    index: 62,
    bossId: Boss.PENNY.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  NEMONA_6: createBossStep("NEMONA_6", {
    index: 63,
    bossId: Boss.NEMONA_6.id,
    versionIds: [Version.SCARLET.id, Version.VIOLET.id],
    enforceCap: true,
  }),
  SADA_1: createBossStep("SADA_1", {
    index: 64,
    bossId: Boss.SADA_1.id,
    versionIds: [Version.SCARLET.id],
    enforceCap: true,
  }),
  TURO_1: createBossStep("TURO_1", {
    index: 65,
    bossId: Boss.TURO_1.id,
    versionIds: [Version.VIOLET.id],
    enforceCap: true,
  }),
  SADA_2: createBossStep("SADA_2", {
    index: 66,
    bossId: Boss.SADA_2.id,
    versionIds: [Version.SCARLET.id],
    enforceCap: true,
  }),
  TURO_2: createBossStep("TURO_2", {
    index: 67,
    bossId: Boss.TURO_2.id,
    versionIds: [Version.VIOLET.id],
    enforceCap: true,
  }),
})
