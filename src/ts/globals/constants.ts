import { MapPlayer } from "../handles/MapPlayer"
import { Rectangle } from "../handles/Rectangle"

declare const bj_MAX_PLAYER_SLOTS: integer
declare const bj_mapInitialPlayableArea: rect

export const AllPlayers: MapPlayer[] = []
export let MAP_AREA: Rectangle

export const Constants = {
    init: () => {
        for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
            AllPlayers[i] = MapPlayer.fromIndex(i)
        }
        MAP_AREA = Rectangle.fromHandle(bj_mapInitialPlayableArea)
    }
}
