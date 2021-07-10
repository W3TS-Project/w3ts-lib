/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertWidgetEvent(i: integer): widgetevent

export class WidgetEvent extends Field<widgetevent> {
  public constructor(id: integer) {
    super(ConvertWidgetEvent(id), id)
  }
}
