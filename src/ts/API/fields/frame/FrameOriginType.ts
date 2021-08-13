/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertOriginFrameType(i: integer): originframetype

export class FrameOriginType extends Field<originframetype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertOriginFrameType, id)
    }
}
