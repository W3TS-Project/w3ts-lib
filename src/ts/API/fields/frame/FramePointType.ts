/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFramePointType(i: integer): framepointtype

export class FramePointType extends Field<framepointtype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertFramePointType, id)
    }
}
