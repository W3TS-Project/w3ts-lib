/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityRealLevelField(i: integer): abilityreallevelfield

export class AbilityRealLevelField extends AbilityField<abilityreallevelfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityRealLevelField(id), id, title, desc)
  }
}