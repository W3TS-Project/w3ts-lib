/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertGameSpeed(i: integer): gamespeed

export class GameSpeed extends Field<gamespeed> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertGameSpeed(id), id)
    }
}
