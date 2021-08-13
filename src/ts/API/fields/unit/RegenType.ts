/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertRegenType(i: integer): regentype

export class RegenType extends Field<regentype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertRegenType, id)
    }
}
