/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertAnimType(i: integer): animtype

export class AnimType extends Field<animtype> {
  public constructor(id: integer) {
    super(ConvertAnimType(id), id)
  }
}