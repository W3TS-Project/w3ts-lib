/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertItemType(i: integer): itemtype

export class ItemType extends Field<itemtype> {
  public constructor(id: integer) {
    super(ConvertItemType(id), id)
  }
}