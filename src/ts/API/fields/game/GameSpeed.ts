/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameSpeed(i: integer): gamespeed

export class GameSpeed extends Field<gamespeed> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertGameSpeed(id), id)
    }

    public static fromHandle(handle: gamespeed): GameSpeed {
        return this.getObject(handle)
    }

    public static fromObject(object: GameSpeed): gamespeed {
        return this.getHandle(object)
    }
}
