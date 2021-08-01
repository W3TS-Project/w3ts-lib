/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameSpeed(i: integer): gamespeed

export class GameSpeed extends Field<gamespeed> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertGameSpeed(id), id)
    }

    public static fromHandle(handle: gamespeed) {
        return this.getObject(handle) as GameSpeed
    }
}
