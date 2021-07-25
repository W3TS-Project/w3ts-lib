/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertOsKeyType(i: integer): oskeytype

export class OsKeyType extends Field<oskeytype> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertOsKeyType(id), id)
    }
}
