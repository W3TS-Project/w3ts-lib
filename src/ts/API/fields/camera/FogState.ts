/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFogState(i: integer): fogstate

export class FogState extends Field<fogstate> {
    static convert(id: integer) {
        return this.proto_convert(ConvertFogState, id)
    }

    static fromHandle(handle: fogstate) {
        return this.getObject(handle) as FogState
    }
}
