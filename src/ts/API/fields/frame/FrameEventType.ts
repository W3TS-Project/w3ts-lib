/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFrameEventType(i: integer): frameeventtype

export class FrameEventType extends Field<frameeventtype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertFrameEventType(id), id)
    }
}
