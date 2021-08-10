/** @noSelfInFile **/
//@ts-nocheck

import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { OsKeyType } from "../../../API/fields/other/OsKeyType"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { PlayerKeyEventResponse } from "./response/PlayerKeyEventResponse"

declare function BlzTriggerRegisterPlayerKeyEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    key: oskeytype,
    metaKey: integer,
    keyDown: boolean
): event

export type PlayerKeyTriggerCallback = (response: PlayerKeyEventResponse) => void

export class PlayerKeyTrigger extends Trigger {
    public register(
        whichPlayer: MapPlayer,
        key: OsKeyType,
        metaKey: integer,
        keyDown: boolean,
        callback?: PlayerKeyTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        return PlayerEvent.fromHandle(
            (<unknown>(
                BlzTriggerRegisterPlayerKeyEvent(
                    this.getHandle() as trigger,
                    whichPlayer.getHandle() as player,
                    key.getHandle() as oskeytype,
                    Math.floor(metaKey),
                    keyDown
                )
            )) as playerevent
        )
    }

    public constructor(
        whichPlayer?: MapPlayer,
        key?: OsKeyType,
        metaKey?: integer,
        keyDown?: boolean,
        callback?: PlayerKeyTriggerCallback
    ) {
        super()
        if (whichPlayer && key && metaKey && keyDown) {
            this.register(whichPlayer, key, metaKey, keyDown, callback)
        }
    }

    public addEventListener(callback: PlayerKeyTriggerCallback) {
        this.addAction(() => callback(new PlayerKeyEventResponse()))
    }
}
