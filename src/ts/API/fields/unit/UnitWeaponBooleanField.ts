/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitWeaponBooleanField(i: integer): unitweaponbooleanfield

export class UnitWeaponBooleanField extends UnitField<unitweaponbooleanfield> {
    public constructor(rawCode: RawCode, title?: string) {
        super(ConvertUnitWeaponBooleanField(rawCode.getId()), rawCode, title)
    }
}
