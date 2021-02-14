/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../main"
import { Handle } from "./handle"
import { MapPlayer } from "./player"

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

export class DialogButton extends Handle<button> {
    constructor(
        whichDialog: Dialog,
        text: string,
        hotkey: integer = 0,
        quit: boolean = false,
        score: boolean = false
    ) {
        if (Handle.initFromHandle()) {
            super()
        } else if (!quit) {
            super(DialogAddButton(whichDialog.handle, text, hotkey))
        } else {
            super(DialogAddQuitButton(whichDialog.handle, score, text, hotkey))
        }
    }

    static fromHandle(handle: button): DialogButton {
        return this.getObject(handle)
    }
}

export class Dialog extends Handle<dialog> {
    constructor() {
        super(Handle.initFromHandle() ? undefined : DialogCreate())
    }

    addButton(
        text: string,
        hotkey: integer = 0,
        quit: boolean = false,
        score: boolean = false
    ) {
        return new DialogButton(this, text, hotkey, quit, score)
    }

    clear() {
        DialogClear(this.handle)
        return this
    }

    destroy() {
        DialogDestroy(this.handle)
    }

    display(whichPlayer: MapPlayer, flag: boolean) {
        DialogDisplay(whichPlayer.handle, this.handle, flag)
        return this
    }

    setMessage(whichMessage: string) {
        DialogSetMessage(this.handle, whichMessage)
        return this
    }

    static fromHandle(handle: dialog): Dialog {
        return this.getObject(handle)
    }
}
