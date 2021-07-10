/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertPlacement(i: integer): placement

export class Placement extends Field<placement> {
  public constructor(id: integer) {
    super(ConvertPlacement(id), id)
  }
}