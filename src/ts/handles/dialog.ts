/** @noSelfInFile **/
//@ts-nocheck

import { AllPlayers } from "../globals/constants"
import { DialogButton } from "./DialogButton"
import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"

declare function DialogCreate(): dialog
declare function DialogDestroy(whichDialog: dialog): void
declare function DialogClear(whichDialog: dialog): void
declare function DialogSetMessage(whichDialog: dialog, messageText: string): void
declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): void
declare function GetClickedDialog(): dialog

export class Dialog extends Handle<dialog> {
    cleared = false
    message = ""
    displayed = new Map<MapPlayer, boolean>()

    constructor() {
        super(DialogCreate())
        AllPlayers.forEach(v => this.displayed.set(v, false))
    }

    addButton(buttonText: string, hotkey: integer = 0) {
        return DialogButton.add(this, buttonText, hotkey)
    }

    addButtonQuit(doScoreScreen: boolean, buttonText: string, hotkey: integer = 0) {
        return DialogButton.addQuit(this, doScoreScreen, buttonText, hotkey)
    }

    clear() {
        DialogClear(this.getHandle() as dialog)
        this.cleared = true
        return this
    }

    destroy() {
        DialogDestroy(this.getHandle() as dialog)
        super.destroy()
    }

    display(whichPlayer: MapPlayer, flag: boolean) {
        DialogDisplay(whichPlayer.getHandle() as player, this.getHandle() as dialog, flag)
        this.displayed.set(whichPlayer, flag)
        return this
    }

    setMessage(whichMessage: string) {
        DialogSetMessage(this.getHandle() as dialog, whichMessage)
        this.message = whichMessage
        return this
    }

    static fromHandle(handle: dialog) {
        return this.getObject(handle) as Dialog
    }

    static getClicked() {
        return this.fromHandle(GetClickedDialog())
    }
}
