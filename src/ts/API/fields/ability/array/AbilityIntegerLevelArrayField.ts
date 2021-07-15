/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityIntegerLevelArrayField(i: integer): abilityintegerlevelarrayfield

export class AbilityIntegerLevelArrayField extends AbilityField<abilityintegerlevelarrayfield> {
  public constructor(rawCode: RawCode, title?: string, desc?: string) {
    super(ConvertAbilityIntegerLevelArrayField(rawCode.getId()), rawCode, title, desc)
  }
}