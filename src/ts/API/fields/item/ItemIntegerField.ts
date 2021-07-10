/** @noSelfInFile **/
// @ts-nocheck

import { RawCode, Utils } from "../../../utils";
import { ItemField } from "./ItemField";

declare function ConvertItemIntegerField(i: integer): itemintegerfield

export class ItemIntegerField extends ItemField<itemintegerfield> {
  public constructor(id: RawCode, title?: string) {
    id = Utils.formatCC(id)
    super(ConvertItemIntegerField(id), id, title)
  }
}
