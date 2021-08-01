/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { Timer } from "./Timer"

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
        super(CreateTimerDialog(t.getHandle() as timer))
    }

    public destroy() {
        DestroyTimerDialog(this.getHandle() as timerdialog)
        return this
    }

    public setTitle(title: string) {
        TimerDialogSetTitle(this.getHandle() as timerdialog, title)
        return this
    }

    public setTitleColor(red: integer, green: integer, blue: integer, alpha: integer) {
        TimerDialogSetTitleColor(
            this.getHandle() as timerdialog,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public setTimeColor(red: integer, green: integer, blue: integer, alpha: integer) {
        TimerDialogSetTimeColor(
            this.getHandle() as timerdialog,
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    public isDisplayed(): boolean {
        return IsTimerDialogDisplayed(this.getHandle() as timerdialog)
    }

    public display(display: boolean) {
        TimerDialogDisplay(this.getHandle() as timerdialog, display)
        return this
    }

    public setSpeed(speedMultFactor: real) {
        TimerDialogSetSpeed(this.getHandle() as timerdialog, speedMultFactor)
        return this
    }

    public setTimeRemaining(value: real) {
        TimerDialogSetRealTimeRemaining(this.getHandle() as timerdialog, value)
        return this
    }

    public static fromHandle(handle: timerdialog) {
        return this.getObject(handle) as TimerDialog
    }
}
