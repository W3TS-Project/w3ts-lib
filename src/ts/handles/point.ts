/** @noSelfInFile **/

import { MapLocation } from "./MapLocation"

declare function IsPointBlighted(x: real, y: real): boolean

export class Point {
    public x: real
    public y: real
    public z: real

    public constructor(x: real, y: real, z?: real) {
        this.x = x
        this.y = y
        this.z = z || 0
        return this
    }

    public static fromLoc(loc: MapLocation) {
        return new Point(loc.x, loc.y, loc.z)
    }

    public static fromHandleLoc(handle: location) {
        const loc = MapLocation.fromHandle(handle)
        return new Point(loc.getX(), loc.getY(), loc.getZ())
    }

    public setCoords(x: real, y: real, z: real) {
        this.x = x
        this.y = y
        this.z = z
        return this
    }

    public setPoint(p: Point) {
        return this.setCoords(p.x, p.y, p.z)
    }

    public isBlighted(): boolean {
        return IsPointBlighted(this.x, this.y)
    }
}