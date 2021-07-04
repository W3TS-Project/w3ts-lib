/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityIntegerLevelField(i: integer): abilityintegerlevelfield

export class AbilityIntegerLevelField extends AbilityField<abilityintegerlevelfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityIntegerLevelField(id), id, title, desc)
  }
}