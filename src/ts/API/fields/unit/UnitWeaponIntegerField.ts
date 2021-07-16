/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode"
import { UnitField } from "./UnitField"

declare function ConvertUnitWeaponIntegerField(i: integer): unitweaponintegerfield

export class UnitWeaponIntegerField extends UnitField<unitweaponintegerfield> {
    public constructor(rawCode: RawCode, title?: string) {
        super(ConvertUnitWeaponIntegerField(rawCode.getId()), rawCode, title)
    }
}
