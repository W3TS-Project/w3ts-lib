/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertDialogEvent(i: integer): dialogevent

export class DialogEvent extends Event<dialogevent> {
    static convert(id: integer) {
        return this.proto_convert(ConvertDialogEvent, id)
    }

    static fromHandle(handle: dialogevent) {
        return this.getObject(handle) as DialogEvent
    }
}
