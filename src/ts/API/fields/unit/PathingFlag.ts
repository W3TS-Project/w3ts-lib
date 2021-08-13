/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPathingFlag(i: integer): pathingflag

export class PathingFlag extends Field<pathingflag> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPathingFlag, id)
    }
}
