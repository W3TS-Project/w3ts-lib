/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertDefenseType(i: integer): defensetype

export class DefenseType extends Field<defensetype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertDefenseType, id)
    }
}
