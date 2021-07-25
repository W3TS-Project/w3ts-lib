/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertDamageType(i: integer): damagetype

export class DamageType extends Field<damagetype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertDamageType(id), id)
    }
}
