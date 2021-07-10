/** @noSelfInFile **/
// @ts-nocheck

import { RawCode, Utils } from "../../../utils";
import { ItemField } from "./ItemField";

declare function ConvertItemStringField(i: integer): itemstringfield

export class ItemStringField extends ItemField<itemstringfield> {
  public constructor(id: RawCode, title?: string) {
    id = Utils.formatCC(id)
    super(ConvertItemStringField(id), id, title)
  }
}