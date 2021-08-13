/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Trackable } from "../../Trackable"
import { Trigger } from "../Trigger"
import { TrackableTrackEventResponse } from "./TrackableTrackEventResponse"

declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event

export type TrackableTrackTriggerCallback = (response: TrackableTrackEventResponse) => void

export class TrackableTrackTrigger extends Trigger {
    public register(t: Trackable, callback?: TrackableTrackTriggerCallback) {
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

    public constructor(t: Trackable, callback?: TrackableTrackTriggerCallback) {
        super()
        this.register(t, callback)
    }

    public addEventListener(callback: TrackableTrackTriggerCallback) {
        this.addAction(() => callback(new TrackableTrackEventResponse()))
    }
}
