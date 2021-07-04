/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityRealField(i: integer): abilityrealfield

export class AbilityRealField extends AbilityField<abilityrealfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityRealField(id), id, title, desc)
  }
}