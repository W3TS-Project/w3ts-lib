/** @noSelfInFile **/
//@ts-nocheck

import { LimitOperation } from "../../../API/fields/events/LimitOperation"
import { UnitEvent } from "../../../API/fields/events/UnitEvent"
import { UnitState } from "../../../API/fields/unit/UnitState"
import { Unit } from "../../Unit"
import { Trigger } from "../Trigger"
import { UnitStateLimitEventResponse } from "./UnitStateLimitEventResponse"

declare function TriggerRegisterUnitStateEvent(
    whichTrigger: trigger,
    whichUnit: unit,
    whichState: unitstate,
    opcode: limitop,
    limitval: real
): event

export type UnitStateTriggerCallback = (response: UnitStateLimitEventResponse) => void

export class UnitStateTrigger extends Trigger {
    register(
        whichUnit: Unit,
        whichState: UnitState,
        opcode: LimitOperation,
        limitval: real,
        callback?: UnitStateTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        return UnitEvent.fromHandle(
            (<unknown>(
                TriggerRegisterUnitStateEvent(
                    this.getHandle() as trigger,
                    whichUnit.getHandle() as unit,
                    whichState.getHandle() as unitstate,
                    opcode.getHandle() as limitop,
                    limitval
                )
            )) as unitevent
        )
    }

    constructor(
        whichUnit: Unit,
        whichState: UnitState,
        opcode: LimitOperation,
        limitval: real,
        callback?: UnitStateTriggerCallback
    ) {
        super()
        if (whichUnit && whichState && opcode && limitval) {
            this.register(whichUnit, whichState, opcode, limitval, callback)
        }
    }

    addEventListener(callback: UnitStateTriggerCallback) {
        this.addAction(() => callback(new UnitStateLimitEventResponse()))
    }
}
