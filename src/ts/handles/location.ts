/** @noSelfInFile **/
// @ts-nocheck

import { Handle } from "./handle"

declare function Location(x: number, y: number): location
declare function RemoveLocation(whichLocation: location): void
declare function MoveLocation(whichLocation: location, newX: number, newY: number): void
declare function GetLocationX(whichLocation: location): number
declare function GetLocationY(whichLocation: location): number
declare function GetLocationZ(whichLocation: location): number

export class Location extends Handle<location> {
    constructor(x: number, y: number, z?: number) {
        if (Handle.initFromHandle()) {
            super()
        } else {
            super(Location(x, y))
            this.z = z
        }
        return this
    }

    get x(): number {
        return GetLocationX(this.handle)
    }

    set x(value: number) {
        MoveLocation(this.handle, value, this.y)
        return this
    }

    get y(): number {
        return GetLocationY(this.handle)
    }

    set y(value: number) {
        MoveLocation(this.handle, this.x, value)
        return this
    }

    /**
     * This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
     * If you attempt to use it in a synchronous manner, it may cause a desync.
     */
    get z(): number {
        return GetLocationZ(this.handle)
    }

    destroy() {
        RemoveLocation(this.handle)
        return this
    }

    setPosition(x: number, y: number) {
        MoveLocation(this.handle, x, y)
        return this
    }

    static fromHandle(handle: location): Point {
        return this.getObject(handle)
    }
}
