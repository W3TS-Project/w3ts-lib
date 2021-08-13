/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { MapLocation } from "./MapLocation"

declare function IsPointBlighted(x: real, y: real): boolean

export class Point {
    x: real
    y: real
    z: real

    constructor(x: real, y: real, z?: real) {
        this.x = x
        this.y = y
        this.z = z || 0
        return this
    }

    static fromLoc(loc: MapLocation) {
        return new this(loc.x, loc.y, loc.z)
    }

    static fromHandleLoc(handle: location) {
        return this.fromLoc(MapLocation.fromHandle(handle))
    }

    setCoords(x: real, y: real, z?: real) {
        this.x = x
        this.y = y
        if (z) this.z = z
        return this
    }

    setPos(p: Position) {
        return this.setCoords(p.x, p.y, p.z)
    }

    isBlighted(): boolean {
        return IsPointBlighted(this.x, this.y)
    }
}
