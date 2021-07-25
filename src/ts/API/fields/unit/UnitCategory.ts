/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertUnitCategory(i: integer): unitcategory

export class UnitCategory extends Field<unitcategory> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertUnitCategory(id), id)
    }
}
