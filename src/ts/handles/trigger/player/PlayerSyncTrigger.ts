/** @noSelfInFile **/
//@ts-nocheck

import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import {
    PlayerSyncDataEventResponse,
    PlayerSyncTriggerCallback
} from "./response/PlayerSyncDataEventResponse"

declare function BlzTriggerRegisterPlayerSyncEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    prefix: string,
    fromServer: boolean
): event

export class PlayerSyncTrigger extends Trigger {
    public register(
        whichPlayer: MapPlayer,
        prefix: string,
        fromServer: boolean,
        callback?: PlayerSyncTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        return PlayerEvent.fromHandle(
            (<unknown>(
                BlzTriggerRegisterPlayerSyncEvent(
                    this.getHandle() as trigger,
                    whichPlayer.getHandle() as player,
                    prefix,
                    fromServer
                )
            )) as playerevent
        )
    }

    public constructor(
        whichPlayer?: MapPlayer,
        prefix?: string,
        fromServer?: boolean,
        callback?: PlayerSyncTriggerCallback
    ) {
        super()
        if (whichPlayer && prefix && fromServer && callback) {
            this.register(whichPlayer, prefix, fromServer, callback)
        }
    }

    public addEventListener(callback: PlayerSyncTriggerCallback) {
        this.addAction(() => callback(new PlayerSyncDataEventResponse()))
    }
}
