import { MapPlayer } from "../../../MapPlayer"
import { EventResponse } from "../../Trigger"

export class PlayerEventResponse extends EventResponse {
    player = MapPlayer.fromEvent()
}
