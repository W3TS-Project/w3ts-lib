/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"
import { MapLocation } from "./MapLocation"
import { Rectangle } from "./Rectangle"
import { Unit } from "./Unit"
import { Widget } from "./Widget"
import { Position } from "../Package"
import { Order } from "../Order"

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

export class Group extends Handle<group> {
    public constructor() {
        super(CreateGroup())
    }

    public destroy() {
        DestroyGroup(this.getHandle() as group)
        return this
    }

    public addUnit(whichUnit: Unit): boolean {
        return GroupAddUnit(this.getHandle() as group, whichUnit.getHandle() as unit)
    }

    public removeUnit(whichUnit: Unit): boolean {
        return GroupRemoveUnit(this.getHandle() as group, whichUnit.getHandle() as unit)
    }

    public fastAddGroup(addGroup: Group): integer {
        return BlzGroupAddGroupFast(this.getHandle() as group, addGroup.getHandle() as group)
    }

    public fastRemoveGroup(removeGroup: Group): integer {
        return BlzGroupRemoveGroupFast(this.getHandle() as group, removeGroup.getHandle() as group)
    }

    public clear() {
        GroupClear(this.getHandle() as group)
        return this
    }

    public getSize(): integer {
        return BlzGroupGetSize(this.getHandle() as group)
    }

    public getUnitAt(index: integer): Unit {
        return Unit.fromHandle(BlzGroupUnitAt(this.getHandle() as group, Math.floor(index)))
    }

    public enumOfType(unitname: string, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfType(this.getHandle() as group, unitname, filter)
        DestroyCondition(filter)
        return this
    }

    public enumOfPlayer(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfPlayer(this.getHandle() as group, whichPlayer.getHandle() as player, filter)
        DestroyCondition(filter)
        return this
    }

    public enumCountedOfType(unitname: string, countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsOfTypeCounted(
            this.getHandle() as group,
            unitname,
            filter,
            Math.floor(countLimit)
        )
        DestroyCondition(filter)
        return this
    }

    public enumInRect(r: Rectangle, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRect(this.getHandle() as group, r.getHandle() as rect, filter)
        DestroyCondition(filter)
        return this
    }

    public enumCountedInRect(r: Rectangle, countLimit: integer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRectCounted(
            this.getHandle() as group,
            r.getHandle() as rect,
            filter,
            Math.floor(countLimit)
        )
        DestroyCondition(filter)
        return this
    }

    public enumCoordsInRange(x: real, y: real, radius: real, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRange(this.getHandle() as group, x, y, radius, filter)
        DestroyCondition(filter)
        return this
    }

    public enumPosInRange(p: Position, radius: real, filterFunc: codeboolexpr) {
        return this.enumCoordsInRange(p.getX(), p.getY(), radius, filterFunc)
    }

    public enumLocInRange(whichLocation: MapLocation, radius: real, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeOfLoc(
            this.getHandle() as group,
            whichLocation.getHandle() as location,
            radius,
            filter
        )
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
        GroupEnumUnitsInRangeCounted(
            this.getHandle() as group,
            x,
            y,
            radius,
            filter,
            Math.floor(countLimit)
        )
        DestroyCondition(filter)
        return this
    }

    public enumPosCountedInRange(
        p: Position,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        return this.enumCoordsCountedInRange(
            p.getX(),
            p.getY(),
            radius,
            Math.floor(countLimit),
            filterFunc
        )
    }

    public enumLocCountedInRange(
        whichLocation: MapLocation,
        radius: real,
        countLimit: integer,
        filterFunc: codeboolexpr
    ) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsInRangeOfLocCounted(
            this.getHandle() as group,
            whichLocation.getHandle() as location,
            radius,
            filter,
            Math.floor(countLimit)
        )
        DestroyCondition(filter)
        return this
    }

    public enumSelected(whichPlayer: MapPlayer, filterFunc: codeboolexpr) {
        const filter = Condition(filterFunc)
        GroupEnumUnitsSelected(this.getHandle() as group, whichPlayer.getHandle() as player, filter)
        DestroyCondition(filter)
        return this
    }

    public immediateOrder(order: Order): boolean {
        return GroupImmediateOrder(this.getHandle() as group, order.getStr())
    }

    public immediateOrderById(order: Order): boolean {
        return GroupImmediateOrderById(this.getHandle() as group, order.getId())
    }

    public coordsOrder(order: Order, x: real, y: real): boolean {
        return GroupPointOrder(this.getHandle() as group, order.getStr(), x, y)
    }

    public coordsOrderById(order: Order, x: real, y: real): boolean {
        return GroupPointOrderById(this.getHandle() as group, order.getId(), x, y)
    }

    public posOrder(order: Order, pos: Position): boolean {
        return this.coordsOrder(order, pos.getX(), pos.getY())
    }

    public posOrderById(order: Order, pos: Position): boolean {
        return this.coordsOrderById(order, pos.getX(), pos.getY())
    }

    public locOrder(order: Order, whichLocation: MapLocation): boolean {
        return GroupPointOrderLoc(
            this.getHandle() as group,
            order.getStr(),
            whichLocation.getHandle() as location
        )
    }

    public locOrderById(order: Order, whichLocation: MapLocation): boolean {
        return GroupPointOrderByIdLoc(
            this.getHandle() as group,
            order.getId(),
            whichLocation.getHandle() as location
        )
    }

    public targetOrder(order: Order, targetWidget: Widget): boolean {
        return GroupTargetOrder(
            this.getHandle() as group,
            order.getStr(),
            targetWidget.getHandle() as widget
        )
    }

    public targetOrderById(order: Order, targetWidget: Widget): boolean {
        return GroupTargetOrderById(
            this.getHandle() as group,
            order.getId(),
            targetWidget.getHandle() as widget
        )
    }

    public forEach(callback: code) {
        ForGroup(this.getHandle() as group, callback)
        return this
    }

    public first() {
        return Unit.fromHandle(FirstOfGroup(this.getHandle() as group))
    }

    public static fromHandle(handle: group): Group {
        return this.getObject(handle) as Group
    }
}
