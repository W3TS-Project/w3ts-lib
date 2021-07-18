/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertDialogEvent(i: integer): dialogevent

export class DialogEvent extends Event<dialogevent> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertDialogEvent(id), id)
    }

    public static fromHandle(handle: dialogevent): DialogEvent {
        return this.getObject(handle)
    }

    public static fromObject(object: DialogEvent): dialogevent {
        return this.getHandle(object)
    }
}
