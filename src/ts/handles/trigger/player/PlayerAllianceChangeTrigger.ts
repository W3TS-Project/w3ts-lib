/** @noSelfInFile **/
//@ts-nocheck

import { PlayerEvent } from "../../../API/fields/events/PlayerEvent"
import { AllianceType } from "../../../API/fields/player/AllianceType"
import { MapPlayer } from "../../MapPlayer"
import { Trigger } from "../Trigger"
import { PlayerTriggerCallback } from "./PlayerTriggers"
import { PlayerEventResponse } from "./response/PlayerEventResponse"

declare function TriggerRegisterPlayerAllianceChange(
    whichTrigger: trigger,
    whichPlayer: player,
    whichAlliance: alliancetype
): event

export class PlayerAllianceChangeTrigger extends Trigger {
    public register(
        whichPlayer: MapPlayer,
        whichAlliance: AllianceType,
        callback?: PlayerTriggerCallback
    ) {
        if (callback) {
        }
        return PlayerEvent.fromHandle(
            (<unknown>(
                TriggerRegisterPlayerAllianceChange(
                    this.getHandle() as trigger,
                    whichPlayer.getHandle() as player,
                    whichAlliance.getHandle() as alliancetype
                )
            )) as playerevent
        )
    }

    public constructor(
        whichPlayer?: MapPlayer,
        whichAlliance?: AllianceType,
        callback?: PlayerTriggerCallback
    ) {
        super()
        if (whichPlayer && whichAlliance && callback) {
            this.register(whichPlayer, whichAlliance, callback)
        }
    }

    public addEventListener(callback: PlayerTriggerCallback) {
        this.addAction(() => callback(new PlayerEventResponse()))
    }
}
