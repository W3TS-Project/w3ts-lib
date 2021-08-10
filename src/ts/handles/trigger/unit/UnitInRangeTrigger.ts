/** @noSelfInFile **/
//@ts-nocheck

import { UnitEvent } from "../../../API/fields/events/UnitEvent"
import { Unit } from "../../Unit"
import { Trigger } from "../Trigger"
import { UnitTargetInRangeEventResponse } from "./UnitTargetInRangeEventResponse"

declare function TriggerRegisterUnitInRange(
    whichTrigger: trigger,
    whichUnit: unit,
    range: real,
    filter: boolexpr | null
): event

export type UnitInRangeTriggerCallback = (response: UnitTargetInRangeEventResponse) => void

export class UnitInRangeTrigger extends Trigger {
    register(
        whichUnit: Unit,
        range: real,
        filterFunc?: codeboolexpr,
        callback?: UnitInRangeTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        const filter = Condition(filterFunc)
        const result = UnitEvent.fromHandle(
            (<unknown>(
                TriggerRegisterUnitInRange(
                    this.getHandle() as trigger,
                    whichUnit.getHandle() as unit,
                    range,
                    filter
                )
            )) as unitevent
        )
        return result
    }

    constructor(
        whichUnit: Unit,
        range: real,
        filterFunc?: codeboolexpr,
        callback?: UnitInRangeTriggerCallback
    ) {
        super()
        if (whichUnit && range) {
            this.register(whichUnit, range, filterFunc, callback)
        }
    }

    addEventListener(callback: UnitInRangeTriggerCallback) {
        this.addAction(() => callback(new UnitTargetInRangeEventResponse()))
    }
}
