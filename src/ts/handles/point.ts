/** @noSelfInFile **/

import { real } from "../utils"
import { ModuleLocation } from "./location"

export type point = {
    x: real
    y: real
    z: real
}

export const Point = {
    get(x: real, y: real, z?: real) {
        return { x, y, z }
    },

    fromLoc(loc: location) {
        return this.get(
            ModuleLocation.getX(loc),
            ModuleLocation.getY(loc),
            ModuleLocation.getZ(loc)
        )
    },

    setFromCoords(whichPoint: point, x: real, y: real, z?: real) {
        whichPoint.x = x
        whichPoint.y = y
        whichPoint.z = z || whichPoint.z
    },

    setFromLoc(whichPoint: point, whichLoc: location) {
        this.setFromCoords(
            whichPoint,
            ModuleLocation.getX(whichLoc),
            ModuleLocation.getY(whichLoc),
            ModuleLocation.getZ(whichLoc)
        )
    },

    setFromPoint(whichPoint: point, newPoint: point) {
        this.setFromCoords(whichPoint, newPoint.x, newPoint.y, newPoint.z)
    }
}
