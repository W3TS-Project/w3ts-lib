/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertPlayerEvent(i: integer): playerevent

export class PlayerEvent extends Event<playerevent> {
    static convert(id: integer) {
        return this.proto_convert(ConvertPlayerEvent, id)
    }

    static fromHandle(handle: playerevent) {
        return this.getObject(handle) as PlayerEvent
    }
}
