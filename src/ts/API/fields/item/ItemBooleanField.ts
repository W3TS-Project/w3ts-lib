/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode";
import { ItemField } from "./ItemField";

declare function ConvertItemBooleanField(i: integer): itembooleanfield

export class ItemBooleanField extends ItemField<itembooleanfield> {
  public constructor(rawCode: RawCode, title?: string) {
    super(ConvertItemBooleanField(rawCode.getId()), rawCode, title)
  }
}