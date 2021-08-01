/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFrameEventType(i: integer): frameeventtype
declare function BlzGetTriggerFrameEvent(): frameeventtype

export class FrameEventType extends Field<frameeventtype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertFrameEventType(id), id)
    }

    public static fromHandle(handle: frameeventtype) {
        return this.getObject(handle) as FrameEventType
    }

    public static fromEvent() {
        return this.fromHandle(BlzGetTriggerFrameEvent())
    }
}
