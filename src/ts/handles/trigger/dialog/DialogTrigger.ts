/** @noSelfInFile **/
//@ts-nocheck

import { DialogEvent } from "../../../API/fields/events/DialogEvent"
import { Dialog } from "../../Dialog"
import { Trigger } from "../Trigger"
import { DialogEventResponse } from "./DialogEventResponse"

declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event

type Callback = (response: DialogEventResponse) => void

export class DialogTrigger extends Trigger {
    public register(whichDialog: Dialog, callback?: Callback): DialogEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return DialogEvent.getObject(
            TriggerRegisterDialogEvent(this.getHandle, whichDialog.getHandle)
        )
    }

    public constructor(whichDialog?: Dialog, callback?: Callback) {
        super()
        if (whichDialog && callback) {
            this.register(whichDialog, callback)
        }
    }

    public addEventListener(callback: Callback) {
        this.addAction(() => callback(new DialogEventResponse()))
    }
}
