/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertAliianceType(i: integer): alliancetype

export class AllianceType extends Field<alliancetype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertAliianceType, id)
    }
}
