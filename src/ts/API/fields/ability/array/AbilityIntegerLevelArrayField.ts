/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityIntegerLevelArrayField(i: integer): abilityintegerlevelarrayfield

export class AbilityIntegerLevelArrayField extends AbilityField<abilityintegerlevelarrayfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityIntegerLevelArrayField(id), id, title, desc)
  }
}