/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertRacePref(i: integer): racepreference

export class RacePref extends Field<racepreference> {
  public constructor(id: integer) {
    super(ConvertRacePref(id), id)
  }
}