/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertGameDifficulty(i: integer): gamedifficulty

export class GameDifficulty extends Field<gamedifficulty> {
  public constructor(id: integer) {
    super(ConvertGameDifficulty(id), id)
  }
}