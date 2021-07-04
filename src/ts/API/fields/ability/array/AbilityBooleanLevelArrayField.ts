/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityBooleanLevelArrayField(i: integer): abilitybooleanlevelarrayfield

export class AbilityBooleanLevelArrayField extends AbilityField<abilitybooleanlevelarrayfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityBooleanLevelArrayField(id), id, title, desc)
  }
}