// /** @noSelfInFile **/
// //@ts-nocheck

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

export class TimerResponse {
    timer = Timer.fromExpired()
}

export type TimerCallback = ((response: TimerResponse) => void) | null | undefined

export class Timer extends Handle<timer> {
    constructor() {
        super(CreateTimer())
    }

    getElapsed(): real {
        return TimerGetElapsed(this.getHandle() as timer)
    }

    getRemaining(): real {
        return TimerGetRemaining(this.getHandle() as timer)
    }

    getTimeout(): real {
        return TimerGetTimeout(this.getHandle() as timer)
    }

    destroy() {
        DestroyTimer(this.getHandle() as timer)
        return this
    }

    pause() {
        PauseTimer(this.getHandle() as timer)
        return this
    }

    resume() {
        ResumeTimer(this.getHandle() as timer)
        return this
    }

    start(timeout: real, periodic: boolean, handlerFunc: TimerCallback) {
        let callback
        if (handlerFunc) {
            callback = ErrorHandling.getHandledCallback(() => handlerFunc(new TimerResponse()))
        }
        TimerStart(this.getHandle() as timer, timeout, periodic, callback)
        return this
    }

    static fromHandle(handle: timer): Timer {
        return this.getObject(handle) as Timer
    }

    static fromExpired(): Timer {
        return this.fromHandle(GetExpiredTimer())
    }

    setTimeout(time: real, call: code, isDestroy: boolean = false): Timer {
        return this.start(time, false, () => {
            if (call) call()
            if (isDestroy) {
                Timer.fromExpired()
                    .pause()
                    .destroy()
            }
        })
    }

    static setTimeout(time: real, call: code, isDestroy: boolean = false): Timer {
        return new Timer().setTimeout(time, call, isDestroy)
    }

    setInterval(time: real, call: code): Timer {
        return this.start(time, true, call)
    }

    static setInterval(time: real, call: code): Timer {
        return new Timer().setInterval(time, call)
    }
}
