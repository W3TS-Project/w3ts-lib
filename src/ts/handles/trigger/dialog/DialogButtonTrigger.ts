/** @noSelfInFile **/
//@ts-nocheck

import { DialogEvent } from "../../../API/fields/events/DialogEvent"
import { DialogButton } from "../../DialogButton"
import { Trigger } from "../Trigger"
import { DialogButtonEventResponse } from "./DialogButtonEventResponse"

declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event

export type DialogButtonTriggerCallback = (response: DialogButtonEventResponse) => void

export class DialogButtonTrigger extends Trigger {
    register(whichButton: DialogButton, callback?: DialogButtonTriggerCallback): DialogEvent {
        if (callback) {
            this.addEventListener(callback)
        }
        return DialogEvent.fromHandle(
            (<unknown>(
                TriggerRegisterDialogButtonEvent(
                    this.getHandle() as trigger,
                    whichButton.getHandle() as button
                )
            )) as dialogevent
        )
    }

    constructor(whichButton: DialogButton, callback?: DialogButtonTriggerCallback) {
        super()
        this.register(whichButton, callback)
    }

    addEventListener(callback: DialogButtonTriggerCallback) {
        this.addAction(() => callback(new DialogButtonEventResponse()))
    }
}
