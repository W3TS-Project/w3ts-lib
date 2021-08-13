import { GameFloatState } from "../../../../API/fields/game/GameFloatState"
import { EventResponse } from "../../Trigger"

export class GameFloatStateEventResponse extends EventResponse {
    state = GameFloatState.fromEvent()
}
