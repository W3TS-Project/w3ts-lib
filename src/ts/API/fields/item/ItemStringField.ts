/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode";
import { ItemField } from "./ItemField";

declare function ConvertItemStringField(i: integer): itemstringfield

export class ItemStringField extends ItemField<itemstringfield> {
  public constructor(rawCode: RawCode, title?: string) {
    super(ConvertItemStringField(rawCode.getId()), rawCode, title)
  }
}