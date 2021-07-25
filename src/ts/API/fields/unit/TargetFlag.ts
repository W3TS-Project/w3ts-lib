/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertTargetFlag(i: integer): targetflag

export class TargetFlag extends Field<targetflag> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertTargetFlag(id), id)
    }
}
