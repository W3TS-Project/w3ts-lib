/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertDefenseType(i: integer): defensetype

export class DefenseType extends Field<defensetype> {
  public constructor(id: integer) {
    super(ConvertDefenseType(id), id)
  }
}