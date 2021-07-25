/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertRegenType(i: integer): regentype

export class RegenType extends Field<regentype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertRegenType(id), id)
    }
}
