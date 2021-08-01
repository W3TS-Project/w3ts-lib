/** @noSelfInFile **/
//@ts-nocheck

import { Position } from "../Package"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"

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
declare function EnumDestructablesInRect(r: rect, filter: boolexpr | null, actionFunc: code): void
declare function EnumItemsInRect(r: rect, filter: boolexpr | null, actionFunc: code): void
declare function GetWorldBounds(): rect

export class Rectangle extends Handle<rect> {
    public constructor(minX: real, minY: real, maxX: real, maxY: real) {
        super(Rect(minX, minY, maxX, maxY))
    }

    public getCenterX(): real {
        return GetRectCenterX(this.getHandle() as rect)
    }

    public getCenterY(): real {
        return GetRectCenterY(this.getHandle() as rect)
    }

    public getMaxX(): real {
        return GetRectMaxX(this.getHandle() as rect)
    }

    public getMaxY(): real {
        return GetRectMaxY(this.getHandle() as rect)
    }

    public getMinX(): real {
        return GetRectMinX(this.getHandle() as rect)
    }

    public getMinY(): real {
        return GetRectMinY(this.getHandle() as rect)
    }

    public destroy() {
        RemoveRect(this.getHandle() as rect)
        return this
    }

    public enumDestructables(filterFunc: codeboolexpr, actionFunc: code) {
        const filter = Condition(filterFunc)
        EnumDestructablesInRect(this.getHandle() as rect, filter, actionFunc)
        DestroyCondition(filter)
        return this
    }

    public enumItems(filterFunc: codeboolexpr, actionFunc: code) {
        const filter = Condition(filterFunc)
        EnumItemsInRect(this.getHandle() as rect, filter, actionFunc)
        DestroyCondition(filter)
        return this
    }

    public moveCoords(newCenterX: real, newCenterY: real) {
        MoveRectTo(this.getHandle() as rect, newCenterX, newCenterY)
        return this
    }

    public movePos(newPos: Position) {
        return this.moveCoords(newPos.getX(), newPos.getY())
    }

    public moveLoc(newCenterPoint: MapLocation) {
        MoveRectToLoc(this.getHandle() as rect, newCenterPoint.getHandle() as location)
        return this
    }

    public setCoords(minX: real, minY: real, maxX: real, maxY: real) {
        SetRect(this.getHandle() as rect, minX, minY, maxX, maxY)
        return this
    }

    public setPos(minPos: Position, maxPos: Position) {
        return this.setCoords(minPos.getX(), minPos.getY(), maxPos.getX(), maxPos.getY())
    }

    public setLoc(minLoc: MapLocation, maxLoc: MapLocation) {
        SetRectFromLoc(
            this.getHandle() as rect,
            minLoc.getHandle() as location,
            maxLoc.getHandle() as location
        )
        return this
    }

    public static fromHandle(handle: rect) {
        return this.getObject(handle) as Rectangle
    }

    public static fromCoords(minX: real, minY: real, maxX: real, maxY: real) {
        return this.fromHandle(Rect(minX, minY, maxX, maxY))
    }

    public static fromPos(minPos: Position, maxPos: Position) {
        return this.fromCoords(minPos.getX(), minPos.getY(), maxPos.getX(), maxPos.getY())
    }

    public static fromLoc(min: MapLocation, max: MapLocation) {
        return this.fromHandle(
            RectFromLoc(min.getHandle() as location, max.getHandle() as location)
        )
    }

    // Returns full map bounds, including unplayable borders, in world coordinates
    public static getWorldBounds() {
        return this.fromHandle(GetWorldBounds())
    }
}
