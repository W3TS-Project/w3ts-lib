/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertItemType(i: integer): itemtype

export class ItemType extends Field<itemtype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertItemType(id), id)
    }

    public static fromHandle(handle: itemtype) {
        return this.getObject(handle) as ItemType
    }
}
