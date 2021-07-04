/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityStringLevelField(i: integer): abilitystringlevelfield

export class AbilityStringLevelField extends AbilityField<abilitystringlevelfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityStringLevelField(id), id, title, desc)
  }
}