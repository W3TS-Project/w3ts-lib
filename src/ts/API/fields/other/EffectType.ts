/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertEffectType(i: integer): effecttype

export class EffectType extends Field<effecttype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertEffectType, id)
    }
}
