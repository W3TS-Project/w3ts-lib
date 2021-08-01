/** @noSelfInFile **/
//@ts-nocheck

import { DialogEvent } from "../../../API/fields/events/DialogEvent"
import { DialogButton } from "../../DialogButton"
import { Trigger } from "../Trigger"
import { DialogButtonEventResponse } from "./DialogButtonEventResponse"

declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event

type Callback = (response: DialogButtonEventResponse) => void

export class DialogButtonTrigger extends Trigger {
    public register(whichButton: DialogButton, callback?: Callback): DialogEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return DialogEvent.getObject(
            TriggerRegisterDialogButtonEvent(this.getHandle, whichButton.getHandle)
        )
    }

    public constructor(whichButton?: DialogButton, callback?: Callback) {
        super()
        if (whichButton && callback) {
            this.register(whichButton, callback)
        }
    }

    public addEventListener(callback: Callback) {
        this.addAction(() => callback(new DialogButtonEventResponse()))
    }
}
