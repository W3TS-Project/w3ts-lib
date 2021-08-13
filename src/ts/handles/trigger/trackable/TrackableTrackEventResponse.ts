import { Trackable } from "../../Trackable";
import { EventResponse } from "../Trigger";

export class TrackableTrackEventResponse extends EventResponse {
    trackable = Trackable.fromEvent()
}