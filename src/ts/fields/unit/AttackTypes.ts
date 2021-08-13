import { AttackType } from "../../API/fields/unit/AttackType"

export abstract class AttackTypes {
    static readonly NORMAL = AttackType.convert(0)
    static readonly MELEE = AttackType.convert(1)
    static readonly PIERCE = AttackType.convert(2)
    static readonly SIEGE = AttackType.convert(3)
    static readonly MAGIC = AttackType.convert(4)
    static readonly CHAOS = AttackType.convert(5)
    static readonly HERO = AttackType.convert(6)
}
