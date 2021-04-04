/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./handle"
import { MapPlayer } from "./player"
import { MapLocation } from "./location"
import { Rectangle } from "./rect"
import { Unit } from "./unit"
import { Widget } from "./widget"
import { code, codeboolexpr, formatOrder, integer, Order, Position, real } from "../utils"

declare function CreateGroup(): group
declare function DestroyGroup(whichGroup: group): void
declare function GroupAddUnit(whichGroup: group, whichUnit: unit): boolean
declare function GroupRemoveUnit(whichGroup: group, whichUnit: unit): boolean
declare function BlzGroupAddGroupFast(whichGroup: group, addGroup: group): integer
declare function BlzGroupRemoveGroupFast(whichGroup: group, removeGroup: group): integer
declare function GroupClear(whichGroup: group): void
declare function BlzGroupGetSize(whichGroup: group): integer
declare function BlzGroupUnitAt(whichGroup: group, index: integer): unit
declare function GroupEnumUnitsOfType(
    whichGroup: group,
    unitname: string,
    filter: boolexpr | null
): void
declare function GroupEnumUnitsOfPlayer(
    whichGroup: group,
    whichPlayer: player,
    filter: boolexpr | null
): void
declare function GroupEnumUnitsOfTypeCounted(
    whichGroup: group,
    unitname: string,
    filter: boolexpr | null,
    countLimit: integer
): void
declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter: boolexpr | null): void
declare function GroupEnumUnitsInRectCounted(
    whichGroup: group,
    r: rect,
    filter: boolexpr | null,
    countLimit: integer
): void
declare function GroupEnumUnitsInRange(
    whichGroup: group,
    x: real,
    y: real,
    radius: real,
    filter: boolexpr | null
): void
declare function GroupEnumUnitsInRangeOfLoc(
    whichGroup: group,
    whichLocation: location,
    radius: real,
    filter: boolexpr | null
): void
declare function GroupEnumUnitsInRangeCounted(
    whichGroup: group,
    x: real,
    y: real,
    radius: real,
    filter: boolexpr | null,
    countLimit: integer
): void
declare function GroupEnumUnitsInRangeOfLocCounted(
    whichGroup: group,
    whichLocation: location,
    radius: real,
    filter: boolexpr | null,
    countLimit: integer
): void
declare function GroupEnumUnitsSelected(
    whichGroup: group,
    whichPlayer: player,
    filter: boolexpr | null
): void
declare function GroupImmediateOrder(whichGroup: group, order: string): boolean
declare function GroupImmediateOrderById(whichGroup: group, order: integer): boolean
declare function GroupPointOrder(whichGroup: group, order: string, x: real, y: real): boolean
declare function GroupPointOrderLoc(
    whichGroup: group,
    order: string,
    whichLocation: location
): boolean
declare function GroupPointOrderById(whichGroup: group, order: integer, x: real, y: real): boolean
declare function GroupPointOrderByIdLoc(
    whichGroup: group,
    order: integer,
    whichLocation: location
): boolean
declare function GroupTargetOrder(whichGroup: group, order: string, targetWidget: widget): boolean
declare function GroupTargetOrderById(
    whichGroup: group,
    order: integer,
    targetWidget: widget
): boolean
declare function ForGroup(whichGroup: group, callback: () => void): void
declare function FirstOfGroup(whichGroup: group): unit
declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean
declare function GetFilterUnit(): unit
declare function GetEnumUnit(): unit

export class Group extends Handle<group> {
    public constructor() {
        super(CreateGroup())
    }

    public destroy() {
        DestroyGroup(this.getHandle)
    }

    public addUnit(whichUnit: Unit): boolean {
        return GroupAddUnit(this.getHandle, whichUnit.getHandle)
    }

    public removeUnit(whichUnit: Unit): boolean {
        return GroupRemoveUnit(this.getHandle, whichUnit.getHandle)
    }

    public fastAddGroup(addGroup: Group): integer {
        return BlzGroupAddGroupFast(this.getHandle, addGroup.getHandle)
    }

