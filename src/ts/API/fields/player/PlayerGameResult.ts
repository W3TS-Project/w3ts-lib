/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerGameResult(i: integer): playergameresult

export class PlayerGameResult extends Field<playergameresult> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlayerGameResult, id)
    }
}
