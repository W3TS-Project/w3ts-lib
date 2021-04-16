/** @noSelfInFile **/

import { real } from "../utils"
import { Handle } from "./handle"
import { Point, point } from "./point"

declare function Location(x: real, y: real): location
declare function RemoveLocation(whichLocation: location): void
declare function MoveLocation(whichLocation: location, newX: real, newY: real): void
declare function GetLocationX(whichLocation: location): real
declare function GetLocationY(whichLocation: location): real
declare function GetLocationZ(whichLocation: location): real

export const ModuleLocation = {
    allocate(x: real, y: real, z?: real) {
        return Location(x, y)
    },

    remove(whichLocation: location) {
        RemoveLocation(whichLocation)
    },

    getX(whichLocation: location) {
        return GetLocationX(whichLocation)
    },

    getY(whichLocation: location) {
        return GetLocationY(whichLocation)
    },

    /**
     * This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
     * If you attempt to use it in a synchronous manner, it may cause a desync.
     */
    getZ(whichLocation: location) {
        return GetLocationZ(whichLocation)
    },

    moveFromCoords(whichLocation: location, newX: real, newY: real) {
        MoveLocation(whichLocation, newX, newY)
    },

    moveFromPoint(whichLocation: location, newPoint: point) {
        this.moveFromCoords(whichLocation, newPoint.x, newPoint.y)
    }
}


// export class MapLocation extends Handle<location> {
//     public constructor(x: number, y: number, z?: number) {
//         super(Location(x, y))
//     }

//     public destroy() {
//         RemoveLocation(this.getHandle)
//         return this
//     }

//     public move(x: real, y: real) {
//         MoveLocation(this.getHandle, x, y)
//         return this
//     }

//     public set x(value: real) {
//         this.move(value, this.y)
//     }

//     public get x(): real {
//         return GetLocationX(this.getHandle)
//     }

//     public set y(value: real) {
//         this.move(this.x, value)
//     }

//     public get y(): real {
//         return GetLocationY(this.getHandle)
//     }

//     /**
//      * This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
//      * If you attempt to use it in a synchronous manner, it may cause a desync.
//      */
//     public get z(): real {
//         return GetLocationZ(this.getHandle)
//     }

//     public static fromHandle(handle: location): MapLocation {
//         return this.getObject(handle)
//     }

//     public static fromObject(object: MapLocation): location {
//         return this.getHandle(object)
//     }
// }
