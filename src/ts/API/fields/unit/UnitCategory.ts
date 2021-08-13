/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertUnitCategory(i: integer): unitcategory

export class UnitCategory extends Field<unitcategory> {
    static convert(id: integer) {
        return this.proto_convert(ConvertUnitCategory, id)
    }
}
