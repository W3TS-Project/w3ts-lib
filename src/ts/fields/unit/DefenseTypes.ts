import { DefenseType } from "../../API/fields/unit/DefenseType"

export abstract class DefenseTypes {
    static readonly LIGHT = DefenseType.convert(0)
    static readonly MEDIUM = DefenseType.convert(1)
    static readonly LARGE = DefenseType.convert(2)
    static readonly FORT = DefenseType.convert(3)
    static readonly NORMAL = DefenseType.convert(4)
    static readonly HERO = DefenseType.convert(5)
    static readonly DIVINE = DefenseType.convert(6)
    static readonly NONE = DefenseType.convert(7)
}
