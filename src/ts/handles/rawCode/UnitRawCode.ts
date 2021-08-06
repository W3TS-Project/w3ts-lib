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

export class UnitRawCode extends RawCode {
    protected static readonly ERROR_MESSAGE = "Равкод не является равкодом юнита"
    protected readonly IS_HERO: boolean
    public inAllStocks: boolean

    public constructor(id: rawcode, isCheck: boolean = true, isBasicCheck: boolean = true) {
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

    public addToAllStock(currentStock: integer, stockMax: integer) {
        AddUnitToAllStock(this.id, Math.floor(currentStock), Math.floor(stockMax))
        this.inAllStocks = true
        return this
    }

    public removeFromAllStock() {
        RemoveUnitFromAllStock(this.id)
        this.inAllStocks = false
        return this
    }

    public getPointValue(): integer {
        return GetUnitPointValueByType(this.id)
    }

    public getFoodMadeCount(): integer {
        return GetFoodMade(this.id)
    }

    public getFoodUsedCount(): integer {
        return GetFoodUsed(this.id)
    }

    public isHero() {
        return IsHeroUnitId(this.id)
    }

    public isType(whichUnitType: UnitType) {
        return IsUnitIdType(this.id, whichUnitType.getHandle() as unittype)
    }

    public static get(rawCode: rawcode, isCheck: boolean = true, isBasicCheck: boolean = true) {
        if (isCheck) {
            this.checkAnError(rawCode)
        }
        return super.get(rawCode, isBasicCheck) as UnitRawCode
    }

    protected static isHero(id: rawcode, isBasicCheck: boolean = false): boolean {
        const letter = this.toLetter(id, 0, isBasicCheck)
        return letter === letter.toUpperCase()
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
