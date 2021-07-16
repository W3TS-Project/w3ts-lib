/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertPlayerEvent(i: integer): playerevent

export class PlayerEvent extends Field<playerevent> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertPlayerEvent(id), id)
    }
}
