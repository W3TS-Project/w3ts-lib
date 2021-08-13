/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertUnitType(i: integer): unittype

export class UnitType extends Field<unittype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertUnitType, id)
    }
}
