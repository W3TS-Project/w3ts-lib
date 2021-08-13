/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertArmorType(i: integer): armortype

export class ArmorType extends Field<armortype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertArmorType, id)
    }
}
