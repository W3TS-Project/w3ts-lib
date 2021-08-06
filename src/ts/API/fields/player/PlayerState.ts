/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerState(i: integer): playerstate

export class PlayerState extends Field<playerstate> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPlayerState(id), id)
    }

    public static fromHandle(handle: playerstate) {
        return this.getObject(handle) as PlayerState
    }
}
