// /** @noSelfInFile **/
// //@ts-nocheck

import { WidgetEvent } from "../../../API/fields/events/WidgetEvent"
import { Widget } from "../../Widget"
import { Trigger } from "../Trigger"
import { WidgetDeathEventResponse } from "./WidgetDeathEventResponse"

declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event

export type WidgetDeathTriggerCallback = (response: WidgetDeathEventResponse) => void

export class WidgetDeathTrigger extends Trigger {
    register(whichWidget: Widget, callback?: WidgetDeathTriggerCallback) {
        if (callback) {
            this.addEventListener(callback)
        }
        return WidgetEvent.fromHandle(
            (<unknown>(
                TriggerRegisterDeathEvent(
                    this.getHandle() as trigger,
                    whichWidget.getHandle() as widget
                )
            )) as widgetevent
        )
    }

    constructor(whichWidget: Widget, callback?: WidgetDeathTriggerCallback) {
        super()
        this.register(whichWidget, callback)
    }

    addEventListener(callback: WidgetDeathTriggerCallback) {
        return this.addAction(() => callback(new WidgetDeathEventResponse()))
    }
}
