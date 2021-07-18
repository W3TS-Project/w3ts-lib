/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertUnitEvent(i: integer): unitevent

export class UnitEvent extends Event<unitevent> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertUnitEvent(id), id)
    }

    public static fromHandle(handle: unitevent): UnitEvent {
        return this.getObject(handle)
    }

    public static fromObject(object: UnitEvent): unitevent {
        return this.getHandle(object)
    }
}
