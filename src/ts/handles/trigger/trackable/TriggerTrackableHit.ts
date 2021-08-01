/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Trackable } from "../../Trackable"
import { Trigger } from "../Trigger"
import { TrackableHitEventResponse } from "./TrackableHitEventResponse"

declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event

type Callback = (response: TrackableHitEventResponse) => void

export class TriggerTrackableHit extends Trigger {
    public register(t: Trackable, callback?: Callback): GameEvent {
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

    public constructor(t?: Trackable, callback?: Callback) {
        super()
        if (t && callback) {
            this.register(t, callback)
        }
    }

    public addEventListener(callback: Callback) {
        this.addAction(() => callback(new TrackableHitEventResponse()))
    }
}
