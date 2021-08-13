/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertTargetFlag(i: integer): targetflag

export class TargetFlag extends Field<targetflag> {
    static convert(id: integer) {
        return this.proto_convert(ConvertTargetFlag, id)
    }
}
