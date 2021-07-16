/** @noSelfInFile **/
//@ts-nocheck

import { Field } from "../Field"

declare function ConvertGameEvent(i: integer): gameevent

export class GameEvent extends Field<gameevent> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertGameEvent(id), id)
    }
}
