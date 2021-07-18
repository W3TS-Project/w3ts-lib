/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertPlayerEvent(i: integer): playerevent

export class PlayerEvent extends Event<playerevent> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertPlayerEvent(id), id)
    }

    public static fromHandle(handle: playerevent): PlayerEvent {
        return this.getObject(handle)
    }

    public static fromObject(object: PlayerEvent): playerevent {
        return this.getHandle(object)
    }
}
