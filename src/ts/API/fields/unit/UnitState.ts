/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertUnitState(i: integer): unitstate

export class UnitState extends Field<unitstate> {
    static convert(id: integer) {
        return this.proto_convert(ConvertUnitState, id)
    }

    static fromHandle(handle: unitstate) {
        return this.getObject(handle) as UnitState
    }
}
