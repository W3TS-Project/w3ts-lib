// @ts-nocheck

import { MapPlayer } from "../handles/MapPlayer"

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

MapPlayer.NeutralPassive = GetPlayerNeutralPassive()
MapPlayer.NeutralAggressive = GetPlayerNeutralAggressive()