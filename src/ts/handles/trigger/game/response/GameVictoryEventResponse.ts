import { MapPlayer } from "../../../MapPlayer"
import { EventResponse } from "../../Trigger"

export class GameVictoryEventResponse extends EventResponse {
    player = MapPlayer.fromWinning()
}
