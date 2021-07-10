/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertTextAlignType(i: integer): textaligntype

export class TextAlignType extends Field<textaligntype> {
  public constructor(id: integer) {
    super(ConvertTextAlignType(id), id)
  }
}