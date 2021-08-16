/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "./MapPlayer"
import { Widget } from "./Widget"
import { Ability } from "./Ability"
import { RawCode, RawCodeType } from "../RawCode"
import { Position } from "../Package"
import { ItemType } from "../API/fields/item/ItemType"
import { ItemBooleanField } from "../API/fields/item/ItemBooleanField"
import { ItemIntegerField } from "../API/fields/item/ItemIntegerField"
import { ItemRealField } from "../API/fields/item/ItemRealField"
import { ItemStringField } from "../API/fields/item/ItemStringField"
import { ItemRawCode, ItemRawCodeType } from "./rawCode/ItemRawCode"
import { UnitRawCode, UnitRawCodeType } from "./rawCode/UnitRawCode"
import { AbilityRawCode, AbilityRawCodeType } from "./rawCode/AbilityRawCode"

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
declare function BlzSetItemDescription(whichItem: item, description: string): void
declare function BlzGetItemDescription(whichItem: item): string
declare function BlzSetItemTooltip(whichItem: item, tooltip: string): void
declare function BlzGetItemTooltip(whichItem: item): string
declare function BlzSetItemExtendedTooltip(whichItem: item, extendedTooltip: string): void
declare function BlzGetItemExtendedTooltip(whichItem: item): string
declare function BlzSetItemIconPath(whichItem: item, iconPath: string): void
declare function BlzGetItemIconPath(whichItem: item): string

export type ItemFieldType = ItemBooleanField | ItemIntegerField | ItemRealField | ItemStringField

export class Item extends Widget {
    dropOnDeath = false
    droppable = false
    pawnable = false
    dropId: UnitRawCodeType = ""

    static createCoords(itemId: ItemRawCodeType, x: real, y: real) {
        return new this(CreateItem(ItemRawCode.toId(itemId), x, y))
    }

    static createPos(itemId: ItemRawCodeType, p: Position) {
        return this.createCoords(itemId, p.x, p.y)
    }

    static createCoordsWithSkin(
        itemId: ItemRawCodeType,
        x: real,
        y: real,
        skinId: ItemRawCodeType
    ) {
        return new this(
            BlzCreateItemWithSkin(ItemRawCode.toId(itemId), x, y, ItemRawCode.toId(skinId))
        )
    }

    static createPosWithSkin(itemId: ItemRawCodeType, p: Position, skinId: ItemRawCodeType) {
        return this.createCoordsWithSkin(itemId, p.x, p.y, skinId)
    }

    destroy() {
        RemoveItem(this.getHandle() as item)
        super.destroy()
    }

    getOwner() {
        return MapPlayer.fromHandle(GetItemPlayer(this.getHandle() as item))
    }

    getTypeId(): integer {
        return GetItemTypeId(this.getHandle() as item)
    }

    getRawCode() {
        return ItemRawCode.get(this.getTypeId())
    }

    getX(): real {
        return GetItemX(this.getHandle() as item)
    }

    getY(): real {
        return GetItemY(this.getHandle() as item)
    }

    setCoords(x: real, y: real) {
        SetItemPosition(this.getHandle() as item, x, y)
        return this
    }

    setX(x: real) {
        this.setCoords(x, this.getY())
    }

    setY(y: real) {
        this.setCoords(this.getX(), y)
    }

    setPos(pos: Position) {
        return this.setCoords(pos.x, pos.y)
    }

    setDropOnDeath(flag: boolean) {
        SetItemDropOnDeath(this.getHandle() as item, flag)
        this.dropOnDeath = flag
        return this
    }

    setDroppable(flag: boolean) {
        SetItemDroppable(this.getHandle() as item, flag)
        this.droppable = flag
        return this
    }

    setPawnable(flag: boolean) {
        SetItemPawnable(this.getHandle() as item, flag)
        this.pawnable = flag
        return this
    }

    setPlayer(whichPlayer: MapPlayer, changeColor: boolean) {
        SetItemPlayer(this.getHandle() as item, whichPlayer.getHandle() as player, changeColor)
        return this
    }

    setInvulnerable(flag: boolean) {
        SetItemInvulnerable((this.getHandle() as item) as item, flag)
        return this
    }

    isInvulnerable(): boolean {
        return IsItemInvulnerable(this.getHandle() as item)
    }

    setVisible(show: boolean) {
        SetItemVisible(this.getHandle() as item, show)
        return this
    }

    isVisible(): boolean {
        return IsItemVisible(this.getHandle() as item)
    }

    isOwned(): boolean {
        return IsItemOwned(this.getHandle() as item)
    }

    isPowerup(): boolean {
        return IsItemPowerup(this.getHandle() as item)
    }

    isSellable(): boolean {
        return IsItemSellable(this.getHandle() as item)
    }

    isPawnable(): boolean {
        return IsItemPawnable(this.getHandle() as item)
    }

    getLevel(): integer {
        return GetItemLevel(this.getHandle() as item)
    }

    getType(): ItemType {
        return ItemType.fromHandle(GetItemType(this.getHandle() as item))
    }

