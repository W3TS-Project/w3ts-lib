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
        return IsItemIdPowerup(this.getId())
    }

    public isSellable() {
        return IsItemIdSellable(this.getId())
    }

    public isPawnable() {
        return IsItemIdPawnable(this.getId())
    }

    public addToAllStock(currentStock: integer, stockMax: integer) {
        AddItemToAllStock(this.getId(), Math.floor(currentStock), Math.floor(stockMax))
        return this
    }

    public removeFromAllStock() {
        RemoveItemFromAllStock(this.getId())
        return this
    }
}
