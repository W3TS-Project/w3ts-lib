import { RawCode } from "../RawCode";

declare function IsItemIdPowerup(itemId: integer): boolean
declare function IsItemIdSellable(itemId: integer): boolean
declare function IsItemIdPawnable(itemId: integer): boolean

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
}