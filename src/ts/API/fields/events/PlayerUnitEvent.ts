/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertPlayerUnitEvent(i: integer): playerunitevent

export class PlayerUnitEvent extends Event<playerunitevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPlayerUnitEvent(id), id)
    }

    public static fromHandle(handle: playerunitevent): PlayerUnitEvent {
        return this.getObject(handle)
    }

    public static fromObject(object: PlayerUnitEvent): playerunitevent {
        return this.getHandle(object)
    }
}
