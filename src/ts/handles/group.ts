import { Handle } from "./handle"
import { MapPlayer } from "./player"
import { Location, Point } from "./location"
import { Rectangle } from "./rect"
import { Unit } from "./unit"
import { Widget } from "./widget"
import { code, codeboolexpr, integer, Position, real } from "../main"

declare function Condition(func: code): conditionfunc
declare function DestroyCondition(c: conditionfunc): void
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
    constructor() {
        super(Handle.initFromHandle() ? undefined : CreateGroup())
    }

    destroy() {
        DestroyGroup(this.handle)
    }

    addUnit(whichUnit: Unit): boolean {
        return GroupAddUnit(this.handle, whichUnit.handle)
    }

    removeUnit(whichUnit: Unit): boolean {
        return GroupRemoveUnit(this.handle, whichUnit.handle)
    }

    fastAddGroup(addGroup: Group): integer {
        return BlzGroupAddGroupFast(this.handle, addGroup.handle)
    }

    fastRemoveGroup(removeGroup: Group): integer {
        return BlzGroupRemoveGroupFast(this.handle, removeGroup.handle)
    }

    clear() {
        GroupClear(this.handle)
        return this
    }

    get size(): integer {
        return BlzGroupGetSize(this.handle)
    }

    getUnitAt(index: integer): Unit {
        return Unit.fromHandle(BlzGroupUnitAt(this.handle, index))
    }

    enumOfType(unitname: string, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfType(this.handle, unitname, filter)
        DestroyCondition(filter)
        return this
    }

    enumOfPlayer(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfPlayer(this.handle, whichPlayer.handle, filter)
        DestroyCondition(filter)
        return this
    }

    enumCountedOfType(unitname: string, countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfTypeCounted(this.handle, unitname, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    enumInRect(r: Rectangle, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRect(this.handle, r.handle, filter)
        DestroyCondition(filter)
        return this
    }

    enumCountedInRect(r: Rectangle, countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRectCounted(this.handle, r.handle, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    enumCoordsInRange(x: real, y: real, radius: real, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRange(this.handle, x, y, radius, filter)
        DestroyCondition(filter)
        return this
    }

    enumPosInRange(p: Position, radius: real, filterFunc: codeboolexpr) {
        return this.enumCoordsInRange(p.x, p.y, radius, filterFunc)
    }

    enumLocInRange(whichLocation: Location, radius: real, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeOfLoc(this.handle, whichLocation.handle, radius, filter)
        DestroyCondition(filter)
        return this
    }

    enumCoordsCountedInRange(
        x: real,
        y: real,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeCounted(this.handle, x, y, radius, filter, countLimit)
        DestroyCondition(filter)
        return this
    }

    enumPosCountedInRange(
        p: Position,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        return this.enumCoordsCountedInRange(p.x, p.y, radius, countLimit, filterFunc)
    }

    enumLocCountedInRange(
        whichLocation: Location,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeOfLocCounted(
            this.handle,
            whichLocation.handle,
            radius,
            filter,
            countLimit
        )
        DestroyCondition(filter)
        return this
    }

    enumSelected(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsSelected(this.handle, whichPlayer.handle, filter)
        DestroyCondition(filter)
    }
    

    for(callback: () => void) {
        ForGroup(this.handle, callback)
    }

    get first() {
        return Unit.fromHandle(FirstOfGroup(this.handle))
    }

    hasUnit(whichUnit: Unit) {
        return IsUnitInGroup(whichUnit.handle, this.handle)
    }

    orderCoords(order: string | number, x: number, y: number) {
        if (typeof order === "string") {
            GroupPointOrder(this.handle, order, x, y)
        } else {
            GroupPointOrderById(this.handle, order, x, y)
        }
    }

    orderImmediate(order: string | number) {
        if (typeof order === "string") {
            GroupImmediateOrder(this.handle, order)
        } else {
            GroupImmediateOrderById(this.handle, order)
        }
    }

    orderPoint(order: string | number, whichPoint: Point) {
        if (typeof order === "string") {
            GroupPointOrderLoc(this.handle, order, whichPoint.handle)
        } else {
            GroupPointOrderByIdLoc(this.handle, order, whichPoint.handle)
        }
    }

    orderTarget(order: string | number, targetWidget: Widget | Unit) {
        if (typeof order === "string") {
            GroupTargetOrder(this.handle, order, targetWidget.handle)
        } else {
            GroupTargetOrderById(this.handle, order, targetWidget.handle)
        }
    }

    removeGroupFast(removeGroup: Group): number {
        return BlzGroupRemoveGroupFast(this.handle, removeGroup.handle)
    }

    removeUnit(whichUnit: Unit): boolean {
        return GroupRemoveUnit(this.handle, whichUnit.handle)
    }

    static fromHandle(handle: group): Group {
        return this.getObject(handle)
    }

    static getEnumUnit(): Unit {
        return Unit.fromHandle(GetEnumUnit())
    }

    static getFilterUnit(): Unit {
        return Unit.fromHandle(GetFilterUnit())
    }
}
