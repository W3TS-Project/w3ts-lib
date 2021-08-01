/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertDialogEvent(i: integer): dialogevent

export class DialogEvent extends Event<dialogevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertDialogEvent(id), id)
    }

    public static fromHandle(handle: dialogevent) {
        return this.getObject(handle) as DialogEvent
    }
}
