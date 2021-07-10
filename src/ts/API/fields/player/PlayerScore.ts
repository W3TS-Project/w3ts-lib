/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertPlayerScore(i: integer): playerscore

export class PlayerScore extends Field<playerscore> {
  public constructor(id: integer) {
    super(ConvertPlayerScore(id), id)
  }
}
