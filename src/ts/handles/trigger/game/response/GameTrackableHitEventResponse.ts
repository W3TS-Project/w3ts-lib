import { Trackable } from "../../../Trackable";
import { EventResponse } from "../../Trigger";

export class GameTrackableHitEventResponse extends EventResponse {
    trackable = Trackable.fromEvent()
}