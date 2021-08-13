/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertVersion(i: integer): version

export class Version extends Field<version> {
    static convert(id: integer) {
        return this.proto_convert(ConvertVersion, id)
    }
}
