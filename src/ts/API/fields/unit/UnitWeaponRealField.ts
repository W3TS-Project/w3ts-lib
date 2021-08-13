/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitWeaponRealField(i: integer): unitweaponrealfield

export class UnitWeaponRealField extends UnitField<unitweaponrealfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitWeaponRealField, rawCode, title)
    }
}
