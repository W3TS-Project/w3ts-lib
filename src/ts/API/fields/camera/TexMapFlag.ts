/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertTexMapFlags(i: integer): texmapflags

export class TexMapFlag extends Field<texmapflags> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertTexMapFlags(id), id)
    }
}
