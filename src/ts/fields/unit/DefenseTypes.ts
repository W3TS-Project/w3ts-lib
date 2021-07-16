import { DefenseType } from "../../API/fields/unit/DefenseType"

export abstract class DefenseTypes {
    public static readonly LIGHT = new DefenseType(0)
    public static readonly MEDIUM = new DefenseType(1)
    public static readonly LARGE = new DefenseType(2)
    public static readonly FORT = new DefenseType(3)
    public static readonly NORMAL = new DefenseType(4)
    public static readonly HERO = new DefenseType(5)
    public static readonly DIVINE = new DefenseType(6)
    public static readonly NONE = new DefenseType(7)
}
