/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapFlag(i: integer): mapflag
declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void

export class MapFlag extends Field<mapflag> {
    static convert(id: integer) {
        return this.proto_convert(ConvertMapFlag, id)
    }

    set(value: boolean) {
        SetMapFlag(this.getHandle() as mapflag, value)
        return this
    }
}
