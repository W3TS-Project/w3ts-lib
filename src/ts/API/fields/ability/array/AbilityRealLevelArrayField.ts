/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityRealLevelArrayField(i: integer): abilityreallevelarrayfield

export class AbilityRealLevelArrayField extends AbilityField<abilityreallevelarrayfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityRealLevelArrayField(id), id, title, desc)
  }
}