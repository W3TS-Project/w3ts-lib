/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertOsKeyType(i: integer): oskeytype

export class OsKeyType extends Field<oskeytype> {
    static convert(id: integer) {
        return this.proto_convert(ConvertOsKeyType, id)
    }

    static fromHandle(handle: oskeytype) {
        return this.getObject(handle) as OsKeyType
    }
}
