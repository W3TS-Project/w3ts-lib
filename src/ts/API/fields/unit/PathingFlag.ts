/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPathingFlag(i: integer): pathingflag

export class PathingFlag extends Field<pathingflag> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPathingFlag(id), id)
    }
}
