/** @noSelfInFile **/
//@ts-nocheck

import { Event } from "./Event"

declare function ConvertGameEvent(i: integer): gameevent

export class GameEvent extends Event<gameevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertGameEvent(id), id)
    }

    public static fromHandle(handle: gameevent): GameEvent {
        return this.getObject(handle)
    }

    public static fromObject(object: GameEvent): gameevent {
        return this.getHandle(object)
    }
}
