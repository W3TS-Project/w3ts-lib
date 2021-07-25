/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertTexMapFlags(i: integer): texmapflags

export class TexMapFlag extends Field<texmapflags> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertTexMapFlags(id), id)
    }
}
