/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "./player"
import { Widget } from "./widget"
import { code, codeboolexpr, formatCC, integer, Position, RawCode, real } from "../Utils"
import { Rectangle } from "./rect"
import { Ability } from "./ability"

declare function BlzCreateItemWithSkin(itemid: integer, x: real, y: real, skinId: integer): item
declare function CreateItem(itemid: integer, x: real, y: real): item
declare function RemoveItem(whichItem: item): void
declare function GetItemPlayer(whichItem: item): player
declare function GetItemTypeId(i: item): integer
declare function GetItemX(i: item): real
declare function GetItemY(i: item): real
declare function SetItemPosition(i: item, x: real, y: real): void
declare function SetItemDropOnDeath(whichItem: item, flag: boolean): void
declare function SetItemDroppable(i: item, flag: boolean): void
declare function SetItemPawnable(i: item, flag: boolean): void
declare function SetItemPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): void
declare function SetItemInvulnerable(whichItem: item, flag: boolean): void
declare function IsItemInvulnerable(whichItem: item): boolean
declare function SetItemVisible(whichItem: item, show: boolean): void
declare function IsItemVisible(whichItem: item): boolean
declare function IsItemOwned(whichItem: item): boolean
declare function IsItemPowerup(whichItem: item): boolean
declare function IsItemSellable(whichItem: item): boolean
declare function IsItemPawnable(whichItem: item): boolean
declare function IsItemIdPowerup(itemId: integer): boolean
declare function IsItemIdSellable(itemId: integer): boolean
declare function IsItemIdPawnable(itemId: integer): boolean
declare function EnumItemsInRect(r: rect, filter: boolexpr | null, actionFunc: code | null): void
declare function GetItemLevel(whichItem: item): integer
declare function GetItemType(whichItem: item): itemtype
declare function SetItemDropID(whichItem: item, unitId: integer): void
declare function GetItemName(whichItem: item): string
declare function GetItemCharges(whichItem: item): integer
declare function SetItemCharges(whichItem: item, charges: integer): void
declare function GetItemUserData(whichItem: item): integer
declare function SetItemUserData(whichItem: item, data: integer): void
declare function BlzSetItemName(whichItem: item, name: string): void
declare function BlzGetItemSkin(whichItem: item): integer
declare function BlzSetItemSkin(whichItem: item, skinId: integer): void
declare function BlzGetItemAbilityByIndex(whichItem: item, index: integer): ability
declare function BlzGetItemAbility(whichItem: item, abilCode: integer): ability
declare function BlzItemAddAbility(whichItem: item, abilCode: integer): boolean
declare function BlzGetItemBooleanField(whichItem: item, whichField: itembooleanfield): boolean
declare function BlzGetItemIntegerField(whichItem: item, whichField: itemintegerfield): integer
declare function BlzGetItemRealField(whichItem: item, whichField: itemrealfield): real
declare function BlzGetItemStringField(whichItem: item, whichField: itemstringfield): string
declare function BlzSetItemBooleanField(
    whichItem: item,
    whichField: itembooleanfield,
    value: boolean
): boolean
declare function BlzSetItemIntegerField(
    whichItem: item,
    whichField: itemintegerfield,
    value: integer
): boolean
declare function BlzSetItemRealField(
    whichItem: item,
    whichField: itemrealfield,
    value: real
): boolean
declare function BlzSetItemStringField(
    whichItem: item,
    whichField: itemstringfield,
    value: string
): boolean
declare function BlzItemRemoveAbility(whichItem: item, abilCode: integer): boolean
declare function GetFilterItem(): item
declare function GetEnumItem(): item

export class Item extends Widget {
    public readonly handle!: item

    public constructor(itemId: integer, x: real, y: real, skinId?: integer) {
        if (skinId) {
            super(BlzCreateItemWithSkin(itemId, x, y, skinId))
        } else {
            super(CreateItem(itemId, x, y))
        }
    }

    public destroy() {
        RemoveItem(this.getHandle)
        return this
    }

    public getOwner() {
        return MapPlayer.fromHandle(GetItemPlayer(this.getHandle))
    }

    public get typeId(): integer {
        return GetItemTypeId(this.getHandle)
    }

    public get x(): real {
        return GetItemX(this.getHandle)
    }

    public get y(): real {
        return GetItemY(this.getHandle)
    }

    public setCoords(x: real, y: real) {
        SetItemPosition(this.getHandle, x, y)
        return this
    }

    public set x(x: real) {
        this.setCoords(x, this.y)
    }

    public set y(y: real) {
        this.setCoords(this.x, y)
    }

    public setPos(pos: Position) {
        return this.setCoords(pos.x, pos.y)
    }

    public setDropOnDeath(flag: boolean) {
        SetItemDropOnDeath(this.getHandle, flag)
        return this
    }

    public set dropOnDeath(flag: boolean) {
        this.setDropOnDeath(flag)
    }

    public setDroppable(flag: boolean) {
        SetItemDroppable(this.getHandle, flag)
        return this
    }

