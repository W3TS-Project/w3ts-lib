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

const getGameTriggerClass = <T extends GameEventResponse, R extends (response: T) => void>(
    event: GameEvent,
    func: () => T
) =>
    class extends Trigger {
        event: GameEvent

        register(callback?: R) {
            if (callback) {
                this.addEventListener(callback)
            }
            return GameEvent.fromHandle(
                (<unknown>(
                    TriggerRegisterGameEvent(
                        this.getHandle() as trigger,
                        event.getHandle() as gameevent
                    )
                )) as gameevent
            )
        }

        constructor(callback?: R) {
            super()
            this.event = event
            if (callback) {
                this.register(callback)
            }
        }

        addEventListener(callback: R) {
            this.addAction(() => callback(func()))
        }
    }

export const GameEnterRegionTrigger = getGameTriggerClass(
    GameEvents.ENTER_REGION,
    () => new GameEnterRegionEventResponse()
)
export const GameLeaveRegionTrigger = getGameTriggerClass(
    GameEvents.LEAVE_REGION,
    () => new GameLeaveRegionEventResponse()
)
export const GameSaveTrigger = getGameTriggerClass(
    GameEvents.SAVE,
    () => new GameSaveEventResponse()
)
export const GameStateLimitTrigger = getGameTriggerClass(
    GameEvents.STATE_LIMIT,
    () => new GameStateEventResponse()
)
export const GameTournamentFinishNowTrigger = getGameTriggerClass(
    GameEvents.TOURNAMENT_FINISH_NOW,
    () => new GameTournamentFinishNowEventResponse()
)
export const GameTournamentFinishSoonTrigger = getGameTriggerClass(
    GameEvents.TOURNAMENT_FINISH_SOON,
    () => new GameTournamentFinishSoonEventResponse()
)
export const GameTrackableHitTrigger = getGameTriggerClass(
    GameEvents.TRACKABLE_HIT,
    () => new GameTrackableHitEventResponse()
)
export const GameTrackableTrackTrigger = getGameTriggerClass(
    GameEvents.TRACKABLE_TRACK,
    () => new GameTrackableTrackEventResponse()
)
export const GameVictoryTrigger = getGameTriggerClass(
    GameEvents.VICTORY,
    () => new GameVictoryEventResponse()
)
export const GameBuildSubmenuTrigger = getGameTriggerClass(
    GameEvents.BUILD_SUBMENU,
    () => undefined
)
export const GameCustomUIFrameTrigger = getGameTriggerClass(
    GameEvents.CUSTOM_UI_FRAME,
    () => undefined
)
export const GameEndLevelTrigger = getGameTriggerClass(GameEvents.END_LEVEL, () => undefined)
export const GameLoadedTrigger = getGameTriggerClass(GameEvents.LOADED, () => undefined)
export const GameShowSkillTrigger = getGameTriggerClass(GameEvents.SHOW_SKILL, () => undefined)
export const GameTimerExpiredTrigger = getGameTriggerClass(
    GameEvents.TIMER_EXPIRED,
    () => undefined
)
export const GameVariableLimitTrigger = getGameTriggerClass(
    GameEvents.VARIABLE_LIMIT,
    () => undefined
)