    public fastRemoveGroup(removeGroup: Group): integer {
        return BlzGroupRemoveGroupFast(this.getHandle, removeGroup.getHandle)
    }

    public clear() {
        GroupClear(this.getHandle)
        return this
    }

    public get size(): integer {
        return BlzGroupGetSize(this.getHandle)
    }

    public getUnitAt(index: integer): Unit {
        return Unit.fromHandle(BlzGroupUnitAt(this.getHandle, index))
    }

    public enumOfType(unitname: string, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfType(this.getHandle, unitname, filter)
        DestroyCondition(filter)
        return this
    }

    public enumOfPlayer(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfPlayer(this.getHandle, whichPlayer.getHandle, filter)
        DestroyCondition(filter)
        return this
    }

    public enumCountedOfType(unitname: string, countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfTypeCounted(this.getHandle, unitname, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    public enumInRect(r: Rectangle, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRect(this.getHandle, r.getHandle, filter)
        DestroyCondition(filter)
        return this
    }

    public enumCountedInRect(r: Rectangle, countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRectCounted(this.getHandle, r.getHandle, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    public enumCoordsInRange(x: real, y: real, radius: real, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRange(this.getHandle, x, y, radius, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPosInRange(p: Position, radius: real, filterFunc: codeboolexpr) {
        return this.enumCoordsInRange(p.x, p.y, radius, filterFunc)
    }

    public enumLocInRange(whichLocation: MapLocation, radius: real, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeOfLoc(this.getHandle, whichLocation.getHandle, radius, filter)
        DestroyCondition(filter)
        return this
    }

    public enumCoordsCountedInRange(
        x: real,
        y: real,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeCounted(this.getHandle, x, y, radius, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    public enumPosCountedInRange(
        p: Position,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        return this.enumCoordsCountedInRange(p.x, p.y, radius, countLimit, filterFunc)
    }

    public enumLocCountedInRange(
        whichLocation: MapLocation,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeOfLocCounted(
            this.getHandle,
            whichLocation.getHandle,
            radius,
            filter,
            countLimit
        )
        DestroyCondition(filter)
        return this
    }

    public enumSelected(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsSelected(this.getHandle, whichPlayer.getHandle, filter)
        DestroyCondition(filter)
        return this
    }

    public immediateOrder(order: Order): boolean {
        order = formatOrder(order)
        if (typeof order === "string") {
            return GroupImmediateOrder(this.getHandle, order)
        } else {
            return GroupImmediateOrderById(this.getHandle, order)
        }
    }

    public coordsOrder(order: Order, x: real, y: real): boolean {
        order = formatOrder(order)
        if (typeof order === "string") {
            return GroupPointOrder(this.getHandle, order, x, y)
        } else {
            return GroupPointOrderById(this.getHandle, order, x, y)
        }
    }

    public posOrder(order: Order, pos: Position): boolean {
        return this.coordsOrder(order, pos.x, pos.y)
    }

    public locOrder(order: Order, whichLocation: MapLocation): boolean {
        order = formatOrder(order)
        if (typeof order === "string") {
            return GroupPointOrderLoc(this.getHandle, order, whichLocation.getHandle)
        } else {
            return GroupPointOrderByIdLoc(this.getHandle, order, whichLocation.getHandle)
        }
    }

    public targetOrder(order: Order, targetWidget: Widget): boolean {
        order = formatOrder(order)
        if (typeof order === "string") {
            return GroupTargetOrder(this.getHandle, order, targetWidget.getHandle)
        } else {
            return GroupTargetOrderById(this.getHandle, order, targetWidget.getHandle)
        }
    }

    public for(callback: code) {
        ForGroup(this.getHandle, callback)
        return this
    }

    public get first() {
        return Unit.fromHandle(FirstOfGroup(this.getHandle))
    }

    public static fromHandle(handle: group): Group {
        return this.getObject(handle)
    }

    public static fromObject(handleObject: Group): group {
        return this.getHandle(handleObject)
    }
}
