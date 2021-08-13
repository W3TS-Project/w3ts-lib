/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "../Handle"

declare function GetTriggerEventId(): eventid

export class EventId extends Handle<eventid> {
    static fromHandle(handle: eventid) {
        return this.getObject(handle) as EventId
    }

    static fromEvent() {
        return this.fromHandle(GetTriggerEventId())
    }
}
