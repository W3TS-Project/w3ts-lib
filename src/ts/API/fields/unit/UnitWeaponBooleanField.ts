/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitWeaponBooleanField(i: integer): unitweaponbooleanfield

export class UnitWeaponBooleanField extends UnitField<unitweaponbooleanfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitWeaponBooleanField, rawCode, title)
    }
}
