/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../../RawCode";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityStringField(i: integer): abilitystringfield

export class AbilityStringField extends AbilityField<abilitystringfield> {
  public constructor(rawCode: RawCode, title?: string, desc?: string) {
    super(ConvertAbilityStringField(rawCode.getId()), rawCode, title, desc)
  }
}