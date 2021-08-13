/** @noSelfInFile **/
//@ts-nocheck

import { DialogEvent } from "../../../API/fields/events/DialogEvent"
import { Dialog } from "../../Dialog"
import { Trigger } from "../Trigger"
import { DialogEventResponse } from "./DialogEventResponse"

declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event

export type DialogTriggerCallback = (response: DialogEventResponse) => void

export class DialogTrigger extends Trigger {
    register(whichDialog: Dialog, callback?: DialogTriggerCallback): DialogEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return DialogEvent.fromHandle(
            (<unknown>(
                TriggerRegisterDialogEvent(
                    this.getHandle() as trigger,
                    whichDialog.getHandle() as dialog
                )
            )) as dialogevent
        )
    }

    constructor(whichDialog: Dialog, callback?: DialogTriggerCallback) {
        super()
        this.register(whichDialog, callback)
    }

    addEventListener(callback: DialogTriggerCallback) {
        this.addAction(() => callback(new DialogEventResponse()))
    }
}
