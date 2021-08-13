/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameDifficulty(i: integer): gamedifficulty

export class GameDifficulty extends Field<gamedifficulty> {
    static convert(id: integer) {
        return this.proto_convert(ConvertGameDifficulty, id)
    }

    static fromHandle(handle: gamedifficulty) {
        return this.getObject(handle) as GameDifficulty
    }
}
