/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertIGameState(i: integer): igamestate

export class GameIntegerState extends Field<igamestate> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertIGameState(id), id)
    }
}
