/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertUnitType(i: integer): unittype

export class UnitType extends Field<unittype> {
  public constructor(id: integer) {
    super(ConvertUnitType(id), id)
  }
}
