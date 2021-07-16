/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameDifficulty(i: integer): gamedifficulty

export class GameDifficulty extends Field<gamedifficulty> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertGameDifficulty(id), id)
    }

    public static fromHandle(handle: gamedifficulty): GameDifficulty {
        return this.getObject(handle)
    }
}
