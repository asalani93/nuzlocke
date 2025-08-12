import { atom, useAtomValue, useSetAtom } from "jotai"
import { useCallback, useMemo } from "react"

import type { PokemonId } from "../types/pokemon"
import type { RouteId } from "../types/route"

import { useStateContext } from "./state_context"

export function useEncounters() {
  const { encountersAtom } = useStateContext()
  return useAtomValue(encountersAtom)
}

export function useEncounterForRoute(routeId: RouteId) {
  const { encountersAtom } = useStateContext()
  const encounterForRouteAtom = useMemo(() => {
    return atom((get) => {
      return get(encountersAtom)[routeId]
    })
  }, [encountersAtom, routeId])

  return useAtomValue(encounterForRouteAtom)
}

function useEncountersDispatch() {
  const { encountersAtom } = useStateContext()
  return useSetAtom(encountersAtom)
}

export function useResetAllEncounters() {
  const dispatch = useEncountersDispatch()
  return useCallback(() => {
    dispatch({ type: "RESET_ALL" })
  }, [dispatch])
}

export function useRerollEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "REROLL", routeId })
    },
    [dispatch]
  )
}

export function useOverrideEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId, pokemonId: PokemonId) => {
      dispatch({ type: "OVERRIDE", routeId, pokemonId })
    },
    [dispatch]
  )
}

export function useRevealEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "REVEAL", routeId })
    },
    [dispatch]
  )
}

export function useHideEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "HIDE", routeId })
    },
    [dispatch]
  )
}

export function useCatchEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "CATCH", routeId })
    },
    [dispatch]
  )
}

export function useDefeatEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "DEFEAT", routeId })
    },
    [dispatch]
  )
}
