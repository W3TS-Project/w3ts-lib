/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitWeaponIntegerField(i: integer): unitweaponintegerfield

export class UnitWeaponIntegerField extends UnitField<unitweaponintegerfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitWeaponIntegerField, rawCode, title)
    }
}
