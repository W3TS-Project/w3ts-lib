/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertUnitEvent(i: integer): unitevent

export class UnitEvent extends Event<unitevent> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertUnitEvent(id), id)
    }

    public static fromHandle(handle: unitevent) {
        return this.getObject(handle) as UnitEvent
    }
}
