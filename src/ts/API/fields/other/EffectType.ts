/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertEffectType(i: integer): effecttype

export class EffectType extends Field<effecttype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertEffectType(id), id)
    }
}
