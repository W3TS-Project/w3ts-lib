import { UnitState } from "../../API/fields/unit/UnitState"

export abstract class UnitStates {
    public static readonly LIFE = new UnitState(0)
    public static readonly MAX_LIFE = new UnitState(1)
    public static readonly MANA = new UnitState(2)
    public static readonly MAX_MANA = new UnitState(3)
}
