/** @noSelfInFile **/
//@ts-nocheck

import { real } from "../utils"
import { Handle } from "./handle"
import { MapLocation } from "./location"
import { Point } from "./point"
import { Rectangle } from "./rect"
import { Unit } from "./unit"

declare function CreateRegion(): region
declare function RemoveRegion(whichRegion: region): void
declare function RegionAddRect(whichRegion: region, r: rect): void
declare function RegionClearRect(whichRegion: region, r: rect): void
declare function RegionAddCell(whichRegion: region, x: real, y: real): void
declare function RegionAddCellAtLoc(whichRegion: region, whichLocation: location): void
declare function RegionClearCell(whichRegion: region, x: real, y: real): void
declare function RegionClearCellAtLoc(whichRegion: region, whichLocation: location): void
declare function IsUnitInRegion(whichRegion: region, whichUnit: unit): boolean
declare function IsPointInRegion(whichRegion: region, x: real, y: real): boolean
declare function IsLocationInRegion(whichRegion: region, whichLocation: location): boolean

export class Region extends Handle<region> {
    public constructor() {
        super(CreateRegion())
    }

    public addCell(x: real, y: real) {
        RegionAddCell(this.getHandle, x, y)
        return this
    }

    public addCellPoint(whichPoint: Point) {
        return this.addCell(whichPoint.x, whichPoint.y)
    }

    public addCellLoc(whichLoc: MapLocation) {
        RegionAddCellAtLoc(this.getHandle, whichLoc.getHandle)
        return this
    }

    public addRect(r: Rectangle) {
        RegionAddRect(this.getHandle, r.getHandle)
        return this
    }

    public clearCell(x: real, y: real) {
        RegionClearCell(this.getHandle, x, y)
        return this
    }

    public clearCellPoint(whichPoint: Point) {
        return this.clearCell(whichPoint.x, whichPoint.y)
    }

    public clearCellLoc(whichLoc: MapLocation) {
        RegionClearCellAtLoc(this.getHandle, whichLoc.getHandle)
        return this
    }

    public clearRect(r: Rectangle) {
        RegionClearRect(this.getHandle, r.getHandle)
        return this
    }

    public containsCoords(x: real, y: real): boolean {
        return IsPointInRegion(this.getHandle, x, y)
    }

    public containsPoint(whichPoint: Point): boolean {
        return this.containsCoords(whichPoint.x, whichPoint.y)
    }

    public containsLoc(whichLoc: MapLocation): boolean {
        return IsLocationInRegion(this.getHandle, whichLoc.getHandle)
    }

    public containsUnit(whichUnit: Unit): boolean {
        return IsUnitInRegion(this.getHandle, whichUnit.getHandle)
    }

    public destroy() {
        RemoveRegion(this.getHandle)
    }

    public static fromHandle(handle: region): Region {
        return this.getObject(handle)
    }

    public static fromObject(object: Region): region {
        return this.getHandle(object)
    }
}
