/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"
import { Point } from "./Point"
import { Rectangle } from "./Rectangle"
import { Unit } from "./Unit"

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
declare function GetTriggeringRegion(): region

export class Region extends Handle<region> {
    public constructor() {
        super(CreateRegion())
    }

    public addCellCoords(x: real, y: real) {
        RegionAddCell(this.getHandle, x, y)
        return this
    }

    public addCellPos(p: Position) {
        return this.addCellCoords(p.getX(), p.getY())
    }

    public addCellLoc(whichLoc: MapLocation) {
        RegionAddCellAtLoc(this.getHandle, whichLoc.getHandle)
        return this
    }

    public addRect(r: Rectangle) {
        RegionAddRect(this.getHandle, r.getHandle)
        return this
    }

    public clearCellCoords(x: real, y: real) {
        RegionClearCell(this.getHandle, x, y)
        return this
    }

    public clearCellPos(p: Position) {
        return this.clearCellCoords(p.getX(), p.getY())
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

    public containsPos(p: Position) {
        return this.containsCoords(p.getX(), p.getY())
    }

    public containsLoc(whichLoc: MapLocation): boolean {
        return IsLocationInRegion(this.getHandle, whichLoc.getHandle)
    }

    public containsUnit(whichUnit: Unit): boolean {
        return IsUnitInRegion(this.getHandle, whichUnit.getHandle)
    }

    public destroy() {
        RemoveRegion(this.getHandle)
        return this
    }

    public static fromHandle(handle: region): Region {
        return this.getObject(handle)
    }

    public static fromEvent() {
        return this.fromHandle(GetTriggeringRegion())
    }

    public static fromObject(object: Region): region {
        return this.getHandle(object)
    }
}
