/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerScore(i: integer): playerscore

export class PlayerScore extends Field<playerscore> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlayerScore, id)
    }
}
