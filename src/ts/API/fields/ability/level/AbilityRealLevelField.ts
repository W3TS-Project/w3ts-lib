/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityRealLevelField(i: integer): abilityreallevelfield

export class AbilityRealLevelField extends AbilityField<abilityreallevelfield> {
  public constructor(rawCode: RawCode, title?: string, desc?: string) {
    super(ConvertAbilityRealLevelField(rawCode.getId()), rawCode, title, desc)
  }
}