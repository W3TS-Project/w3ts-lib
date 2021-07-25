/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertAIDifficulty(i: integer): aidifficulty

export class AIDifficulty extends Field<aidifficulty> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertAIDifficulty(id), id)
    }

    public static fromHandle(handle: aidifficulty) {
        return this.getObject(handle)
    }
}
