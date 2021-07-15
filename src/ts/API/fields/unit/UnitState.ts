/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertUnitState(i: integer): unitstate

export class UnitState extends Field<unitstate> {
  public constructor(id: integer) {
    super(ConvertUnitState(id), id)
  }
}