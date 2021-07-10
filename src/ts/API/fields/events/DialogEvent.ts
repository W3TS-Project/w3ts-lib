/** @noSelfInFile **/
// @ts-nocheck

import { integer } from "../../../utils";
import { Field } from "../Field";

declare function ConvertDialogEvent(i: integer): dialogevent

export class DialogEvent extends Field<dialogevent> {
  public constructor(id: integer) {
    super(ConvertDialogEvent(id), id)
  }
}