/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertRacePref(i: integer): racepreference

export class RacePref extends Field<racepreference> {
    static convert(id: integer) {
        return this.proto_convert(ConvertRacePref, id)
    }
}
