/** @noSelfInFile **/
// @ts-nocheck

import { RawCode, Utils } from "../../../utils";
import { ItemField } from "./ItemField";

declare function ConvertItemRealField(i: integer): itemrealfield

export class ItemRealField extends ItemField<itemrealfield> {
  public constructor(id: RawCode, title?: string) {
    id = Utils.formatCC(id)
    super(ConvertItemRealField(id), id, title)
  }
}