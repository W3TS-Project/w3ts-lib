/** @noSelfInFile **/
//@ts-nocheck

import { MapLocation } from "../handles/MapLocation"
import { Position } from "../Package"

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

export class StartLocPrio {
    public static defineCoords(whichStartLoc: integer, x: real, y: real) {
        DefineStartLocation(Math.round(whichStartLoc), x, y)
        return this
    }

    public static definePos(whichStartLoc: integer, p: Position) {
        return this.defineCoords(Math.round(whichStartLoc), p.getX(), p.getY())
    }

    public static defineLoc(whichStartLoc: integer, whichLocation: MapLocation) {
        DefineStartLocationLoc(Math.round(whichStartLoc), whichLocation.getHandle)
        return this
    }

    public static setCount(whichStartLoc: integer, prioSlotCount: integer) {
        SetStartLocPrioCount(Math.round(whichStartLoc), Math.round(prioSlotCount))
        return this
    }

    public static set(
        whichStartLoc: integer,
        prioSlotIndex: integer,
        otherStartLocIndex: integer,
        priority: StartLocPrio
    ) {
        SetStartLocPrio(Math.round(whichStartLoc), Math.round(prioSlotIndex), Math.round(otherStartLocIndex), priority)
        return this
    }

    public static getSlot(whichStartLoc: integer, prioSlotIndex: integer): integer {
        return GetStartLocPrioSlot(whichStartLoc, prioSlotIndex)
    }

    public static get(whichStartLoc: integer, prioSlotIndex: integer) {
        return GetStartLocPrio(whichStartLoc, prioSlotIndex)
    }

    public static getX(whichStartLocation: integer): real {
        return GetStartLocationX(whichStartLocation)
    }

    public static getY(whichStartLocation: integer): real {
        return GetStartLocationY(whichStartLocation)
    }

    static getLoc(whichStartLocation: integer): MapLocation {
        return MapLocation.fromHandle(GetStartLocationLoc(whichStartLocation))
    }
}