    public set droppable(flag: boolean) {
        this.setDroppable(flag)
    }

    public setPawnable(flag: boolean) {
        SetItemPawnable(this.getHandle, flag)
        return this
    }

    public set pawnable(flag: boolean) {
        this.setPawnable(flag)
    }

    public setPlayer(whichPlayer: MapPlayer, changeColor: boolean) {
        SetItemPlayer(this.getHandle, whichPlayer.getHandle, changeColor)
        return this
    }

    public set invulnerable(flag: boolean) {
        SetItemInvulnerable(this.getHandle, flag)
    }

    public get invulnerable(): boolean {
        return IsItemInvulnerable(this.getHandle)
    }

    public set visible(show: boolean) {
        SetItemVisible(this.getHandle, show)
    }

    public get visible(): boolean {
        return IsItemVisible(this.getHandle)
    }

    public isOwned(): boolean {
        return IsItemOwned(this.getHandle)
    }

    public isPowerup(): boolean {
        return IsItemPowerup(this.getHandle)
    }

    public isSellable(): boolean {
        return IsItemSellable(this.getHandle)
    }

    public isPawnable(): boolean {
        return IsItemPawnable(this.getHandle)
    }

    public static isPowerup(itemId: RawCode): boolean {
        return IsItemIdPowerup(formatCC(itemId))
    }

    public static isSellable(itemId: RawCode): boolean {
        return IsItemIdSellable(formatCC(itemId))
    }

    public static isPawnable(itemId: RawCode): boolean {
        return IsItemIdPawnable(formatCC(itemId))
    }

    public static enumInRect(r: Rectangle, filterFunc: codeboolexpr, actionFunc: code) {
        const filter = Condition(filterFunc)
        EnumItemsInRect(r.getHandle, filter, actionFunc)
        DestroyCondition(filter)
        return this
    }

    public getLevel(): integer {
        return GetItemLevel(this.getHandle)
    }

    public get type(): itemtype {
        return GetItemType(this.getHandle)
    }

    public set dropID(unitId: RawCode) {
        SetItemDropID(this.getHandle, formatCC(unitId))
    }

    public setDropID(unitId: number) {
        SetItemDropID(this.getHandle, unitId)
        return this
    }

    public set name(value: string) {
        BlzSetItemName(this.getHandle, value)
    }

    public get name(): string {
        return GetItemName(this.getHandle)
    }

    public get charges(): integer {
        return GetItemCharges(this.getHandle)
    }

    public set charges(value: integer) {
        SetItemCharges(this.getHandle, value)
    }

    public get userData(): integer {
        return GetItemUserData(this.getHandle)
    }

    public set userData(data: integer) {
        SetItemUserData(this.getHandle, data)
    }

    public getByIndexAbility(index: integer) {
        return Ability.fromHandle(BlzGetItemAbilityByIndex(this.getHandle, index))
    }

    public getAbility(abilCode: RawCode) {
        return Ability.fromHandle(BlzGetItemAbility(this.getHandle, formatCC(abilCode)))
    }

    public addAbility(abilCode: RawCode): boolean {
        return BlzItemAddAbility(this.getHandle, formatCC(abilCode))
    }

    public get skin(): integer {
        return BlzGetItemSkin(this.getHandle)
    }

    public set skin(skinId: integer) {
        BlzSetItemSkin(this.getHandle, skinId)
    }

    public getField(
        field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield
    ): boolean | integer | real | string {
        const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

        switch (fieldType) {
            case "unitbooleanfield":
                return BlzGetItemBooleanField(this.getHandle, field as itembooleanfield)
            case "unitintegerfield":
                return BlzGetItemIntegerField(this.getHandle, field as itemintegerfield)
            case "unitrealfield":
                return BlzGetItemRealField(this.getHandle, field as itemrealfield)
            case "unitstringfield":
                return BlzGetItemStringField(this.getHandle, field as itemstringfield)
            default:
                return 0
        }
    }

    public setField(
        field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield,
        value: boolean | number | string
    ) {
        const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

        if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
            return BlzSetItemBooleanField(this.getHandle, field as itembooleanfield, value)
        } else if (fieldType === "unitintegerfield" && typeof value === "number") {
            return BlzSetItemIntegerField(this.getHandle, field as itemintegerfield, value)
        } else if (fieldType === "unitrealfield" && typeof value === "number") {
            return BlzSetItemRealField(this.getHandle, field as itemrealfield, value)
        } else if (fieldType === "unitstringfield" && typeof value === "string") {
            return BlzSetItemStringField(this.getHandle, field as itemstringfield, value)
        }

        return false
    }

    public removeAbility(abilCode: RawCode): boolean {
        return BlzItemRemoveAbility(this.getHandle, formatCC(abilCode))
    }

    public static fromHandle(handle: item): Item {
        return this.getObject(handle)
    }

    public static fromFilter() {
        return this.fromHandle(GetFilterItem())
    }

    public static fromEnum() {
        return this.fromHandle(GetEnumItem())
    }

    public static fromObject(object: Item): item {
        return this.getHandle(object)
    }
}
