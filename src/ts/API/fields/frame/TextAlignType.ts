/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertTextAlignType(i: integer): textaligntype

export class TextAlignType extends Field<textaligntype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertTextAlignType, id)
    }
}
