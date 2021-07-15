/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityBooleanLevelField(i: integer): abilitybooleanlevelfield

export class AbilityBooleanLevelField extends AbilityField<abilitybooleanlevelfield> {
  public constructor(rawCode: RawCode, title?: string, desc?: string) {
    super(ConvertAbilityBooleanLevelField(rawCode.getId()), rawCode, title, desc)
  }
}