/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertWidgetEvent(i: integer): widgetevent

export class WidgetEvent extends Field<widgetevent> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertWidgetEvent(id), id)
    }
}
