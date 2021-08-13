/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertAIDifficulty(i: integer): aidifficulty

export class AIDifficulty extends Field<aidifficulty> {
    static convert(id: integer) {
        return this.proto_convert(ConvertAIDifficulty, id)
    }

    static fromHandle(handle: aidifficulty) {
        return this.getObject(handle) as AIDifficulty
    }
}
