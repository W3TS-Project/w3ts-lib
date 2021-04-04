/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./handle"
import { Timer } from "./timer"

declare function CreateTimerDialog(t: timer): timerdialog
declare function DestroyTimerDialog(whichDialog: timerdialog): void
declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): void
declare function TimerDialogSetTitleColor(
    whichDialog: timerdialog,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function TimerDialogSetTimeColor(
    whichDialog: timerdialog,
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: number): void
declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): void
declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean
declare function TimerDialogSetRealTimeRemaining(
    whichDialog: timerdialog,
    timeRemaining: number
): void

export class TimerDialog extends Handle<timerdialog> {
    public constructor(t: Timer) {
        super(CreateTimerDialog(t.handle))
    }

    public get display() {
        return IsTimerDialogDisplayed(this.handle)
    }

    public set display(display: boolean) {
        TimerDialogDisplay(this.handle, display)
    }

    public destroy() {
        DestroyTimerDialog(this.handle)
    }

    public setSpeed(speedMultFactor: number) {
        TimerDialogSetSpeed(this.handle, speedMultFactor)
        return this
    }

    public setTimeRemaining(value: number) {
        TimerDialogSetRealTimeRemaining(this.handle, value)
        return this
    }

    public setTitle(title: string) {
        TimerDialogSetTitle(this.handle, title)
        return this
    }

    public static fromHandle(handle: timerdialog): TimerDialog {
        return this.getObject(handle)
    }
}
