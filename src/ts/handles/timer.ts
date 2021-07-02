/** @noSelfInFile **/
//@ts-nocheck

import { getHandledCallback } from "../ErrorHandling"
import { code, real } from "../Utils"
import { Handle } from "./handle"

declare function CreateTimer(): timer
declare function DestroyTimer(whichTimer: timer): void
declare let TimerStart: (
    whichTimer: timer,
    timeout: real,
    periodic: boolean,
    handlerFunc: () => void
) => void
declare function TimerGetElapsed(whichTimer: timer): real
declare function TimerGetRemaining(whichTimer: timer): real
declare function TimerGetTimeout(whichTimer: timer): real
declare function PauseTimer(whichTimer: timer): void
declare function ResumeTimer(whichTimer: timer): void
declare function GetExpiredTimer(): timer

const realTimerStart = TimerStart
TimerStart = (whichTimer: timer, timeout: real, periodic: boolean, handlerFunc: () => void) =>
    realTimerStart(whichTimer, timeout, periodic, getHandledCallback(handlerFunc))

export class Timer extends Handle<timer> {
    public constructor() {
        super(CreateTimer())
    }

    public get elapsed(): real {
        return TimerGetElapsed(this.getHandle)
    }

    public get remaining(): real {
        return TimerGetRemaining(this.getHandle)
    }

    public get timeout(): real {
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

    public start(timeout: real, periodic: boolean, handlerFunc: () => void) {
        TimerStart(this.getHandle, timeout, periodic, handlerFunc)
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
                Timer.fromExpired().pause().destroy()
            }
        })
    }

    public static setTimeout(time: real, call: code, isDestroy: boolean = false): Timer {
        return new Timer().setTimeout(time, call, isDestroy)
    }

    public setInterval(time: real, call: code): Timer {
        return this.start(time, true, call)
    }

    public static setInterval(time: real, call: code): Timer {
        return new Timer().setInterval(time, call)
    }
}