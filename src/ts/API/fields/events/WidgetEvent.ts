/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertWidgetEvent(i: integer): widgetevent

export class WidgetEvent extends Event<widgetevent> {
    static convert(id: integer) {
        return this.proto_convert(ConvertWidgetEvent, id)
    }

    static fromHandle(handle: widgetevent) {
        return this.getObject(handle) as WidgetEvent
    }
}
