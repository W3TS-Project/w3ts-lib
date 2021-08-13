import { Trackable } from "../../Trackable"
import { EventResponse } from "../Trigger"

export class TrackableHitEventResponse extends EventResponse {
    trackable = Trackable.fromEvent()
}
