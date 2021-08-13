/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMouseButtonType(i: integer): mousebuttontype

export class MouseButtonType extends Field<mousebuttontype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertMouseButtonType, id)
    }

    static fromHandle(handle: mousebuttontype) {
        return this.getObject(handle) as MouseButtonType
    }
}
