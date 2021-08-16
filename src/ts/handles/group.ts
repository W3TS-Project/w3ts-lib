/** @noSelfInFile **/
//@ts-nocheck

import { Handle } from "./Handle"
import { MapPlayer } from "./MapPlayer"
import { MapLocation } from "./MapLocation"
import { Rectangle } from "./Rectangle"
import { Unit } from "./Unit"
import { Widget } from "./Widget"
import { Position, SETTING_SOME_PROPERTIES } from "../Package"
import { Order, OrderArgType } from "../Order"

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
declare function ForGroup(whichGroup: group, callback: code): void
declare function FirstOfGroup(whichGroup: group): unit

export class GroupFilterResponse {
    group: Group
    unit = Unit.fromFilter()

    constructor(group: Group) {
        this.group = group
    }
}

export type GroupFilterCallback = ((response: GroupFilterResponse) => boolean) | null | undefined

export class GroupEnumResponse {
    group: Group
    unit = Unit.fromEnum()

    constructor(group: Group) {
        this.group = group
    }
}

export type GroupEnumCallback = ((response: GroupEnumResponse) => void) | null | undefined

export class Group extends Handle<group> {
    size?: integer
    cleared = false

    constructor() {
        super(CreateGroup())
        if (SETTING_SOME_PROPERTIES) {
            this.size = 0
        }
    }

    destroy() {
        DestroyGroup(this.getHandle() as group)
        super.destroy()
    }

    addUnit(whichUnit: Unit): boolean {
        if (SETTING_SOME_PROPERTIES) {
            this.size!++
        }
        this.cleared = false
        return GroupAddUnit(this.getHandle() as group, whichUnit.getHandle() as unit)
    }

    removeUnit(whichUnit: Unit): boolean {
        const result = GroupRemoveUnit(this.getHandle() as group, whichUnit.getHandle() as unit)
        let size
        if (SETTING_SOME_PROPERTIES) {
            size = --this.size!
        } else {
            size = this.getSize()
        }
        this.cleared = size == 0
        return result
    }

    fastAddGroup(addGroup: Group): integer {
        if (SETTING_SOME_PROPERTIES) {
            this.size! += addGroup.getSize()
        }
        this.cleared = false
        return BlzGroupAddGroupFast(this.getHandle() as group, addGroup.getHandle() as group)
    }

    fastRemoveGroup(removeGroup: Group): integer {
        const result = BlzGroupRemoveGroupFast(
            this.getHandle() as group,
            removeGroup.getHandle() as group
        )
        let size
        if (SETTING_SOME_PROPERTIES) {
            this.size! -= removeGroup.getSize()
            size = this.size
        } else {
            size = this.getSize()
        }
        this.cleared = size == 0
        return result
    }

    clear() {
        GroupClear(this.getHandle() as group)
        this.cleared = true
        return this
    }

    getSize(): integer {
        return BlzGroupGetSize(this.getHandle() as group)
    }

    getUnitAt(index: integer): Unit {
        return Unit.fromHandle(BlzGroupUnitAt(this.getHandle() as group, Math.floor(index)))
    }

    private getFilter(func: GroupFilterCallback) {
        if (func) {
            return Condition(() => func(new GroupFilterResponse(this)))
        } else {
            return Condition(func)
        }
    }

    private enumCall(func: GroupFilterCallback, call: (filter: conditionfunc) => void) {
        const filter = this.getFilter(func)
        call(filter)
        DestroyCondition(filter)
        let size
        if (SETTING_SOME_PROPERTIES) {
            this.size = this.getSize()
            size = this.size
        } else {
            size = this.getSize()
        }
        this.cleared = size == 0
        return this
    }

