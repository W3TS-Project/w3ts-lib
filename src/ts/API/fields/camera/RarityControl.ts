/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../../../utils";
import { Field } from "../Field";

declare function ConvertRarityControl(i: integer): raritycontrol

export class RarityControl extends Field<raritycontrol> {
  public constructor(id: integer) {
    super(ConvertRarityControl(id), id)
  }
}