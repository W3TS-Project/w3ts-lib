/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertUnitEvent(i: integer): unitevent

export class UnitEvent extends Event<unitevent> {
    static convert(id: integer) {
        return this.proto_convert(ConvertUnitEvent, id)
    }

    static fromHandle(handle: unitevent) {
        return this.getObject(handle) as UnitEvent
    }
}
