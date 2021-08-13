/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Region } from "../../Region"
import { Unit } from "../../Unit"
import { Trigger } from "../Trigger"
import { LeaveRegionEventResponse } from "./LeaveRegionEventResponse"

declare function TriggerRegisterLeaveRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr | null
): event

export class LeaveRegionFilterResponse {
    unit = Unit.fromFilter()
    region: Region

    constructor(region: Region) {
        this.region = region
    }
}

export type LeaveRegionFilterCallback =
    | ((response: LeaveRegionFilterResponse) => boolean)
    | null
    | undefined

export const getLeaveRegionFilter = (func: LeaveRegionFilterCallback, region: Region) => {
    let result
    if (func) result = Condition(() => func(new LeaveRegionFilterResponse(region)))
    else result = Condition(func)
    return result
}

export type LeaveRegionTriggerCallback = (response: LeaveRegionEventResponse) => void

export class LeaveRegionTrigger extends Trigger {
    register(
        whichRegion: Region,
        filterFunc?: LeaveRegionFilterCallback,
        callback?: LeaveRegionTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        const filter = getLeaveRegionFilter(filterFunc, whichRegion)
        const event = GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterLeaveRegion(
                    this.getHandle() as trigger,
                    whichRegion.getHandle() as region,
                    filter
                )
            )) as gameevent
        )
        DestroyCondition(filter)
        return event
    }

    constructor(
        whichRegion: Region,
        filterFunc?: LeaveRegionFilterCallback,
        callback?: LeaveRegionTriggerCallback
    ) {
        super()
        this.register(whichRegion, filterFunc, callback)
    }

    addEventListener(callback: LeaveRegionTriggerCallback) {
        this.addAction(() => callback(new LeaveRegionEventResponse()))
    }
}
