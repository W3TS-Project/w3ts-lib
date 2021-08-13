import { GameIntegerState } from "../../../../API/fields/game/GameIntegerState"
import { EventResponse } from "../../Trigger"

export class GameIntegerStateEventResponse extends EventResponse {
    state = GameIntegerState.fromEvent()
}
