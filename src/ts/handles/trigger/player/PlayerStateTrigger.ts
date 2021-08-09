/** @noSelfInFile **/
//@ts-nocheck

import { LimitOperation } from "../../../API/fields/events/LimitOperation"
import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { PlayerState } from "../../../API/fields/player/PlayerState"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import {
    PlayerStateEventResponse,
    PlayerStateTriggerCallback
} from "./response/PlayerStateEventResponse"

declare function TriggerRegisterPlayerStateEvent(
    whichTrigger: trigger,
    whichPlayer: player,
    whichState: playerstate,
    opcode: limitop,
    limitval: real
): event

export class PlayerStateTrigger extends Trigger {
    public register(
        whichPlayer: MapPlayer,
        whichState: PlayerState,
        opcode: LimitOperation,
        limitval: real,
        callback?: PlayerStateTriggerCallback
    ) {
        if (callback) {
            this.addEventListener(callback)
        }
        return PlayerEvent.fromHandle(
            (<unknown>(
                TriggerRegisterPlayerStateEvent(
                    this.getHandle() as trigger,
                    whichPlayer.getHandle() as player,
                    whichState.getHandle() as playerstate,
                    opcode.getHandle() as limitop,
                    limitval
                )
            )) as playerevent
        )
    }

    public constructor(
        whichPlayer?: MapPlayer,
        whichState?: PlayerState,
        opcode?: LimitOperation,
        limitval?: real,
        callback?: PlayerStateTriggerCallback
    ) {
        super()
        if (whichPlayer && whichState && opcode && limitval && callback) {
            this.register(whichPlayer, whichState, opcode, limitval, callback)
        }
    }

    public addEventListener(callback: PlayerStateTriggerCallback) {
        this.addAction(() => callback(new PlayerStateEventResponse()))
    }
}
