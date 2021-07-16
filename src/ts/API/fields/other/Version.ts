/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertVersion(i: integer): version

export class Version extends Field<version> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertVersion(id), id)
    }
}
