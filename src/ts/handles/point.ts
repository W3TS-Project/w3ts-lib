/** @noSelfInFile **/
// @ts-nocheck

import { real } from "../utils"
import { MapLocation } from "./location"

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
        return new Point(loc.x, loc.y, loc.z)
    }

    set(x: real, y: real, z: real) {
        this.x = x
        this.y = y
        this.z = z
        return this
    }

    set(p: Point) {
        return this.set(p.x, p.y, p.z)
    }

    get isBlighted(): boolean {
        return IsPointBlighted(this.x, this.y)
    }
}
