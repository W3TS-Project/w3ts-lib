/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertItemType(i: integer): itemtype

export class ItemType extends Field<itemtype> {
    public constructor(id: integer) {
		id = Math.round(id)
        super(ConvertItemType(id), id)
    }
}
