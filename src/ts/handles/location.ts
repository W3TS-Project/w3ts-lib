/** @noSelfInFile **/
//@ts-nocheck

import { real } from "../Utils"
import { Handle } from "./handle"

declare function Location(x: real, y: real): location
declare function RemoveLocation(whichLocation: location): void
declare function MoveLocation(whichLocation: location, newX: real, newY: real): void
declare function GetLocationX(whichLocation: location): real
declare function GetLocationY(whichLocation: location): real
declare function GetLocationZ(whichLocation: location): real


export class MapLocation extends Handle<location> {
    public constructor(x: number, y: number, z?: number) {
        super(Location(x, y))
    }

    public destroy() {
        RemoveLocation(this.getHandle)
        return this
    }

    public move(x: real, y: real) {
        MoveLocation(this.getHandle, x, y)
        return this
    }

    public set x(value: real) {
        this.move(value, this.y)
    }

    public setX(newX: real) {
        this.x = newX
        return this
    }

    public get x(): real {
        return GetLocationX(this.getHandle)
    }

    public getX(): real {
        return this.x
    }

    public set y(value: real) {
        this.move(this.x, value)
    }

    public setY(newY: real) {
        this.y = newY
        return this
    }

    public get y(): real {
        return GetLocationY(this.getHandle)
    }

    public getY(): real {
        return this.y
    }

    /**
     * This function is asynchronous. The values it returns are not guaranteed synchronous between each player.
     * If you attempt to use it in a synchronous manner, it may cause a desync.
     */
    public get z(): real {
        return GetLocationZ(this.getHandle)
    }

    public getZ(): real {
        return this.z
    }

    public static fromHandle(handle: location): MapLocation {
        return this.getObject(handle)
    }

    public static fromObject(object: MapLocation): location {
        return this.getHandle(object)
    }
}
