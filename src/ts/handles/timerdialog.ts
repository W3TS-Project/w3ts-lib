/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../utils"
import { Handle } from "./handle"
import { Timer } from "./timer"

declare function CreateTimerDialog(t: timer): timerdialog
declare function DestroyTimerDialog(whichDialog: timerdialog): void
declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): void
declare function TimerDialogSetTitleColor(
    whichDialog: timerdialog,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function TimerDialogSetTimeColor(
    whichDialog: timerdialog,
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: real): void
declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): void
declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean
declare function TimerDialogSetRealTimeRemaining(
    whichDialog: timerdialog,
    timeRemaining: real
): void

export class TimerDialog extends Handle<timerdialog> {
    public constructor(t: Timer) {
        super(CreateTimerDialog(t.getHandle))
    }

    public destroy() {
        DestroyTimerDialog(this.getHandle)
    }

    public setTitle(title: string) {
        TimerDialogSetTitle(this.getHandle, title)
        return this
    }

    public setTitleColor(red: integer, green: integer, blue: integer, alpha: integer) {
        TimerDialogSetTitleColor(this.getHandle, red, green, blue, alpha)
        return this
    }

    public setTimeColor(red: integer, green: integer, blue: integer, alpha: integer) {
        TimerDialogSetTimeColor(this.getHandle, red, green, blue, alpha)
        return this
    }

    public get display() {
        return IsTimerDialogDisplayed(this.getHandle)
    }

    public set display(display: boolean) {
        TimerDialogDisplay(this.getHandle, display)
    }

    public setSpeed(speedMultFactor: real) {
        TimerDialogSetSpeed(this.getHandle, speedMultFactor)
        return this
    }

    public setTimeRemaining(value: real) {
        TimerDialogSetRealTimeRemaining(this.getHandle, value)
        return this
    }

    public static fromHandle(handle: timerdialog): TimerDialog {
        return this.getObject(handle)
    }

    public static fromObject(object: TimerDialog): timerdialog {
        return this.getHandle(object)
    }
}
