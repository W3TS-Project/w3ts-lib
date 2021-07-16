/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertSubAnimType(i: integer): subanimtype

export class SubAnimType extends Field<subanimtype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertSubAnimType(id), id)
    }
}
