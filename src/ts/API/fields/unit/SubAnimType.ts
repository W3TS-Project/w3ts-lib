/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertSubAnimType(i: integer): subanimtype

export class SubAnimType extends Field<subanimtype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertSubAnimType, id)
    }
}
