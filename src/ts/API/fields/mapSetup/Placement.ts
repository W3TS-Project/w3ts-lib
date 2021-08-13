/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlacement(i: integer): placement

export class Placement extends Field<placement> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlacement, id)
    }

    static fromHandle(handle: placement) {
        return this.getObject(handle) as Placement
    }
}
