/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode";
import { UnitField } from "./UnitField";

declare function ConvertUnitWeaponStringField(i: integer): unitweaponstringfield

export class UnitWeaponStringField extends UnitField<unitweaponstringfield> {
  public constructor(rawCode: RawCode, title?: string) {
    super(ConvertUnitWeaponStringField(rawCode.getId()), rawCode, title)
  }
}