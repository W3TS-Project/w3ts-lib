/** @noSelfInFile **/
// @ts-nocheck

import { real } from "../main"
import { Handle } from "./handle"

declare function location(x: real, y: real): location
declare function RemoveLocation(whichLocation: location): void
declare function MoveLocation(whichLocation: location, newX: real, newY: real): void
declare function GetLocationX(whichLocation: location): real
declare function GetLocationY(whichLocation: location): real
declare function GetLocationZ(whichLocation: location): real

export class Location extends Handle<location> {
    constructor(x: number, y: number, z?: number) {
        super(Handle.initFromHandle() ? undefined : location(x, y))
    }

    destroy() {
        RemoveLocation(this.handle)
        return this
    }

    move(x: real, y: real) {
        MoveLocation(this.handle, x, y)
        return this
    }

    set x(value: real) {
        this.move(value, this.y)
    }

    get x(): real {
        return GetLocationX(this.handle)
    }

    set y(value: real) {
        this.move(this.x, value)
    }

    get y(): real {
        return GetLocationY(this.handle)
    }

    /**
     * This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
     * If you attempt to use it in a synchronous manner, it may cause a desync.
     */
    get z(): real {
        return GetLocationZ(this.handle)
    }

    static fromHandle(handle: location): Location {
        return this.getObject(handle)
    }
}
