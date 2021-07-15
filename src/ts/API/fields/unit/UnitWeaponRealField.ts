/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode";
import { UnitField } from "./UnitField";

declare function ConvertUnitWeaponRealField(i: integer): unitweaponrealfield

export class UnitWeaponRealField extends UnitField<unitweaponrealfield> {
  public constructor(rawCode: RawCode, title?: string) {
    super(ConvertUnitWeaponRealField(rawCode.getId()), rawCode, title)
  }
}
