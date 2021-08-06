/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../../RawCode"

declare function IsItemIdPowerup(itemId: integer): boolean
declare function IsItemIdSellable(itemId: integer): boolean
declare function IsItemIdPawnable(itemId: integer): boolean
declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void
declare function RemoveItemFromAllStock(itemId: integer): void

export class ItemRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом предмета"
    public inAllStocks: boolean

    public constructor(id: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            ItemRawCode.checkAnError(id)
        }
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
        this.inAllStocks = false
    }

    public isPowerup() {
        return IsItemIdPowerup(this.id)
    }

    public isSellable() {
        return IsItemIdSellable(this.id)
    }

    public isPawnable() {
        return IsItemIdPawnable(this.id)
    }

    public addToAllStock(currentStock: integer, stockMax: integer) {
        AddItemToAllStock(this.id, Math.floor(currentStock), Math.floor(stockMax))
        this.inAllStocks = true
        return this
    }

    public removeFromAllStock() {
        RemoveItemFromAllStock(this.id)
        this.inAllStocks = false
        return this
    }

    public static get(rawCode: rawcode, isCheck = true, isBasicCheck = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return super.get(rawCode, isBasicCheck) as ItemRawCode
    }

    protected static check(id: rawcode): boolean {
        if (!super.check(id)) {
            return false
        }
        //TODO
        return true
    }

    protected static checkAnError(id: rawcode) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
