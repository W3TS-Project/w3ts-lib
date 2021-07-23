/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertStartLocPrio(i: integer): startlocprio

export class StartLocPrio extends Field<startlocprio> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertStartLocPrio(id), id)
    }

    public static fromHandle(handle: startlocprio): StartLocPrio {
        return this.getObject(handle)
    }

    public static fromObject(object: StartLocPrio): startlocprio {
        return this.getHandle(object)
    }
}
