/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "./MapPlayer"
import { Widget } from "./Widget"
import { Rectangle } from "./Rectangle"
import { Ability } from "./Ability"
import { RawCode } from "../RawCode"
import { Position } from "../Package"
import { ItemType } from "../API/fields/item/ItemType"
import { ItemBooleanField } from "../API/fields/item/ItemBooleanField"
import { ItemIntegerField } from "../API/fields/item/ItemIntegerField"
import { ItemRealField } from "../API/fields/item/ItemRealField"
import { ItemStringField } from "../API/fields/item/ItemStringField"

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

export type ItemFieldType = ItemBooleanField | ItemIntegerField | ItemRealField | ItemStringField

export class Item extends Widget {
    public constructor(itemId: RawCode, x: real, y: real, skinId?: RawCode) {
        if (skinId) {
            super(BlzCreateItemWithSkin(itemId.getId(), x, y, skinId.getId()))
        } else {
            super(CreateItem(itemId.getId(), x, y))
        }
    }

    public destroy() {
        RemoveItem(this.getHandle)
        return this
    }

    public getOwner() {
        return MapPlayer.fromHandle(GetItemPlayer(this.getHandle))
    }

    public getTypeId(): integer {
        return GetItemTypeId(this.getHandle)
    }

    public getRawCode(): RawCode {
        return new RawCode(this.getTypeId())
    }

    public getX(): real {
        return GetItemX(this.getHandle)
    }

    public getY(): real {
        return GetItemY(this.getHandle)
    }

    public setCoords(x: real, y: real) {
        SetItemPosition(this.getHandle, x, y)
        return this
    }

    public setX(x: real) {
        this.setCoords(x, this.y)
    }

    public setY(y: real) {
        this.setCoords(this.x, y)
    }

    public setPos(pos: Position) {
        return this.setCoords(pos.getX(), pos.getY())
    }

    public setDropOnDeath(flag: boolean) {
        SetItemDropOnDeath(this.getHandle, flag)
        return this
    }

    public setDroppable(flag: boolean) {
        SetItemDroppable(this.getHandle, flag)
        return this
    }

    public setPawnable(flag: boolean) {
        SetItemPawnable(this.getHandle, flag)
        return this
    }

    public setPlayer(whichPlayer: MapPlayer, changeColor: boolean) {
        SetItemPlayer(this.getHandle, whichPlayer.getHandle, changeColor)
        return this
    }

    public setInvulnerable(flag: boolean) {
        SetItemInvulnerable(this.getHandle, flag)
        return this
    }

    public isInvulnerable(): boolean {
        return IsItemInvulnerable(this.getHandle)
    }

    public setVisible(show: boolean) {
        SetItemVisible(this.getHandle, show)
        return this
    }

    public isVisible(): boolean {
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

    public static enumInRect(r: Rectangle, filterFunc: codeboolexpr, actionFunc: code) {
        const filter = Condition(filterFunc)
        EnumItemsInRect(r.getHandle, filter, actionFunc)
        DestroyCondition(filter)
        return this
    }

    public getLevel(): integer {
        return GetItemLevel(this.getHandle)
    }

    public getType(): ItemType {
        return ItemType.fromHandle(GetItemType(this.getHandle))
    }

    public setDropID(unitId: rawcode) {
        SetItemDropID(this.getHandle, RawCode.toId(unitId))
        return this
    }

    public setDropCode(unitCode: RawCode) {
        SetItemDropID(this.getHandle, unitCode.getId())
        return this
    }

    public setName(value: string) {
        BlzSetItemName(this.getHandle, value)
        return this
    }

    public getName(): string {
        return GetItemName(this.getHandle)
    }

    public getCharges(): integer {
        return GetItemCharges(this.getHandle)
    }

    public setCharges(value: integer) {
        SetItemCharges(this.getHandle, Math.round(value))
        return this
    }

    public getUserData(): integer {
        return GetItemUserData(this.getHandle)
    }

    public setUserData(data: integer) {
        SetItemUserData(this.getHandle, Math.round(data))
        return this
    }

    public getAbilityByIndex(index: integer) {
        return Ability.fromHandle(BlzGetItemAbilityByIndex(this.getHandle, Math.round(index)))
    }

    public getAbilityByCode(abilCode: RawCode) {
        return Ability.fromHandle(BlzGetItemAbility(this.getHandle, abilCode.getId()))
    }

    public addAbility(abilCode: RawCode): boolean {
        return BlzItemAddAbility(this.getHandle, abilCode.getId())
    }

    public getSkin(): RawCode {
        return new RawCode(BlzGetItemSkin(this.getHandle))
    }

    public setSkin(skinCode: RawCode) {
        BlzSetItemSkin(this.getHandle, skinCode.getId())
        return this
    }

    public getBooleanField(field: ItemBooleanField) {
        return BlzGetItemBooleanField(this.getHandle, field.getHandle)
    }

    public getIntegerField(field: ItemIntegerField) {
        return BlzGetItemIntegerField(this.getHandle, field.getHandle)
    }

    public getRealField(field: ItemRealField) {
        return BlzGetItemRealField(this.getHandle, field.getHandle)
    }

    public getStringField(field: ItemStringField) {
        return BlzGetItemStringField(this.getHandle, field.getHandle)
    }

    public getField(field: ItemFieldType): Primitive | undefined {
        let fieldValue: Primitive | undefined
        if (field instanceof ItemBooleanField) {
            fieldValue = this.getBooleanField(field)
        } else if (field instanceof ItemIntegerField) {
            fieldValue = this.getIntegerField(field)
        } else if (field instanceof ItemRealField) {
            fieldValue = this.getRealField(field)
        } else if (field instanceof ItemStringField) {
            fieldValue = this.getStringField(field)
        }
        return fieldValue
    }

    public setBooleanField(field: ItemBooleanField, value: boolean) {
        return BlzSetItemBooleanField(this.getHandle, field.getHandle, value)
    }

    public setIntegerField(field: ItemIntegerField, value: integer) {
        return BlzSetItemIntegerField(this.getHandle, field.getHandle, Math.round(value))
    }

    public setRealField(field: ItemRealField, value: real) {
        return BlzSetItemRealField(this.getHandle, field.getHandle, value)
    }

    public setStringField(field: ItemStringField, value: string) {
        return BlzSetItemStringField(this.getHandle, field.getHandle, value)
    }

    public setField(field: ItemFieldType, value: Primitive) {
        if (field instanceof ItemBooleanField && typeof value === "boolean") {
            this.setBooleanField(field, value)
        } else if (field instanceof ItemIntegerField && typeof value === "number") {
            this.setIntegerField(field, value)
        } else if (field instanceof ItemRealField && typeof value === "number") {
            this.setRealField(field, value)
        } else if (field instanceof ItemStringField && typeof value === "string") {
            this.setStringField(field, value)
        } else {
            error("Неверные аргументы вызова метода setField объекта класса Item", 2)
        }
    }

    public removeAbility(abilCode: RawCode): boolean {
        return BlzItemRemoveAbility(this.getHandle, abilCode.getId())
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
