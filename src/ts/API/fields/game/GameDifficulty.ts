/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameDifficulty(i: integer): gamedifficulty

export class GameDifficulty extends Field<gamedifficulty> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertGameDifficulty(id), id)
    }

    public static fromHandle(handle: gamedifficulty) {
        return this.getObject(handle) as GameDifficulty
    }
}
