/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFGameState(i: integer): fgamestate

export class GameFloatState extends Field<fgamestate> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertFGameState(id), id)
    }
}
