/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../../RawCode"

declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void
declare function RemoveUnitFromAllStock(unitId: integer): void

export class UnitRawCode extends RawCode {
    public addToAllStock(currentStock: integer, stockMax: integer) {
        AddUnitToAllStock(this.getId(), Math.floor(currentStock), Math.floor(stockMax))
        return this
    }

    public removeFromAllStock() {
        RemoveUnitFromAllStock(this.getId())
        return this
    }
}