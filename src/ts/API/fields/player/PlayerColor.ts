/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerColor(i: integer): playercolor

export class PlayerColor extends Field<playercolor> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertPlayerColor(id), id)
    }
}
