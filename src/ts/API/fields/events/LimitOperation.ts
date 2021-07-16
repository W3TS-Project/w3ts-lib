/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertLimitOp(i: integer): limitop

export class LimitOperation extends Field<limitop> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertLimitOp(id), id)
    }
}
