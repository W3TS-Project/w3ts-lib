/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertDamageType(i: integer): damagetype

export class DamageType extends Field<damagetype> {
  public constructor(id: integer) {
    super(ConvertDamageType(id), id)
  }
}