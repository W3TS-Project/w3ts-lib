/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertWeaponType(i: integer): weapontype

export class WeaponType extends Field<weapontype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertWeaponType, id)
    }

    static fromHandle(handle: weapontype) {
        return this.getObject(handle) as WeaponType
    }
}
