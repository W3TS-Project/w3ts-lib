/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFogState(i: integer): fogstate

export class FogState extends Field<fogstate> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertFogState(id), id)
    }

    public static fromHandle(handle: fogstate) {
        return this.getObject(handle) as FogState
    }
}
