/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertPlayerUnitEvent(i: integer): playerunitevent

export class PlayerUnitEvent extends Field<playerunitevent> {
  public constructor(id: integer) {
    super(ConvertPlayerUnitEvent(id), id)
  }
}