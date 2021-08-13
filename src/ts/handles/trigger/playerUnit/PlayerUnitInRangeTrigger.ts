/** @noSelfInFile **/
//@ts-nocheck

import { MAP_AREA } from "../../../globals/constants"
import { Group } from "../../Group"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { getPlayerUnitFilter, PlayerUnitFilterCallback } from "./PlayerUnitTriggers"
import { PlayerUnitTargetInRangeEventResponse } from "./response/PlayerUnitTargetInRangeEventResponse"

declare function TriggerRegisterUnitInRange(
    whichTrigger: trigger,
    whichUnit: unit,
    range: real,
    filter: boolexpr | null
): event

export type PlayerUnitInRangeTriggerCallback = (
    response: PlayerUnitTargetInRangeEventResponse
) => void

export class PlayerUnitInRangeTrigger extends Trigger {
    register(
        whichPlayer: MapPlayer,
        range: real,
        filterFunc?: PlayerUnitFilterCallback,
        callback?: PlayerUnitInRangeTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        const filter = getPlayerUnitFilter(filterFunc)
        new Group()
            .enumOfPlayer(whichPlayer, response => MAP_AREA.contains(response.unit))
            .forEach(response =>
                TriggerRegisterUnitInRange(
                    this.getHandle() as trigger,
                    response.unit.getHandle() as unit,
                    range,
                    filter
                )
            )
            .destroy()
        DestroyCondition(filter)
    }

    constructor(whichPlayer: MapPlayer, range: real, filterFunc?: PlayerUnitFilterCallback, callback?: PlayerUnitInRangeTriggerCallback) {
        super()
        this.register(whichPlayer, range, filterFunc, callback)
    }

    addEventListener(callback: PlayerUnitInRangeTriggerCallback) {
        this.addAction(() => callback(new PlayerUnitTargetInRangeEventResponse()))
    }
}
