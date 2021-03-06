/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertTextAlignType(i: integer): textaligntype

export class TextAlignType extends Field<textaligntype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertTextAlignType(id), id)
    }
}
