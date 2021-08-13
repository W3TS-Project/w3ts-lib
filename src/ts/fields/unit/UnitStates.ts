import { UnitState } from "../../API/fields/unit/UnitState"

export abstract class UnitStates {
    static readonly LIFE = UnitState.convert(0)
    static readonly MAX_LIFE = UnitState.convert(1)
    static readonly MANA = UnitState.convert(2)
    static readonly MAX_MANA = UnitState.convert(3)
}
