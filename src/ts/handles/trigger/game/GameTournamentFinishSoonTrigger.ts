import { GameEvent } from "../../../API/fields/events/GameEvent"
import { GameEvents } from "../../../fields/events/GameEvents"
import { GameTrigger, GameTriggerCallback } from "./GameTrigger"
import { GameTournamentFinishSoonEventResponse } from "./response/GameTournamentFinishSoonEventResponse"

export type GameTournamentFinishSoonTriggerCallback = (
    response: GameTournamentFinishSoonEventResponse
) => void

export class GameTournamentFinishSoonTrigger extends GameTrigger {
    public register(_?: GameEvent, callback?: GameTournamentFinishSoonTriggerCallback) {
        return super.register(GameEvents.TOURNAMENT_FINISH_SOON, callback as GameTriggerCallback)
    }

    public constructor(_?: GameEvent, callback?: GameTournamentFinishSoonTriggerCallback) {
        super(GameEvents.TOURNAMENT_FINISH_SOON, callback as GameTriggerCallback)
    }

    public addEventListener(callback: GameTournamentFinishSoonTriggerCallback) {
        super.addEventListener(callback as GameTriggerCallback)
    }
}
