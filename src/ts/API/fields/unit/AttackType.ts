/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertAttackType(i: integer): attacktype

export class AttackType extends Field<attacktype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertAttackType(id), id)
    }

    public static fromHandle(handle: attacktype) {
        return this.getObject(handle) as AttackType
    }
}
