/** @noSelfInFile **/
// @ts-nocheck

import { Handle } from "./handle"
import { MapPlayer } from "./player"
import { Widget } from "./widget"
import { code, codeboolexpr, formatCC, integer, Position, RawCode, real } from "../main"
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

export class Item extends Widget {
    readonly handle!: item

    constructor(itemId: integer, x: real, y: real, skinId?: integer) {
        if (Handle.initFromHandle()) {
            super()
        } else {
            super(skinId ? BlzCreateItemWithSkin(itemId, x, y, skinId) : CreateItem(itemId, x, y))
        }
    }

    destroy() {
        RemoveItem(this.handle)
        return this
    }

    getOwner() {
        return MapPlayer.fromHandle(GetItemPlayer(this.handle))
    }

    get typeId() {
        return GetItemTypeId(this.handle)
    }

    get x() {
        return GetItemX(this.handle)
    }

    get y() {
        return GetItemY(this.handle)
    }

    setCoords(x: real, y: real) {
        SetItemPosition(this.handle, x, y)
        return this
    }

    set x(x: real) {
        this.setCoords(x, this.y)
    }

    set y(y: real) {
        this.setCoords(this.x, y)
    }

    setPos(pos: Position) {
        return this.setCoords(pos.x, pos.y)
    }

    setDropOnDeath(flag: boolean) {
        SetItemDropOnDeath(this.handle, flag)
        return this
    }

    set dropOnDeath(flag: boolean) {
        this.setDropOnDeath(flag)
    }

    setDroppable(flag: boolean) {
        SetItemDroppable(this.handle, flag)
        return this
    }

    set droppable(flag: boolean) {
        this.setDroppable(flag)
    }

    setPawnable(flag: boolean) {
        SetItemPawnable(this.handle, flag)
        return this
    }

    set pawnable(flag: boolean) {
        this.setPawnable(flag)
    }

    setPlayer(whichPlayer: MapPlayer, changeColor: boolean) {
        SetItemPlayer(this.handle, whichPlayer.handle, changeColor)
        return this
    }

    set invulnerable(flag: boolean) {
        SetItemInvulnerable(this.handle, flag)
    }

    get invulnerable() {
        return IsItemInvulnerable(this.handle)
    }

    set visible(show: boolean) {
        SetItemVisible(this.handle, show)
    }

    get visible() {
        return IsItemVisible(this.handle)
    }

    isOwned() {
        return IsItemOwned(this.handle)
    }

    isPowerup() {
        return IsItemPowerup(this.handle)
    }

    isSellable() {
        return IsItemSellable(this.handle)
    }

    isPawnable() {
        return IsItemPawnable(this.handle)
    }

    static isPowerup(itemId: RawCode) {
        return IsItemIdPowerup(formatCC(itemId))
    }

    static isSellable(itemId: RawCode) {
        return IsItemIdSellable(formatCC(itemId))
    }

    static isPawnable(itemId: RawCode) {
        return IsItemIdPawnable(formatCC(itemId))
    }

    static enumInRect(r: Rectangle, filterFunc: codeboolexpr, actionFunc: code) {
        const filter = Condition(filterFunc)
        EnumItemsInRect(r.handle, filter, actionFunc)
    }

    getLevel() {
        return GetItemLevel(this.handle)
    }

    get type() {
        return GetItemType(this.handle)
    }

    set dropID(unitId: RawCode) {
        SetItemDropID(this.handle, formatCC(unitId))
    }

    setDropID(unitId: number) {
        SetItemDropID(this.handle, unitId)
    }

    set name(value: string) {
        BlzSetItemName(this.handle, value)
    }

    get name() {
        return GetItemName(this.handle)
    }

    get charges() {
        return GetItemCharges(this.handle)
    }

    set charges(value: integer) {
        SetItemCharges(this.handle, value)
    }

    get userData() {
        return GetItemUserData(this.handle)
    }

    set userData(data: integer) {
        SetItemUserData(this.handle, data)
    }

    getByIndexAbility(index: integer) {
        return Ability.fromHandle(BlzGetItemAbilityByIndex(this.handle, index))
    }

    getAbility(abilCode: RawCode) {
        return Ability.fromHandle(BlzGetItemAbility(this.handle, formatCC(abilCode)))
    }

    addAbility(abilCode:RawCode){
        return BlzItemAddAbility(this.handle,formatCC(abilCode))
    }

    get skin() {
        return BlzGetItemSkin(this.handle)
    }

    set skin(skinId: integer) {
        BlzSetItemSkin(this.handle, skinId)
    }

    getField(field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield) {
        const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

        switch (fieldType) {
            case "unitbooleanfield":
                return BlzGetItemBooleanField(this.handle, field as itembooleanfield)
            case "unitintegerfield":
                return BlzGetItemIntegerField(this.handle, field as itemintegerfield)
            case "unitrealfield":
                return BlzGetItemRealField(this.handle, field as itemrealfield)
            case "unitstringfield":
                return BlzGetItemStringField(this.handle, field as itemstringfield)
            default:
                return 0
        }
    }

    setField(
        field: itembooleanfield | itemintegerfield | itemrealfield | itemstringfield,
        value: boolean | number | string
    ) {
        const fieldType = field.toString().substr(0, field.toString().indexOf(":"))

        if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
            return BlzSetItemBooleanField(this.handle, field as itembooleanfield, value)
        } else if (fieldType === "unitintegerfield" && typeof value === "number") {
            return BlzSetItemIntegerField(this.handle, field as itemintegerfield, value)
        } else if (fieldType === "unitrealfield" && typeof value === "number") {
            return BlzSetItemRealField(this.handle, field as itemrealfield, value)
        } else if (fieldType === "unitstringfield" && typeof value === "string") {
            return BlzSetItemStringField(this.handle, field as itemstringfield, value)
        }

        return false
    }

    removeAbility(abilCode:RawCode){
        return BlzItemRemoveAbility(this.handle,formatCC(abilCode))
    }

    static fromHandle(handle: item): Item {
        return this.getObject(handle)
    }
}
