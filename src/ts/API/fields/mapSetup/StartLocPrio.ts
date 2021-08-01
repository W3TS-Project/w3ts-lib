/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertStartLocPrio(i: integer): startlocprio

export class StartLocPrio extends Field<startlocprio> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertStartLocPrio(id), id)
    }

    public static fromHandle(handle: startlocprio) {
        return this.getObject(handle) as StartLocPrio
    }
}
