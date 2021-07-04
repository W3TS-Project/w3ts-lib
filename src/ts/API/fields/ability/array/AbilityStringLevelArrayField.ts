/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityStringLevelArrayField(i: integer): abilitystringlevelarrayfield

export class AbilityStringLevelArrayField extends AbilityField<abilitystringlevelarrayfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityStringLevelArrayField(id), id, title, desc)
  }
}