/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityIntegerField(i: integer): abilityintegerfield

export class AbilityIntegerField extends AbilityField<abilityintegerfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityIntegerField(id), id, title, desc)
  }
}