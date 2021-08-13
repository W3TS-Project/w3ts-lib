/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Trigger } from "../Trigger"

declare function TriggerRegisterTimerEvent(
    whichTrigger: trigger,
    timeout: real,
    periodic: boolean
): event

export class TimeTrigger extends Trigger {
    register(timeout: real, periodic: boolean, callback?: code) {
        if (callback) this.addEventListener(callback)
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterTimerEvent(this.getHandle() as trigger, timeout, periodic)
            )) as gameevent
        )
    }

    constructor(timeout: real, periodic: boolean, callback?: code) {
        super()
        this.register(timeout, periodic, callback)
    }

    addEventListener(callback: code) {
        this.addAction(callback)
    }
}
