/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityBooleanLevelField(i: integer): abilitybooleanlevelfield

export class AbilityBooleanLevelField extends AbilityField<abilitybooleanlevelfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityBooleanLevelField(id), id, title, desc)
  }
}