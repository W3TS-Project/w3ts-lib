/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertItemType(i: integer): itemtype

export class ItemType extends Field<itemtype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertItemType, id)
    }

    static fromHandle(handle: itemtype) {
        return this.getObject(handle) as ItemType
    }
}
