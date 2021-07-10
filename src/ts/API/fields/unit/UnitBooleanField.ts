/** @noSelfInFile **/
// @ts-nocheck

import { RawCode, Utils } from "../../../utils";
import { UnitField } from "./UnitField";

declare function ConvertUnitBooleanField(i: integer): unitbooleanfield

export class UnitBooleanField extends UnitField<unitbooleanfield> {
  public constructor(id: RawCode, title?: string) {
    id = Utils.formatCC(id)
    super(ConvertUnitBooleanField(id), id, title)
  }
}
