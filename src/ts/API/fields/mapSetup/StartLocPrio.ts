/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertStartLocPrio(i: integer): startlocprio

export class StartLocPrio extends Field<startlocprio> {
    static convert(id: integer) {
        return this.proto_convert(ConvertStartLocPrio, id)
    }

    static fromHandle(handle: startlocprio) {
        return this.getObject(handle) as StartLocPrio
    }
}
