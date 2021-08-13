/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertTexMapFlags(i: integer): texmapflags

export class TexMapFlag extends Field<texmapflags> {
    static convert(id: integer) {
        return this.proto_convert(ConvertTexMapFlags, id)
    }
}
