/** @noSelfInFile **/
// @ts-nocheck

import { Location } from "./location"

declare function IsPointBlighted(x: number, y: number): boolean

export class Point {
    x: number
    y: number
    z: number

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
        return this
    }

    static fromLoc(loc: Location) {
        return new Point(loc.x, loc.y, loc.z)
    }

    set(x: number, y: number, z: number) {
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