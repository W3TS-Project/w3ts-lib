import { Trackable } from "../../../Trackable"
import { EventResponse } from "../../Trigger"

export class GameTrackableTrackEventResponse extends EventResponse {
    trackable = Trackable.fromEvent()
}
