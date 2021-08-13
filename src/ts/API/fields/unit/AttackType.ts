/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertAttackType(i: integer): attacktype

export class AttackType extends Field<attacktype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertAttackType, id)
    }

    static fromHandle(handle: attacktype) {
        return this.getObject(handle) as AttackType
    }
}
