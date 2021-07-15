/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode";
import { UnitField } from "./UnitField";

declare function ConvertUnitIntegerField(i: integer): unitintegerfield

export class UnitIntegerField extends UnitField<unitintegerfield> {
  public constructor(rawCode: RawCode, title?: string) {
    super(ConvertUnitIntegerField(rawCode.getId()), rawCode, title)
  }
}