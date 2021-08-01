/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertWidgetEvent(i: integer): widgetevent

export class WidgetEvent extends Event<widgetevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertWidgetEvent(id), id)
    }

    public static fromHandle(handle: widgetevent) {
        return this.getObject(handle) as WidgetEvent
    }
}
