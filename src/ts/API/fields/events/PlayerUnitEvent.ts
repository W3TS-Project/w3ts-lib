/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertPlayerUnitEvent(i: integer): playerunitevent

export class PlayerUnitEvent extends Event<playerunitevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPlayerUnitEvent(id), id)
    }

    public static fromHandle(handle: playerunitevent) {
        return this.getObject(handle) as PlayerUnitEvent
    }
}
