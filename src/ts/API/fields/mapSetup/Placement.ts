/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlacement(i: integer): placement

export class Placement extends Field<placement> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPlacement(id), id)
    }

    public static fromHandle(handle: placement) {
        return this.getObject(handle) as Placement
    }
}
