/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerState(i: integer): playerstate

export class PlayerState extends Field<playerstate> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlayerState, id)
    }

    static fromHandle(handle: playerstate) {
        return this.getObject(handle) as PlayerState
    }
}
