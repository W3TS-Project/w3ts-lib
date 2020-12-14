// @ts-nocheck

import { MapPlayer } from "../handles/player"

declare function Player(number: number): player

export const AllPlayers: MapPlayer[] = []

for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
    AllPlayers[i] = MapPlayer.fromHandle(Player(i))
}
