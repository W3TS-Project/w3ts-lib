/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerColor(i: integer): playercolor

export class PlayerColor extends Field<playercolor> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlayerColor, id)
    }

    static fromHandle(handle: playercolor) {
        return this.getObject(handle) as PlayerColor
    }
}