    setDropCode(unitCode: UnitRawCodeType) {
        unitCode = UnitRawCode.toId(unitCode)
        SetItemDropID(this.getHandle() as item, unitCode)
        this.dropId = unitCode
        return this
    }

    setName(value: string) {
        BlzSetItemName(this.getHandle() as item, value)
        return this
    }

    getName(): string {
        return GetItemName(this.getHandle() as item)
    }

    getCharges(): integer {
        return GetItemCharges(this.getHandle() as item)
    }

    setCharges(value: integer) {
        SetItemCharges(this.getHandle() as item, Math.floor(value))
        return this
    }

    getUserData(): integer {
        return GetItemUserData(this.getHandle() as item)
    }

    setUserData(data: integer) {
        SetItemUserData(this.getHandle() as item, Math.floor(data))
        return this
    }

    getAbilityByIndex(index: integer) {
        return Ability.fromHandle(
            BlzGetItemAbilityByIndex(this.getHandle() as item, Math.floor(index))
        )
    }

    getAbilityByCode(abilCode: AbilityRawCodeType) {
        return Ability.fromHandle(
            BlzGetItemAbility(this.getHandle() as item, AbilityRawCode.toId(abilCode))
        )
    }

    addAbility(abilCode: AbilityRawCodeType): boolean {
        return BlzItemAddAbility(this.getHandle() as item, AbilityRawCode.toId(abilCode))
    }

    getSkin() {
        return ItemRawCode.get(BlzGetItemSkin(this.getHandle() as item))
    }

    setSkin(skinCode: RawCodeType) {
        BlzSetItemSkin(this.getHandle() as item, RawCode.toId(skinCode))
        return this
    }

    getBooleanField(field: ItemBooleanField) {
        return BlzGetItemBooleanField(
            this.getHandle() as item,
            field.getHandle() as itembooleanfield
        )
    }

    getIntegerField(field: ItemIntegerField) {
        return BlzGetItemIntegerField(
            this.getHandle() as item,
            field.getHandle() as itemintegerfield
        )
    }

    getRealField(field: ItemRealField) {
        return BlzGetItemRealField(this.getHandle() as item, field.getHandle() as itemrealfield)
    }

    getStringField(field: ItemStringField) {
        return BlzGetItemStringField(this.getHandle() as item, field.getHandle() as itemstringfield)
    }

    getField(field: ItemFieldType): Primitive | undefined {
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

    setBooleanField(field: ItemBooleanField, value: boolean) {
        return BlzSetItemBooleanField(
            this.getHandle() as item,
            field.getHandle() as itembooleanfield,
            value
        )
    }

    setIntegerField(field: ItemIntegerField, value: integer) {
        return BlzSetItemIntegerField(
            this.getHandle() as item,
            field.getHandle() as itemintegerfield,
            Math.floor(value)
        )
    }

    setRealField(field: ItemRealField, value: real) {
        return BlzSetItemRealField(
            this.getHandle() as item,
            field.getHandle() as itemrealfield,
            value
        )
    }

    setStringField(field: ItemStringField, value: string) {
        return BlzSetItemStringField(
            this.getHandle() as item,
            field.getHandle() as itemstringfield,
            value
        )
    }

    setField(field: ItemFieldType, value: Primitive) {
        if (field instanceof ItemBooleanField && typeof value === "boolean") {
            return this.setBooleanField(field, value)
        } else if (field instanceof ItemIntegerField && typeof value === "number") {
            return this.setIntegerField(field, value)
        } else if (field instanceof ItemRealField && typeof value === "number") {
            return this.setRealField(field, value)
        } else if (field instanceof ItemStringField && typeof value === "string") {
            return this.setStringField(field, value)
        } else {
            error("Неверные аргументы вызова метода setField объекта класса Item", 2)
        }
    }

    removeAbility(abilCode: AbilityRawCodeType): boolean {
        return BlzItemRemoveAbility(this.getHandle() as item, AbilityRawCode.toId(abilCode))
    }

    setDescription(description: string) {
        BlzSetItemDescription(this.getHandle() as item, description)
        return this
    }

    getDescription() {
        return BlzGetItemDescription(this.getHandle() as item)
    }

    setTooltip(tooltip: string) {
        BlzSetItemTooltip(this.getHandle() as item, tooltip)
        return this
    }

    getTooltip() {
        return BlzGetItemTooltip(this.getHandle() as item)
    }

    setExtendedTooltip(extendedTooltip: string) {
        BlzSetItemExtendedTooltip(this.getHandle() as item, extendedTooltip)
        return this
    }

    getExtendedTooltip() {
        return BlzGetItemExtendedTooltip(this.getHandle() as item)
    }

    setIconPath(iconPath: string) {
        BlzSetItemIconPath(this.getHandle() as item, iconPath)
        return this
    }

    getIconPath() {
        return BlzGetItemIconPath(this.getHandle() as item)
    }

    static fromHandle(handle: item) {
        return this.getObject(handle) as Item
    }

    static fromFilter() {
        return this.fromHandle(GetFilterItem())
    }

    static fromEnum() {
        return this.fromHandle(GetEnumItem())
    }
}
