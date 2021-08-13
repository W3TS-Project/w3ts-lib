/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Trackable } from "../../Trackable"
import { Trigger } from "../Trigger"
import { TrackableHitEventResponse } from "./TrackableHitEventResponse"

declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event

export type TrackableHitTriggerCallback = (response: TrackableHitEventResponse) => void

export class TrackableHitTrigger extends Trigger {
    register(t: Trackable, callback?: TrackableHitTriggerCallback) {
        if (callback) {
            this.addEventListener(callback)
        }
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterTrackableHitEvent(
                    this.getHandle() as trigger,
                    t.getHandle() as trackable
                )
            )) as gameevent
        )
    }

    constructor(t: Trackable, callback?: TrackableHitTriggerCallback) {
        super()
        this.register(t, callback)
    }

    addEventListener(callback: TrackableHitTriggerCallback) {
        this.addAction(() => callback(new TrackableHitEventResponse()))
    }
}
