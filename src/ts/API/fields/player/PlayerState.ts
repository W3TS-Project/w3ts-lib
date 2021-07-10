/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertPlayerState(i: integer): playerstate

export class PlayerState extends Field<playerstate> {
  public constructor(id: integer) {
    super(ConvertPlayerState(id), id)
  }
}