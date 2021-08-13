/** @noSelfInFile **/
//@ts-nocheck

import { Event } from "./Event"

declare function ConvertGameEvent(i: integer): gameevent

export class GameEvent extends Event<gameevent> {
    static convert(id: integer) {
        return this.proto_convert(ConvertGameEvent, id)
    }

    static fromHandle(handle: gameevent) {
        return this.getObject(handle) as GameEvent
    }
}
