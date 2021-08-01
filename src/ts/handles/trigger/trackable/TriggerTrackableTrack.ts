/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Trackable } from "../../Trackable"
import { Trigger } from "../Trigger"
import { TrackableTrackEventResponse } from "./TrackableTrackEventResponse"

declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event

type Callback = (response: TrackableTrackEventResponse) => void

export class TriggerTrackableTrack extends Trigger {
    public register(t: Trackable, callback?: Callback): GameEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterTrackableTrackEvent(
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
        this.addAction(() => callback(new TrackableTrackEventResponse()))
    }
}
