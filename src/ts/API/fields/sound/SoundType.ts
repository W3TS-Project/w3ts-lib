/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertSoundType(i: integer): soundtype

export class SoundType extends Field<soundtype> {
  public constructor(id: integer) {
    super(ConvertSoundType(id), id)
  }
}