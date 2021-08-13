/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertPlayerUnitEvent(i: integer): playerunitevent

export class PlayerUnitEvent extends Event<playerunitevent> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlayerUnitEvent, id)
    }

    static fromHandle(handle: playerunitevent) {
        return this.getObject(handle) as PlayerUnitEvent
    }
}
