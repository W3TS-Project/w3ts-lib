/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Region } from "../../Region"
import { Trigger } from "../Trigger"
import { EnterRegionEventResponse } from "./EnterRegionEventResponse"

declare function TriggerRegisterEnterRegion(
    whichTrigger: trigger,
    whichRegion: region,
    filter: boolexpr | null
): event

type Callback = (response: EnterRegionEventResponse) => void

export class TriggerEnterRegion extends Trigger {
    public register(whichRegion: Region, filterFunc: codeboolexpr, callback?: Callback): GameEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterEnterRegion(
                    this.getHandle() as trigger,
                    whichRegion.getHandle() as region,
                    Condition(filterFunc)
                )
            )) as gameevent
        )
    }

    public constructor(whichRegion?: Region, filterFunc?: codeboolexpr, callback?: Callback) {
        super()
        if (whichRegion && filterFunc && callback) {
            this.register(whichRegion, filterFunc, callback)
        }
    }

    public addEventListener(callback: Callback) {
        this.addAction(() => callback(new EnterRegionEventResponse()))
    }
}