    enumOfType(unitname: string, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsOfType(this.getHandle() as group, unitname, filter)
        )
    }

    enumOfPlayer(whichPlayer: MapPlayer, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsOfPlayer(
                this.getHandle() as group,
                whichPlayer.getHandle() as player,
                filter
            )
        )
    }

    enumCountedOfType(unitname: string, countLimit: integer, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsOfTypeCounted(
                this.getHandle() as group,
                unitname,
                filter,
                Math.floor(countLimit)
            )
        )
    }

    enumInRect(r: Rectangle, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsInRect(this.getHandle() as group, r.getHandle() as rect, filter)
        )
    }

    enumCountedInRect(r: Rectangle, countLimit: integer, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsInRectCounted(
                this.getHandle() as group,
                r.getHandle() as rect,
                filter,
                Math.floor(countLimit)
            )
        )
    }

    enumCoordsInRange(x: real, y: real, radius: real, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsInRange(this.getHandle() as group, x, y, radius, filter)
        )
    }

    enumPosInRange(p: Position, radius: real, func: GroupFilterCallback) {
        return this.enumCoordsInRange(p.x, p.y, radius, func)
    }

    enumLocInRange(whichLocation: MapLocation, radius: real, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsInRangeOfLoc(
                this.getHandle() as group,
                whichLocation.getHandle() as location,
                radius,
                filter
            )
        )
    }

    enumCoordsCountedInRange(
        x: real,
        y: real,
        radius: real,
        countLimit: integer,
        func: GroupFilterCallback
    ) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsInRangeCounted(
                this.getHandle() as group,
                x,
                y,
                radius,
                filter,
                Math.floor(countLimit)
            )
        )
    }

    enumPosCountedInRange(
        p: Position,
        radius: real,
        countLimit: integer,
        func: GroupFilterCallback
    ) {
        return this.enumCoordsCountedInRange(p.x, p.y, radius, Math.floor(countLimit), func)
    }

    enumLocCountedInRange(
        whichLocation: MapLocation,
        radius: real,
        countLimit: integer,
        func: GroupFilterCallback
    ) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsInRangeOfLocCounted(
                this.getHandle() as group,
                whichLocation.getHandle() as location,
                radius,
                filter,
                Math.floor(countLimit)
            )
        )
    }

    enumSelected(whichPlayer: MapPlayer, func: GroupFilterCallback) {
        return this.enumCall(func, filter =>
            GroupEnumUnitsSelected(
                this.getHandle() as group,
                whichPlayer.getHandle() as player,
                filter
            )
        )
    }

    getRandom() {
        return this.getUnitAt(math.random(0, this.getSize()))
    }

    immediateOrder(order: OrderArgType): boolean {
        return GroupImmediateOrderById(this.getHandle() as group, Order.toId(order))
    }

    // immediateOrderById(order: Order): boolean {
    //     return GroupImmediateOrderById(this.getHandle() as group, order.getId())
    // }

    coordsOrder(order: OrderArgType, x: real, y: real): boolean {
        return GroupPointOrderById(this.getHandle() as group, Order.toId(order), x, y)
    }

    // coordsOrderById(order: Order, x: real, y: real): boolean {
    //     return GroupPointOrderById(this.getHandle() as group, order.getId(), x, y)
    // }

    posOrder(order: OrderArgType, pos: Position): boolean {
        return this.coordsOrder(order, pos.x, pos.y)
    }

    // posOrderById(order: Order, pos: Position): boolean {
    //     return this.coordsOrderById(order, pos.x, pos.y)
    // }

    locOrder(order: OrderArgType, whichLocation: MapLocation): boolean {
        return GroupPointOrderByIdLoc(
            this.getHandle() as group,
            Order.toId(order),
            whichLocation.getHandle() as location
        )
    }

    // locOrderById(order: Order, whichLocation: MapLocation): boolean {
    //     return GroupPointOrderByIdLoc(
    //         this.getHandle() as group,
    //         order.getId(),
    //         whichLocation.getHandle() as location
    //     )
    // }

    targetOrder(order: OrderArgType, targetWidget: Widget): boolean {
        return GroupTargetOrderById(
            this.getHandle() as group,
            Order.toId(order),
            targetWidget.getHandle() as widget
        )
    }

    // targetOrderById(order: Order, targetWidget: Widget): boolean {
    //     return GroupTargetOrderById(
    //         this.getHandle() as group,
    //         order.getId(),
    //         targetWidget.getHandle() as widget
    //     )
    // }

    private getEnumCallback(func: GroupEnumCallback) {
        if (func) {
            return () => func(new GroupEnumResponse(this))
        }
        return null
    }

    forEach(func: GroupEnumCallback) {
        ForGroup(this.getHandle() as group, this.getEnumCallback(func))
        return this
    }

    first() {
        return Unit.fromHandle(FirstOfGroup(this.getHandle() as group))
    }

    static fromHandle(handle: group): Group {
        return this.getObject(handle) as Group
    }
}
