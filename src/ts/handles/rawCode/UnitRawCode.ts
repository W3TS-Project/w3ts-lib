/** @noSelfInFile **/
//@ts-nocheck

import { RawCode } from "../../RawCode"

declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void
declare function RemoveUnitFromAllStock(unitId: integer): void
declare function GetUnitPointValueByType(unitType: integer): integer

export class UnitRawCode extends RawCode {
    public addToAllStock(currentStock: integer, stockMax: integer) {
        AddUnitToAllStock(this.id, Math.floor(currentStock), Math.floor(stockMax))
        return this
    }

    public removeFromAllStock() {
        RemoveUnitFromAllStock(this.id)
        return this
    }

    public getPointValue(): integer {
        return GetUnitPointValueByType(this.id)
    }

    public static fromPrimitive(rawCode: rawcode) {
        return this.get(rawCode) as UnitRawCode
    }
}

