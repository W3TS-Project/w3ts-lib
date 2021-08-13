/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { Point } from "./Point"

declare function Location(x: real, y: real): location
declare function RemoveLocation(whichLocation: location): void
declare function MoveLocation(whichLocation: location, newX: real, newY: real): void
declare function GetLocationX(whichLocation: location): real
declare function GetLocationY(whichLocation: location): real
declare function GetLocationZ(whichLocation: location): real

export class MapLocation extends Handle<location> {
    x: real
    y: real
    z: real

    constructor(handle: location) {
        super(handle)
        this.x = this.getX()
        this.y = this.getY()
        this.z = this.getZ()
    }

    static fromCoords(x: real, y: real) {
        return new this(Location(x, y))
    }

    destroy() {
        RemoveLocation(this.getHandle() as location)
        return this
    }

    move(x: real, y: real) {
        MoveLocation(this.getHandle() as location, x, y)
        this.x = x
        this.y = y
        return this
    }

    setX(newX: real) {
        this.move(newX, this.y)
        return this
    }

    getX(): real {
        return GetLocationX(this.getHandle() as location)
    }

    setY(newY: real) {
        this.move(this.x, newY)
        return this
    }

    getY(): real {
        return GetLocationY(this.getHandle() as location)
    }

    /**
     * This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
     * If you attempt to use it in a synchronous manner, it may cause a desync.
     */
    getZ(): real {
        return GetLocationZ(this.getHandle() as location)
    }

    setPos(p: Position) {
        return this.setX(p.x).setY(p.y)
    }

    toPoint() {
        return new Point(this.x, this.y, this.z)
    }

    static fromHandle(handle: location) {
        return this.getObject(handle) as MapLocation
    }
}
