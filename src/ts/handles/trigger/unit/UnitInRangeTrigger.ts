/** @noSelfInFile **/
//@ts-nocheck

import { UnitEvent } from "../../../API/fields/events/UnitEvent"
import { Unit } from "../../Unit"
import { Trigger } from "../Trigger"
import { UnitTargetInRangeEventResponse } from "./response/UnitTargetInRangeEventResponse"

declare function TriggerRegisterUnitInRange(
    whichTrigger: trigger,
    whichUnit: unit,
    range: real,
    filter: boolexpr | null
): event

export class UnitInRangeFilterResponse {
    unit = Unit.fromFilter()
    range: real

    constructor(range: real) {
        this.range = range
    }
}

export type UnitInRangeFilterCallback =
    | ((response: UnitInRangeFilterResponse) => boolean)
    | null
    | undefined

export const getUnitInRangeFilter = (func: UnitInRangeFilterCallback, range: real) => {
    let result
    if (func) result = Condition(() => func(new UnitInRangeFilterResponse(range)))
    else result = Condition(func)
    return result
}

export type UnitInRangeTriggerCallback = (response: UnitTargetInRangeEventResponse) => void

export class UnitInRangeTrigger extends Trigger {
    register(
        whichUnit: Unit,
        range: real,
        filterFunc?: UnitInRangeFilterCallback,
        callback?: UnitInRangeTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        const filter = getUnitInRangeFilter(filterFunc, range)
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
        DestroyCondition(filter)
        return result
    }

    constructor(
        whichUnit: Unit,
        range: real,
        filterFunc?: UnitInRangeFilterCallback,
        callback?: UnitInRangeTriggerCallback
    ) {
        super()
        this.register(whichUnit, range, filterFunc, callback)
    }

    addEventListener(callback: UnitInRangeTriggerCallback) {
        this.addAction(() => callback(new UnitTargetInRangeEventResponse()))
    }
}
