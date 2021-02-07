// @ts-nocheck

import { MapPlayer } from "../handles/player"

declare function Player(number: number): player

export const AllPlayers: MapPlayer[] = []

for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
    AllPlayers[i] = MapPlayer.fromHandle(Player(i))
}

export const FALSE = false
export const TRUE = true
export const JASS_MAX_ARRAY_SIZE = 32768

declare const GetPlayerNeutralPassive = () => number
declare const GetPlayerNeutralAggressive = () => number

MapPlayer.NEUTRAL_PASSIVE = GetPlayerNeutralPassive()
MapPlayer.NEUTRAL_AGGRESSIVE = GetPlayerNeutralAggressive()