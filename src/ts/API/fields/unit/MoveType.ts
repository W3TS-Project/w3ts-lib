/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMoveType(i: integer): movetype

export class MoveType extends Field<movetype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertMoveType, id)
    }
}
