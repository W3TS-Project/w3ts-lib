import { GameEvent } from "../../../API/fields/events/GameEvent"
import { GameEvents } from "../../../fields/events/GameEvents"
import { GameTrigger, GameTriggerCallback } from "./GameTrigger"
import { GameSaveEventResponse } from "./response/GameSaveEventResponse"

export type GameSaveTriggerCallback = (response: GameSaveEventResponse) => void

export class GameSaveTrigger extends GameTrigger {
    public register(_?: GameEvent, callback?: GameSaveTriggerCallback) {
        return super.register(GameEvents.SAVE, callback as GameTriggerCallback)
    }

    public constructor(_?: GameEvent, callback?: GameSaveTriggerCallback) {
        super(GameEvents.SAVE, callback as GameTriggerCallback)
    }

    public addEventListener(callback: GameSaveTriggerCallback) {
        super.addEventListener(callback as GameTriggerCallback)
    }
}
