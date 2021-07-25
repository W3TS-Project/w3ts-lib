/** @noSelfInFile **/
//@ts-nocheck

import { ErrorHandling } from "../ErrorHandling"
import { Handle } from "./Handle"

declare function CreateTimer(): timer
declare function DestroyTimer(whichTimer: timer): void
declare let TimerStart: (
    whichTimer: timer,
    timeout: real,
    periodic: boolean,
    handlerFunc: code
) => void
declare function TimerGetElapsed(whichTimer: timer): real
declare function TimerGetRemaining(whichTimer: timer): real
declare function TimerGetTimeout(whichTimer: timer): real
declare function PauseTimer(whichTimer: timer): void
declare function ResumeTimer(whichTimer: timer): void
declare function GetExpiredTimer(): timer

export class Timer extends Handle<timer> {
    public constructor() {
        super(CreateTimer())
    }

    public getElapsed(): real {
        return TimerGetElapsed(this.getHandle)
    }

    public getRemaining(): real {
        return TimerGetRemaining(this.getHandle)
    }

    public getTimeout(): real {
        return TimerGetTimeout(this.getHandle)
    }

    public destroy() {
        DestroyTimer(this.getHandle)
        return this
    }

    public pause() {
        PauseTimer(this.getHandle)
        return this
    }

    public resume() {
        ResumeTimer(this.getHandle)
        return this
    }

    public start(timeout: real, periodic: boolean, handlerFunc: code) {
        TimerStart(this.getHandle, timeout, periodic, ErrorHandling.getHandledCallback(handlerFunc))
        return this
    }

    public static fromHandle(handle: timer): Timer {
        return this.getObject(handle)
    }

    public static fromExpired(): Timer {
        return this.fromHandle(GetExpiredTimer())
    }

    public static fromObject(object: Timer): timer {
        return this.getHandle(object)
    }

    public setTimeout(time: real, call: code, isDestroy: boolean = false): Timer {
        return this.start(time, false, () => {
            call()
            if (isDestroy) {
                Timer.fromExpired()
                    .pause()
                    .destroy()
            }
        })
    }

    public static setTimeout(time: real, call: code, isDestroy: boolean = false): Timer {
        return new Timer().setTimeout(time, call, isDestroy)
    }

    public setInterval(time: real, call: code): Timer {
        return this.start(time, true, ErrorHandling.getHandledCallback(call))
    }

    public static setInterval(time: real, call: code): Timer {
        return new Timer().setInterval(time, call)
    }
}
