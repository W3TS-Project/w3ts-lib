/** @noSelfInFile **/
//@ts-nocheck

import { Dialog } from "./Dialog"
import { Handle } from "./Handle"

declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: integer): button
declare function DialogAddQuitButton(
    whichDialog: dialog,
    doScoreScreen: boolean,
    buttonText: string,
    hotkey: integer
): button
declare function GetClickedButton(): button

export class DialogButton extends Handle<button> {
    text: string
    hotkey: integer
    doScoreScreen?: boolean

    constructor(
        whichDialog: Dialog,
        buttonText: string,
        hotkey: integer = 0,
        quit: boolean = false,
        doScoreScreen: boolean = false
    ) {
        hotkey = Math.floor(hotkey)
        const handle = whichDialog.getHandle() as dialog
        if (!quit) {
            super(DialogAddButton(handle, buttonText, hotkey))
        } else {
            super(DialogAddQuitButton(handle, doScoreScreen, buttonText, hotkey))
            this.doScoreScreen = doScoreScreen
        }
        this.text = buttonText
        this.hotkey = hotkey
    }

    static add(whichDialog: Dialog, buttonText: string, hotkey: integer = 0) {
        return new this(whichDialog, buttonText, hotkey)
    }

    static addQuit(
        whichDialog: Dialog,
        doScoreScreen: boolean,
        buttonText: string,
        hotkey: integer = 0
    ) {
        return new this(whichDialog, buttonText, hotkey, true, doScoreScreen)
    }

    static fromHandle(handle: button) {
        return this.getObject(handle) as DialogButton
    }

    static getClicked() {
        return this.fromHandle(GetClickedButton())
    }
}
