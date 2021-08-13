/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerSlotState(i: integer): playerslotstate

export class PlayerSlotState extends Field<playerslotstate> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlayerSlotState, id)
    }

    static fromHandle(handle: playerslotstate) {
        return this.getObject(handle) as PlayerSlotState
    }
}
