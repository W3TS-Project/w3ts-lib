/** @noSelfInFile **/
//@ts-nocheck

import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { PlayerEvents } from "../../../fields/events/PlayerEvents"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { PlayerEventResponse } from "./response/PlayerEventResponse"
import { PlayerMouseEventResponse } from "./response/PlayerMouseEventResponse"
import { PlayerStateEventResponse } from "./response/PlayerStateEventResponse"
import { PlayerSyncDataEventResponse } from "./response/PlayerSyncDataEventResponse"

declare function TriggerRegisterPlayerEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerEvent: playerevent
): event

export type PlayerEventResponseType =
    | PlayerEventResponse
    | PlayerMouseEventResponse
    | PlayerStateEventResponse
    | PlayerSyncDataEventResponse

export type PlayerTriggerCallback = (response: PlayerEventResponse) => void

const getPlayerTriggerClass = <T extends PlayerEventResponseType, R extends (response: T) => void>(
    event: PlayerEvent,
    func: () => T
) =>
    class extends Trigger {
        event: PlayerEvent

        register(whichPlayer: MapPlayer, callback?: R) {
            if (callback) {
                this.addEventListener(callback)
            }
            return PlayerEvent.fromHandle(
                (<unknown>(
                    TriggerRegisterPlayerEvent(
                        this.getHandle() as trigger,
                        whichPlayer.getHandle() as player,
                        event.getHandle() as playerevent
                    )
                )) as playerevent
            )
        }

        constructor(whichPlayer: MapPlayer, callback?: R) {
            super()
            this.event = event
            this.register(whichPlayer, callback)
        }

        addEventListener(callback: R) {
            this.addAction(() => callback(func()))
        }
    }

const defaultResponse = () => new PlayerEventResponse()

export const PlayerAllianceChangedTrigger = getPlayerTriggerClass(
    PlayerEvents.ALLIANCE_CHANGED,
    defaultResponse
)
export const PlayerArrowDownDownTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_DOWN_DOWN,
    defaultResponse
)
export const PlayerArrowDownUpTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_DOWN_UP,
    defaultResponse
)
export const PlayerArrowUpDownTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_UP_DOWN,
    defaultResponse
)
export const PlayerArrowUpUpTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_UP_UP,
    defaultResponse
)
export const PlayerArrowLeftDownTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_LEFT_UP,
    defaultResponse
)
export const PlayerArrowLeftUpTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_LEFT_UP,
    defaultResponse
)
export const PlayerArrowRightDownTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_RIGHT_DOWN,
    defaultResponse
)
export const PlayerArrowRightUpTrigger = getPlayerTriggerClass(
    PlayerEvents.ARROW_RIGHT_UP,
    defaultResponse
)
export const PlayerChatEventTrigger = getPlayerTriggerClass(PlayerEvents.CHAT, defaultResponse)
export const PlayerDefeatTrigger = getPlayerTriggerClass(PlayerEvents.DEFEAT, defaultResponse)
export const PlayerEndCinematicTrigger = getPlayerTriggerClass(
    PlayerEvents.END_CINEMATIC,
    defaultResponse
)
export const PlayerKeyDownTrigger = getPlayerTriggerClass(PlayerEvents.KEY_DOWN, defaultResponse)
export const PlayerKeyEventTrigger = getPlayerTriggerClass(PlayerEvents.KEY, defaultResponse)
export const PlayerKeyUpTrigger = getPlayerTriggerClass(PlayerEvents.KEY_UP, defaultResponse)
export const PlayerLeaveTrigger = getPlayerTriggerClass(PlayerEvents.LEAVE, defaultResponse)
export const PlayerMouseDownTrigger = getPlayerTriggerClass(
    PlayerEvents.MOUSE_DOWN,
    () => new PlayerMouseEventResponse()
)
export const PlayerMouseMoveTrigger = getPlayerTriggerClass(
    PlayerEvents.MOUSE_MOVE,
    () => new PlayerMouseEventResponse()
)
export const PlayerMouseUpTrigger = getPlayerTriggerClass(
    PlayerEvents.MOUSE_UP,
    () => new PlayerMouseEventResponse()
)
export const PlayerStateLimitTrigger = getPlayerTriggerClass(
    PlayerEvents.STATE_LIMIT,
    () => new PlayerStateEventResponse()
)
export const PlayerSyncDataTrigger = getPlayerTriggerClass(
    PlayerEvents.SYNC_DATA,
    () => new PlayerSyncDataEventResponse()
)
export const PlayerVictoryTrigger = getPlayerTriggerClass(PlayerEvents.VICTORY, defaultResponse)
