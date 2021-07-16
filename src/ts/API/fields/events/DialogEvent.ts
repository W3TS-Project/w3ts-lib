/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertDialogEvent(i: integer): dialogevent

export class DialogEvent extends Field<dialogevent> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertDialogEvent(id), id)
    }
}
