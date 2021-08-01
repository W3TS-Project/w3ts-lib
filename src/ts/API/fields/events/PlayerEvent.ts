/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertPlayerEvent(i: integer): playerevent

export class PlayerEvent extends Event<playerevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertPlayerEvent(id), id)
    }

    public static fromHandle(handle: playerevent) {
        return this.getObject(handle) as PlayerEvent
    }
}
