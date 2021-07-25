/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertFogState(i: integer): fogstate

export class FogState extends Field<fogstate> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertFogState(id), id)
    }

    public static fromHandle(handle: fogstate): FogState {
        return this.getObject(handle)
    }

    public static fromObject(object: FogState): fogstate {
        return this.getHandle(object)
    }
}
