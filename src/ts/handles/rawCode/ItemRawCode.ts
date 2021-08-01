/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../../RawCode"

declare function IsItemIdPowerup(itemId: integer): boolean
declare function IsItemIdSellable(itemId: integer): boolean
declare function IsItemIdPawnable(itemId: integer): boolean
declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): void
declare function RemoveItemFromAllStock(itemId: integer): void

export class ItemRawCode extends RawCode {
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
        return this
    }

    public removeFromAllStock() {
        RemoveItemFromAllStock(this.id)
        return this
    }
}
