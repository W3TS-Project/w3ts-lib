/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertWidgetEvent(i: integer): widgetevent

export class WidgetEvent extends Event<widgetevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertWidgetEvent(id), id)
    }

    public static fromHandle(handle: widgetevent): WidgetEvent {
        return this.getObject(handle)
    }

    public static fromObject(object: WidgetEvent): widgetevent {
        return this.getHandle(object)
    }
}
