/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertLimitOp(i: integer): limitop

export class LimitOperation extends Event<limitop> {
    static convert(id: integer) {
        return this.proto_convert(ConvertLimitOp, id)
    }

    static fromHandle(handle: limitop) {
        return this.getObject(handle) as LimitOperation
    }
}
