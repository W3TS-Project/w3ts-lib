/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerGameResult(i: integer): playergameresult

export class PlayerGameResult extends Field<playergameresult> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPlayerGameResult(id), id)
    }
}
