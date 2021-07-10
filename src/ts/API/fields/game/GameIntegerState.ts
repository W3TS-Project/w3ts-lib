/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertIGameState(i: integer): igamestate

export class GameIntegerState extends Field<igamestate> {
  public constructor(id: integer) {
    super(ConvertIGameState(id), id)
  }
}