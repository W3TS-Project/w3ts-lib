/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMouseButtonType(i: integer): mousebuttontype

export class MouseButtonType extends Field<mousebuttontype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertMouseButtonType(id), id)
    }
}
