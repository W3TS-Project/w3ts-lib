/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertDamageType(i: integer): damagetype

export class DamageType extends Field<damagetype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertDamageType, id)
    }

    static fromHandle(handle: damagetype) {
        return this.getObject(handle) as DamageType
    }
}
