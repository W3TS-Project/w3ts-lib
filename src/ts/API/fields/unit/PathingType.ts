/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPathingType(i: integer): pathingtype

export class PathingType extends Field<pathingtype> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertPathingType(id), id)
    }
}
