/** @noSelfInFile **/
//@ts-nocheck

import { integer } from "../Utils"
import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"

declare function DialogCreate(): dialog
declare function DialogDestroy(whichDialog: dialog): void
declare function DialogClear(whichDialog: dialog): void
declare function DialogSetMessage(whichDialog: dialog, messageText: string): void
declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: integer): button
declare function DialogAddQuitButton(
    whichDialog: dialog,
    doScoreScreen: boolean,
    buttonText: string,
    hotkey: integer
): button
declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): void
declare function GetClickedButtion(): button
declare function GetClickedDialog(): dialog

export class DialogButton extends Handle<button> {
    public constructor(
        whichDialog: Dialog,
        text: string,
        hotkey: integer = 0,
        quit: boolean = false,
        score: boolean = false
    ) {
        if (!quit) {
            super(DialogAddButton(whichDialog.getHandle, text, hotkey))
        } else {
            super(DialogAddQuitButton(whichDialog.getHandle, score, text, hotkey))
        }
    }

    public static fromHandle(handle: button): DialogButton {
        return this.getObject(handle)
    }

    public static getClicked() {
        return this.fromHandle(GetClickedButtion())
    }

    public static fromObject(handleObject: DialogButton): button {
        return this.getHandle(handleObject)
    }
}

export class Dialog extends Handle<dialog> {
    public constructor() {
        super(DialogCreate())
    }

    public addButton(
        text: string,
        hotkey: integer = 0,
        quit: boolean = false,
        score: boolean = false
    ) {
        return new DialogButton(this, text, hotkey, quit, score)
    }

    public clear() {
        DialogClear(this.getHandle)
        return this
    }

    public destroy() {
        DialogDestroy(this.getHandle)
    }

    public display(whichPlayer: MapPlayer, flag: boolean) {
        DialogDisplay(whichPlayer.getHandle, this.getHandle, flag)
        return this
    }

    public setMessage(whichMessage: string) {
        DialogSetMessage(this.getHandle, whichMessage)
        return this
    }

    public static fromHandle(handle: dialog): Dialog {
        return this.getObject(handle)
    }

    public static getClicked() {
        return this.fromHandle(GetClickedDialog())
    }

    public static fromObject(handleObject: Dialog): dialog {
        return this.getHandle(handleObject)
    }
}
