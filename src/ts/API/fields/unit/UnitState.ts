/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertUnitState(i: integer): unitstate

export class UnitState extends Field<unitstate> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertUnitState(id), id)
    }

    public static fromHandle(handle: unitstate) {
        return this.getObject(handle) as UnitState
    }
}
