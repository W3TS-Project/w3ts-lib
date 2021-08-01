/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerColor(i: integer): playercolor

export class PlayerColor extends Field<playercolor> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPlayerColor(id), id)
    }

    public static fromHandle(handle: playercolor) {
        return this.getObject(handle) as PlayerColor
    }
}
