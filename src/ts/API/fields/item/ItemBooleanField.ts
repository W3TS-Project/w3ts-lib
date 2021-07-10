/** @noSelfInFile **/
// @ts-nocheck

import { RawCode, Utils } from "../../../utils";
import { ItemField } from "./ItemField";

declare function ConvertItemBooleanField(i: integer): itembooleanfield

export class ItemBooleanField extends ItemField<itembooleanfield> {
  public constructor(id: RawCode, title?: string) {
    id = Utils.formatCC(id)
    super(ConvertItemBooleanField(id), id, title)
  }
}