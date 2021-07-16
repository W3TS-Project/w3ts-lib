/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapFlag(i: integer): mapflag

export class MapFlag extends Field<mapflag> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertMapFlag(id), id)
    }
}
