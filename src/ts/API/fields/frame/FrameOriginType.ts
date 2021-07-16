/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertOriginFrameType(i: integer): originframetype

export class FrameOriginType extends Field<originframetype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertOriginFrameType(id), id)
    }
}
