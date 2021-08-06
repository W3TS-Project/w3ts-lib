/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { GameEvents } from "../../../fields/events/GameEvents"
import { Trigger } from "../Trigger"
import { GameEnterRegionEventResponse } from "./response/GameEnterRegionEventResponse"
import { GameLeaveRegionEventResponse } from "./response/GameLeaveRegionEventResponse"
import { GameSaveEventResponse } from "./response/GameSaveEventResponse"
import { GameStateEventResponse } from "./response/GameStateEventResponse"
import { GameTournamentFinishNowEventResponse } from "./response/GameTournamentFinishNowEventResponse"
import { GameTournamentFinishSoonEventResponse } from "./response/GameTournamentFinishSoonEventResponse"
import { GameTrackableHitEventResponse } from "./response/GameTrackableHitEventResponse"
import { GameTrackableTrackEventResponse } from "./response/GameTrackableTrackEventResponse"
import { GameVictoryEventResponse } from "./response/GameVictoryEventResponse"

declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event

export type GameEventResponse =
    | GameEnterRegionEventResponse
    | GameLeaveRegionEventResponse
    | GameSaveEventResponse
    | GameStateEventResponse
    | GameTournamentFinishNowEventResponse
    | GameTournamentFinishSoonEventResponse
    | GameTrackableHitEventResponse
    | GameTrackableTrackEventResponse
    | GameVictoryEventResponse
    | undefined

export type GameTriggerCallback = (response: GameEventResponse) => void

export class GameTrigger extends Trigger {
    protected event: GameEvent

    public register(whichGameEvent: GameEvent, callback?: GameTriggerCallback): GameEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterGameEvent(
                    this.getHandle() as trigger,
                    whichGameEvent.getHandle() as gameevent
                )
            )) as gameevent
        )
    }

    public constructor(whichGameEvent: GameEvent, callback?: GameTriggerCallback) {
        super()
        this.event = whichGameEvent
        if (callback) {
            this.register(whichGameEvent, callback)
        }
    }

    public getEvent() {
        return this.event
    }

    public addEventListener(callback: GameTriggerCallback) {
        let response: GameEventResponse
        if (this.event === GameEvents.VICTORY) {
            response = new GameVictoryEventResponse()
        } else if (this.event === GameEvents.TOURNAMENT_FINISH_NOW) {
            response = new GameTournamentFinishNowEventResponse()
        } else if (this.event === GameEvents.TOURNAMENT_FINISH_SOON) {
            response = new GameTournamentFinishSoonEventResponse()
        } else if (this.event === GameEvents.SAVE) {
            response = new GameSaveEventResponse()
        } else if (this.event === GameEvents.STATE_LIMIT) {
            response = new GameStateEventResponse()
        } else if (this.event === GameEvents.ENTER_REGION) {
            response = new GameEnterRegionEventResponse()
        } else if (this.event === GameEvents.LEAVE_REGION) {
            response = new GameLeaveRegionEventResponse()
        } else if (this.event === GameEvents.TRACKABLE_HIT) {
            response = new GameTrackableHitEventResponse()
        } else if (this.event === GameEvents.TRACKABLE_TRACK) {
            response = new GameTrackableTrackEventResponse()
        }
        this.addAction(() => callback(response))
    }
}