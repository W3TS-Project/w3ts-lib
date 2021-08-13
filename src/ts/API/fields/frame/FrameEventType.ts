/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFrameEventType(i: integer): frameeventtype
declare function BlzGetTriggerFrameEvent(): frameeventtype

export class FrameEventType extends Field<frameeventtype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertFrameEventType, id)
    }

    static fromHandle(handle: frameeventtype) {
        return this.getObject(handle) as FrameEventType
    }

    static fromEvent() {
        return this.fromHandle(BlzGetTriggerFrameEvent())
    }
}
