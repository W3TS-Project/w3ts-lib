/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPathingType(i: integer): pathingtype

export class PathingType extends Field<pathingtype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPathingType, id)
    }
}
