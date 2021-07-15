/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityRealLevelArrayField(i: integer): abilityreallevelarrayfield

export class AbilityRealLevelArrayField extends AbilityField<abilityreallevelarrayfield> {
  public constructor(rawCode: RawCode, title?: string, desc?: string) {
    super(ConvertAbilityRealLevelArrayField(rawCode.getId()), rawCode, title, desc)
  }
}