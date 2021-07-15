/** @noSelfInFile **/
// @ts-nocheck

import { RawCode } from "../../../RawCode";
import { ItemField } from "./ItemField";

declare function ConvertItemIntegerField(i: integer): itemintegerfield

export class ItemIntegerField extends ItemField<itemintegerfield> {
  public constructor(rawCode: RawCode, title?: string) {
    super(ConvertItemIntegerField(rawCode.getId()), rawCode, title)
  }
}
