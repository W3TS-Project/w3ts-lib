/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertMoveType(i: integer): movetype

export class MoveType extends Field<movetype> {
  public constructor(id: integer) {
    super(ConvertMoveType(id), id)
  }
}
