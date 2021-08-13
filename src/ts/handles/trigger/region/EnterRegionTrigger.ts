/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Region } from "../../Region"
import { Unit } from "../../Unit"
import { Trigger } from "../Trigger"
import { EnterRegionEventResponse } from "./EnterRegionEventResponse"

declare function TriggerRegisterEnterRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr | null
): event

export class EnterRegionFilterResponse {
    unit = Unit.fromFilter()
    region: Region

    constructor(region: Region) {
        this.region = region
    }
}

export type EnterRegionFilterCallback =
    | ((response: EnterRegionFilterResponse) => boolean)
    | null
    | undefined

export const getEnterRegionFilter = (func: EnterRegionFilterCallback, region: Region) => {
    let result
    if (func) result = Condition(() => func(new EnterRegionFilterResponse(region)))
    else result = Condition(func)
    return result
}

export type EnterRegionTriggerCallback = (response: EnterRegionEventResponse) => void

export class EnterRegionTrigger extends Trigger {
    register(
        whichRegion: Region,
        filterFunc?: EnterRegionFilterCallback,
        callback?: EnterRegionTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        const filter = getEnterRegionFilter(filterFunc, whichRegion)
        const event = GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterEnterRegion(
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
        filterFunc?: EnterRegionFilterCallback,
        callback?: EnterRegionTriggerCallback
    ) {
        super()
        this.register(whichRegion, filterFunc, callback)
    }

    addEventListener(callback: EnterRegionTriggerCallback) {
        this.addAction(() => callback(new EnterRegionEventResponse()))
    }
}
