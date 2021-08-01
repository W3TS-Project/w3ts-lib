/** @noSelfInFile **/
// @ts-nocheck

import { Event } from "./Event"

declare function ConvertLimitOp(i: integer): limitop

export class LimitOperation extends Event<limitop> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertLimitOp(id), id)
    }

    public static fromHandle(handle: limitop) {
        return this.getObject(handle) as LimitOperation
    }
}
