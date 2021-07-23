/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertItemType(i: integer): itemtype

export class ItemType extends Field<itemtype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertItemType(id), id)
    }

    public static fromHandle(handle: itemtype): ItemType {
        return this.getObject(handle)
    }

    public static fromObject(object: ItemType): itemtype {
        return this.getHandle(object)
    }
}
