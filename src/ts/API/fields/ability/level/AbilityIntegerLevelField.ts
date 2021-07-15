/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityIntegerLevelField(i: integer): abilityintegerlevelfield

export class AbilityIntegerLevelField extends AbilityField<abilityintegerlevelfield> {
  public constructor(rawCode: RawCode, title?: string, desc?: string) {
    super(ConvertAbilityIntegerLevelField(rawCode.getId()), rawCode, title, desc)
  }
}