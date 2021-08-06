/** @noSelfInFile **/
//@ts-nocheck

import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { PlayerEventResponse } from "./response/PlayerEventResponse"

declare function TriggerRegisterPlayerEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichPlayerEvent: playerevent
): event

export type PlayerEventResponseType = PlayerEventResponse

export type PlayerTriggerCallback = (response: PlayerEventResponseType) => void

export class PlayerTrigger extends Trigger {
    protected event: PlayerEvent

    public register(
        whichPlayer: MapPlayer,
        whichPlayerEvent: PlayerEvent,
        callback?: PlayerTriggerCallback
    ): PlayerEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return PlayerEvent.fromHandle(
            (<unknown>(
                TriggerRegisterPlayerEvent(
                    this.getHandle() as trigger,
                    whichPlayer.getHandle() as player,
                    whichPlayerEvent.getHandle() as playerevent
                )
            )) as playerevent
        )
    }

    public constructor(
        whichPlayer: MapPlayer,
        whichPlayerEvent: PlayerEvent,
        callback?: PlayerTriggerCallback
    ) {
        super()
        this.event = whichPlayerEvent
        if (callback) {
            this.register(whichPlayer, whichPlayerEvent, callback)
        }
    }

    public getEvent() {
        return this.event
    }

    public addEventListener(callback: PlayerTriggerCallback) {
        let response: PlayerEventResponseType
        this.addAction(() => callback(response))
    }
}
