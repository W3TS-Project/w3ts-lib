// /** @noSelfInFile **/
// // @ts-nocheck

import { MapLocation } from "../handles/MapLocation"
import { Point } from "../handles/Point"
import { Position } from "../Package"
import { StartLocPrio } from "./fields/mapSetup/StartLocPrio"

declare function DefineStartLocation(whichStartLoc: integer, x: real, y: real): void
declare function DefineStartLocationLoc(whichStartLoc: integer, whichLocation: location): void
declare function SetStartLocPrioCount(whichStartLoc: integer, prioSlotCount: integer): void
declare function SetStartLocPrio(
    whichStartLoc: integer,
    prioSlotIndex: integer,
    otherStartLocIndex: integer,
    priority: startlocprio
): void
declare function GetStartLocPrioSlot(whichStartLoc: integer, prioSlotIndex: integer): integer
declare function GetStartLocPrio(whichStartLoc: integer, prioSlotIndex: integer): startlocprio
declare function GetStartLocationX(whichStartLocation: integer): real
declare function GetStartLocationY(whichStartLocation: integer): real
declare function GetStartLocationLoc(whichStartLocation: integer): location

export class StartLocation {
    protected readonly num: integer
    static arr: StartLocation[]

    protected constructor(num: integer) {
        this.num = num
        StartLocation.arr[num] = this
    }

    public getNum() {
        return this.num
    }

    public static defineCoords(whichStartLoc: integer, x: real, y: real) {
        whichStartLoc = Math.floor(whichStartLoc)
        DefineStartLocation(whichStartLoc, x, y)
        return new this(whichStartLoc)
    }

    public static definePos(whichStartLoc: integer, p: Position) {
        return this.defineCoords(whichStartLoc, p.getX(), p.getY())
    }

    public static defineLoc(whichStartLoc: integer, whichLocation: MapLocation) {
        whichStartLoc = Math.floor(whichStartLoc)
        DefineStartLocationLoc(whichStartLoc, whichLocation.getHandle)
        return new this(whichStartLoc)
    }

    public setCount(prioSlotCount: integer) {
        SetStartLocPrioCount(this.num, Math.floor(prioSlotCount))
        return this
    }

    public set(prioSlotIndex: integer, otherStartLocIndex: integer, priority: StartLocPrio) {
        SetStartLocPrio(
            this.num,
            Math.floor(prioSlotIndex),
            Math.floor(otherStartLocIndex),
            priority.getHandle
        )
        return this
    }

    public getSlot(prioSlotIndex: integer): integer {
        return GetStartLocPrioSlot(this.num, Math.floor(prioSlotIndex))
    }

    public get(prioSlotIndex: integer): StartLocPrio {
        return StartLocPrio.fromHandle(GetStartLocPrio(this.num, prioSlotIndex))
    }

    public getX(): real {
        return GetStartLocationX(this.num)
    }

    public getY(): real {
        return GetStartLocationY(this.num)
    }

    public getPos(): Position {
        return new Point(this.getX(), this.getY())
    }

    public getLoc(): MapLocation {
        return MapLocation.fromHandle(GetStartLocationLoc(this.num))
    }
}
