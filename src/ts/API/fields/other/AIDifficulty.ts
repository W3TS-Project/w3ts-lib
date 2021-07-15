/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertAIDifficulty(i: integer): aidifficulty

export class AIDifficulty extends Field<aidifficulty> {
  public constructor(id: integer) {
    super(ConvertAIDifficulty(id), id)
  }
}
