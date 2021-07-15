/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode";
import { ItemField } from "./ItemField";

declare function ConvertItemRealField(i: integer): itemrealfield

export class ItemRealField extends ItemField<itemrealfield> {
  public constructor(rawCode: RawCode, title?: string) {
    super(ConvertItemRealField(rawCode.getId()), rawCode, title)
  }
}