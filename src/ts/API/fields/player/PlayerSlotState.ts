/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerSlotState(i: integer): playerslotstate

export class PlayerSlotState extends Field<playerslotstate> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertPlayerSlotState(id), id)
    }
}
