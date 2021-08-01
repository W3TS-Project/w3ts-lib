/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"

declare function Location(x: real, y: real): location
declare function RemoveLocation(whichLocation: location): void
declare function MoveLocation(whichLocation: location, newX: real, newY: real): void
declare function GetLocationX(whichLocation: location): real
declare function GetLocationY(whichLocation: location): real
declare function GetLocationZ(whichLocation: location): real

export class MapLocation extends Handle<location> {
    public constructor(x: real, y: real, z?: real) {
        super(Location(x, y))
    }

    public destroy() {
        RemoveLocation(this.getHandle() as location)
        return this
    }

    public move(x: real, y: real) {
        MoveLocation(this.getHandle() as location, x, y)
        return this
    }

    public setX(newX: real) {
        this.move(newX, this.getY())
        return this
    }

    public getX(): real {
        return GetLocationX(this.getHandle() as location)
    }

    public setY(newY: real) {
        this.move(this.getX(), newY)
        return this
    }

    public getY(): real {
        return GetLocationY(this.getHandle() as location)
    }

    /**
     * This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
     * If you attempt to use it in a synchronous manner, it may cause a desync.
     */
    public getZ(): real {
        return GetLocationZ(this.getHandle() as location)
    }

    public static fromHandle(handle: location) {
        return this.getObject(handle) as MapLocation
    }
}
