/** @noSelfInFile **/
//@ts-nocheck

import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { PlayerChatEventResponse } from "./response/PlayerChatEventResponse"

declare function TriggerRegisterPlayerChatEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    chatMessageToDetect: string,
    exactMatchOnly: boolean
): event

export type PlayerChatTriggerCallback = (callback: PlayerChatEventResponse) => void

export class PlayerChatTrigger extends Trigger {
    public register(
        whichPlayer: MapPlayer,
        chatMessageToDetect: string,
        exactMatchOnly: boolean,
        callback?: PlayerChatTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        return PlayerEvent.fromHandle(
            (<unknown>(
                TriggerRegisterPlayerChatEvent(
                    this.getHandle() as trigger,
                    whichPlayer.getHandle() as player,
                    chatMessageToDetect,
                    exactMatchOnly
                )
            )) as playerevent
        )
    }

    public constructor(
        whichPlayer?: MapPlayer,
        chatMessageToDetect?: string,
        exactMatchOnly?: boolean,
        callback?: PlayerChatTriggerCallback
    ) {
        super()
        if (whichPlayer && chatMessageToDetect && exactMatchOnly) {
            this.register(whichPlayer, chatMessageToDetect, exactMatchOnly, callback)
        }
    }

    public addEventListener(callback: PlayerChatTriggerCallback) {
        this.addAction(() => callback(new PlayerChatEventResponse()))
    }
}
