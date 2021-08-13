/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertRace(i: integer): race

export class Race extends Field<race> {
    static convert(id: integer) {
        return this.proto_convert(ConvertRace, id)
    }

    static fromHandle(handle: race) {
        return this.getObject(handle) as Race
    }
}
