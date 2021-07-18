/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFrameEventType(i: integer): frameeventtype
declare function BlzGetTriggerFrameEvent(): frameeventtype

export class FrameEventType extends Field<frameeventtype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertFrameEventType(id), id)
    }

    public static fromHandle(handle: frameeventtype): FrameEventType {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(BlzGetTriggerFrameEvent())
    }

    public static fromObject(object: FrameEventType): frameeventtype {
        return this.getHandle(object)
    }
}
