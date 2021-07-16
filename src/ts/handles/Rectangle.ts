/** @noSelfInFile **/
//@ts-nocheck

import { code, codeboolexpr, real } from "../Utils"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"
import { Point } from "./Point"

declare function Rect(minx: real, miny: real, maxx: real, maxy: real): rect
declare function RectFromLoc(min: location, max: location): rect
declare function RemoveRect(whichRect: rect): void
declare function SetRect(whichRect: rect, minx: real, miny: real, maxx: real, maxy: real): void
declare function SetRectFromLoc(whichRect: rect, min: location, max: location): void
declare function MoveRectTo(whichRect: rect, newCenterX: real, newCenterY: real): void
declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): void
declare function GetRectCenterX(whichRect: rect): real
declare function GetRectCenterY(whichRect: rect): real
declare function GetRectMinX(whichRect: rect): real
declare function GetRectMinY(whichRect: rect): real
declare function GetRectMaxX(whichRect: rect): real
declare function GetRectMaxY(whichRect: rect): real
declare function EnumDestructablesInRect(
    r: rect,
    filter: boolexpr | null,
    actionFunc: () => void
): void
declare function EnumItemsInRect(r: rect, filter: boolexpr | null, actionFunc: () => void): void
declare function GetWorldBounds(): rect

export class Rectangle extends Handle<rect> {
    public constructor(minX: real, minY: real, maxX: real, maxY: real) {
        super(Rect(minX, minY, maxX, maxY))
    }

    public get centerX() {
        return GetRectCenterX(this.getHandle)
    }

    public get centerY() {
        return GetRectCenterY(this.getHandle)
    }

    public get maxX() {
        return GetRectMaxX(this.getHandle)
    }

    public get maxY() {
        return GetRectMaxY(this.getHandle)
    }

    public get minX() {
        return GetRectMinX(this.getHandle)
    }

    public get minY() {
        return GetRectMinY(this.getHandle)
    }

    public destroy() {
        RemoveRect(this.getHandle)
    }

    public enumDestructables(filterFunc: codeboolexpr, actionFunc: code) {
        const filter = Condition(filterFunc)
        EnumDestructablesInRect(this.getHandle, filter, actionFunc)
        DestroyCondition(filter)
        return this
    }

    public enumItems(filterFunc: codeboolexpr, actionFunc: code) {
        const filter = Condition(filterFunc)
        EnumItemsInRect(this.getHandle, filter, actionFunc)
        DestroyCondition(filter)
        return this
    }

    public move(newCenterX: real, newCenterY: real) {
        MoveRectTo(this.getHandle, newCenterX, newCenterY)
        return this
    }

    public moveLoc(newCenterPoint: MapLocation) {
        MoveRectToLoc(this.getHandle, newCenterPoint.getHandle)
        return this
    }

    public setRect(minX: real, minY: real, maxX: real, maxY: real) {
        SetRect(this.handle, minX, minY, maxX, maxY)
        return this
    }

    public setRectFromLoc(min: MapLocation, max: MapLocation) {
        SetRectFromLoc(this.getHandle, min.getHandle, max.getHandle)
        return this
    }

    public static fromHandle(handle: rect): Rectangle {
        return this.getObject(handle)
    }

    public static fromLoc(min: MapLocation, max: MapLocation) {
        return this.fromHandle(RectFromLoc(min.getHandle, max.getHandle))
    }

    public static fromPoint(min: Point, max: Point) {
        return this.fromHandle(Rect(min.x, min.y, max.x, max.y))
    }

    // Returns full map bounds, including unplayable borders, in world coordinates
    public static getWorldBounds() {
        return this.fromHandle(GetWorldBounds())
    }

    public static fromObject(object: Rectangle): rect {
        return this.getHandle(object)
    }
    
}
