/** @noSelfInFile **/
// @ts-nocheck

import { integer, RawCode, Utils } from "../../../../utils";
import { AbilityField } from "../AbilityField";

declare function ConvertAbilityBooleanField(i: integer): abilitybooleanfield

export class AbilityBooleanField extends AbilityField<abilitybooleanfield> {
  public constructor(id: RawCode, title?: string, desc?: string) {
    id = Utils.formatCC(id)
    super(ConvertAbilityBooleanField(id), id, title, desc)
  }
}