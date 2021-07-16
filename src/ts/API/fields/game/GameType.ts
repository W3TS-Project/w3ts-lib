/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameType(i: integer): gametype

export class GameType extends Field<gametype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertGameType(id), id)
    }
}
