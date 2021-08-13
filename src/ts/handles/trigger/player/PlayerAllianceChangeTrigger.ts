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
    register(
        whichPlayer: MapPlayer,
        whichAlliance: AllianceType,
        callback?: PlayerTriggerCallback
    ) {
        if (callback) this.addEventListener(callback)
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

    constructor(
        whichPlayer: MapPlayer,
        whichAlliance: AllianceType,
        callback?: PlayerTriggerCallback
    ) {
        super()
        this.register(whichPlayer, whichAlliance, callback)
    }

    addEventListener(callback: PlayerTriggerCallback) {
        this.addAction(() => callback(new PlayerEventResponse()))
    }
}
