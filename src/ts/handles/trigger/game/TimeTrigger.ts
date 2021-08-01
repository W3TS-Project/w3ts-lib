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
    public register(timeout: real, periodic: boolean): GameEvent {
        return GameEvent.fromHandle(
            (<unknown>(
                TriggerRegisterTimerEvent(this.getHandle() as trigger, timeout, periodic)
            )) as gameevent
        )
    }

    public constructor(timeout?: real, periodic?: boolean) {
        super()
        if (timeout && periodic) {
            this.register(timeout, periodic)
        }
    }
}
