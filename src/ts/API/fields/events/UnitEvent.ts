/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertUnitEvent(i: integer): unitevent

export class UnitEvent extends Field<unitevent> {
  public constructor(id: integer) {
    super(ConvertUnitEvent(id), id)
  }
}