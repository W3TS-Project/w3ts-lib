/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapFlag(i: integer): mapflag
declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void

export class MapFlag extends Field<mapflag> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertMapFlag(id), id)
    }

    public set(value: boolean) {
        SetMapFlag(this.getHandle, value)
        return this
    }
}
