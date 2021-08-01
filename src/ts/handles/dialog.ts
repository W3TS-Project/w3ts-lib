// /** @noSelfInFile **/
// //@ts-nocheck

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
    public constructor() {
        super(DialogCreate())
    }

    public addButton(buttonText: string, hotkey: integer = 0) {
        return DialogButton.add(this, buttonText, hotkey)
    }

    public addButtonQuit(doScoreScreen: boolean, buttonText: string, hotkey: integer = 0) {
        return DialogButton.addQuit(this, doScoreScreen, buttonText, hotkey)
    }

    public clear() {
        DialogClear(this.getHandle() as dialog)
        return this
    }

    public destroy() {
        DialogDestroy(this.getHandle() as dialog)
        return this
    }

    public display(whichPlayer: MapPlayer, flag: boolean) {
        DialogDisplay(whichPlayer.getHandle() as player, this.getHandle() as dialog, flag)
        return this
    }

    public setMessage(whichMessage: string) {
        DialogSetMessage(this.getHandle() as dialog, whichMessage)
        return this
    }

    public static fromHandle(handle: dialog) {
        return this.getObject(handle) as Dialog
    }

    public static getClicked() {
        return this.fromHandle(GetClickedDialog())
    }
}
