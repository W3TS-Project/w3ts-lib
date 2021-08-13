/** @noSelfInFile **/
//@ts-nocheck

import { LimitOperation } from "../../../API/fields/events/LimitOperation"
import { UnitState } from "../../../API/fields/unit/UnitState"
import { MAP_AREA } from "../../../globals/constants"
import { Group } from "../../Group"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { PlayerUnitStateEventResponse } from "./response/PlayerUnitStateEventResponse"

declare function TriggerRegisterUnitStateEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichState: unitstate,
    opcode: limitop,
    limitval: real
): event

export type PlayerUnitStateTriggerCallback = (response: PlayerUnitStateEventResponse) => void

export class PlayerUnitStateTrigger extends Trigger {
    register(
        whichPlayer: MapPlayer,
        whichState: UnitState,
        opcode: LimitOperation,
        limitval: real,
        callback?: PlayerUnitStateTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        new Group()
            .enumOfPlayer(whichPlayer, response => MAP_AREA.contains(response.unit))
            .forEach(response =>
                TriggerRegisterUnitStateEvent(
                    this.getHandle() as trigger,
                    response.unit.getHandle() as unit,
                    whichState.getHandle() as unitstate,
                    opcode.getHandle() as limitop,
                    limitval
                )
            )
            .destroy()
    }

    constructor(
        whichPlayer: MapPlayer,
        whichState: UnitState,
        opcode: LimitOperation,
        limitval: real,
        callback?: PlayerUnitStateTriggerCallback
    ) {
        super()
        this.register(whichPlayer, whichState, opcode, limitval, callback)
    }

    addEventListener(callback: PlayerUnitStateTriggerCallback) {
        this.addAction(() => callback(new PlayerUnitStateEventResponse()))
    }
}
