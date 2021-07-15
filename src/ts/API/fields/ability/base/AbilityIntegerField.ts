/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityIntegerField(i: integer): abilityintegerfield

export class AbilityIntegerField extends AbilityField<abilityintegerfield> {
  public constructor(rawCode: RawCode, title?: string, desc?: string) {
    super(ConvertAbilityIntegerField(rawCode.getId()), rawCode, title, desc)
  }
}