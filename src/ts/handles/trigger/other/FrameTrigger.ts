/** @noSelfInFile **/
//@ts-nocheck

import { FrameEventType } from "../../../API/fields/frame/FrameEventType"
import { Frame } from "../../Frame"
import { Trigger } from "../Trigger"
import { FrameEventResponse } from "./FrameEventResponse"

declare function BlzTriggerRegisterFrameEvent(
    whichTrigger: trigger,
    frame: framehandle,
    eventId: frameeventtype
): event

export type FrameTriggerCallback = (response: FrameEventResponse) => void

export class FrameTrigger extends Trigger {
    register(frame: Frame, eventId: FrameEventType, callback?: FrameTriggerCallback) {
        if (callback) {
            this.addEventListener(callback)
        }
        return FrameEventType.fromHandle(
            (<unknown>(
                BlzTriggerRegisterFrameEvent(
                    this.getHandle() as trigger,
                    frame.getHandle() as framehandle,
                    eventId.getHandle() as frameeventtype
                )
            )) as frameeventtype
        )
    }

    constructor(frame: Frame, eventId: FrameEventType, callback?: FrameTriggerCallback) {
        super()
        this.register(frame, eventId, callback)
    }

    addEventListener(callback: FrameTriggerCallback) {
        this.addAction(() => callback(new FrameEventResponse()))
    }
}
