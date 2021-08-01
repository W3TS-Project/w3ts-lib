/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../API/fields/events/GameEvent"
import { Timer } from "../../Timer"
import { Trigger } from "../Trigger"

declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event

export class TimerTrigger extends Trigger {
    public register(t: Timer): GameEvent {
        return GameEvent.getObject(
            (<unknown>(
                TriggerRegisterTimerExpireEvent(this.getHandle() as trigger, t.getHandle() as timer)
            )) as gameevent
        )
    }

    public constructor(t?: Timer) {
        super()
        if (t) {
            this.register(t)
        }
    }
}
