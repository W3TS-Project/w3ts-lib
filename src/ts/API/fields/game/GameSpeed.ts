/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameSpeed(i: integer): gamespeed

export class GameSpeed extends Field<gamespeed> {
    static convert(id: integer) {
        return this.proto_convert(ConvertGameSpeed, id)
    }

    static fromHandle(handle: gamespeed) {
        return this.getObject(handle) as GameSpeed
    }
}
