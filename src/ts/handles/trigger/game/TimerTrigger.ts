/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Timer } from "../../Timer"
import { Trigger } from "../Trigger"

declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event

export class TimerTrigger extends Trigger {
    register(t: Timer, callback?: code) {
        if (callback) this.addEventListener(callback)
        return GameEvent.getObject(
            (<unknown>(
                TriggerRegisterTimerExpireEvent(this.getHandle() as trigger, t.getHandle() as timer)
            )) as gameevent
        )
    }

    constructor(t?: Timer, callback?: code) {
        super()
        if (t) {
            this.register(t, callback)
        }
    }

    addEventListener(callback: code) {
        this.addAction(callback)
    }
}
