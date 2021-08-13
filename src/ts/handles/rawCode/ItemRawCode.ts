/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../../RawCode"

declare function IsItemIdPowerup(itemId: integer): boolean
declare function IsItemIdSellable(itemId: integer): boolean
declare function IsItemIdPawnable(itemId: integer): boolean
declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void
declare function RemoveItemFromAllStock(itemId: integer): void

export type ItemRawCodeType = ItemRawCode | rawcode

export class ItemRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом предмета"
    inAllStocks: boolean

    constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            ItemRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
        this.inAllStocks = false
    }

    isPowerup() {
        return IsItemIdPowerup(this.id)
    }

    isSellable() {
        return IsItemIdSellable(this.id)
    }

    isPawnable() {
        return IsItemIdPawnable(this.id)
    }

    addToAllStock(currentStock: integer, stockMax: integer) {
        AddItemToAllStock(this.id, Math.floor(currentStock), Math.floor(stockMax))
        this.inAllStocks = true
        return this
    }

    removeFromAllStock() {
        RemoveItemFromAllStock(this.id)
        this.inAllStocks = false
        return this
    }

    static get(rawCode: ItemRawCodeType, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return RawCode.get(rawCode, isBasicCheck) as ItemRawCode
    }

    static check(id: ItemRawCodeType): boolean {
        if (!RawCode.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: ItemRawCodeType) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
