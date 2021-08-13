/** @noSelfInFile **/
// @ts-nocheck

import { RawCodeType } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitWeaponStringField(i: integer): unitweaponstringfield

export class UnitWeaponStringField extends UnitField<unitweaponstringfield> {
    constructor(rawCode: RawCodeType, title?: string) {
        super(ConvertUnitWeaponStringField, rawCode, title)
    }
}
