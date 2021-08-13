/** @noSelfInFile **/
//@ts-nocheck

import { UnitType } from "../../API/fields/unit/UnitType"
import { RawCode } from "../../RawCode"

declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): void
declare function RemoveUnitFromAllStock(unitId: integer): void
declare function GetUnitPointValueByType(unitType: integer): integer
declare function GetFoodMade(unitId: integer): integer
declare function GetFoodUsed(unitId: integer): integer
declare function IsHeroUnitId(unitId: integer): boolean
declare function IsUnitIdType(unitId: integer, whichUnitType: unittype): boolean

export type UnitRawCodeType = UnitRawCode | rawcode

export class UnitRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом юнита"
    readonly IS_HERO: boolean
    inAllStocks: boolean

    constructor(id: rawcode, isCheck: boolean = true, isBasicCheck: boolean = true) {
        if (isBasicCheck) {
            RawCode.checkAnError(id)
        }
        if (isCheck) {
            UnitRawCode.checkAnError(id)
        }
        super(id, !isBasicCheck)
        this.IS_HERO = UnitRawCode.isHero(id, !isCheck)
        this.inAllStocks = false
    }

    addToAllStock(currentStock: integer, stockMax: integer) {
        AddUnitToAllStock(this.id, Math.floor(currentStock), Math.floor(stockMax))
        this.inAllStocks = true
        return this
    }

    removeFromAllStock() {
        RemoveUnitFromAllStock(this.id)
        this.inAllStocks = false
        return this
    }

    getPointValue(): integer {
        return GetUnitPointValueByType(this.id)
    }

    getFoodMadeCount(): integer {
        return GetFoodMade(this.id)
    }

    getFoodUsedCount(): integer {
        return GetFoodUsed(this.id)
    }

    isHero() {
        return IsHeroUnitId(this.id)
    }

    isType(whichUnitType: UnitType) {
        return IsUnitIdType(this.id, whichUnitType.getHandle() as unittype)
    }

    static get(rawCode: UnitRawCodeType, isCheck: boolean = true, isBasicCheck: boolean = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return RawCode.get(rawCode, isBasicCheck) as UnitRawCode
    }

    static isHero(id: UnitRawCodeType, isBasicCheck: boolean = false): boolean {
        const letter = this.toLetter(id, 0, isBasicCheck)
        return letter === letter.toUpperCase()
    }

    static check(id: UnitRawCodeType): boolean {
        if (!RawCode.check(id)) {
            return false
        }
        //TODO
        return true
    }

    static checkAnError(id: UnitRawCodeType) {
        if (!this.check(id)) {
            error(this.ERROR_MESSAGE, 2)
        }
    }
}
