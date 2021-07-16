/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertWeaponType(i: integer): weapontype

export class WeaponType extends Field<weapontype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertWeaponType(id), id)
    }
}
