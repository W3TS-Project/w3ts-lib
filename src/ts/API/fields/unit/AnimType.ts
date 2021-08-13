/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertAnimType(i: integer): animtype

export class AnimType extends Field<animtype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertAnimType, id)
    }
}
