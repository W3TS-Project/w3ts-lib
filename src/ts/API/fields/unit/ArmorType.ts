/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertArmorType(i: integer): armortype

export class ArmorType extends Field<armortype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertArmorType(id), id)
    }
}
