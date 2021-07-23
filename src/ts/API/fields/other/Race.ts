/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertRace(i: integer): race

export class Race extends Field<race> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertRace(id), id)
    }

    public static fromHandle(handle: race): Race {
        return this.getObject(handle)
    }

    public static fromObject(object: Race): race {
        return this.getHandle(object)
    }
}
