import { GameEvent } from "../../../API/fields/events/GameEvent"
import { GameEvents } from "../../../fields/events/GameEvents"
import { GameTrigger, GameTriggerCallback } from "./GameTrigger"
import { GameEnterRegionEventResponse } from "./response/GameEnterRegionEventResponse"

export type GameEnterRegionTriggerCallback = (response: GameEnterRegionEventResponse) => void

export class GameEnterRegionTrigger extends GameTrigger {
    public register(_?: GameEvent, callback?: GameEnterRegionTriggerCallback) {
        return super.register(GameEvents.ENTER_REGION, callback as GameTriggerCallback)
    }

    public constructor(_?: GameEvent, callback?: GameEnterRegionTriggerCallback) {
        super(GameEvents.ENTER_REGION, callback as GameTriggerCallback)
    }

    public addEventListener(callback: GameEnterRegionTriggerCallback) {
        super.addEventListener(callback as GameTriggerCallback)
    }
}
