import { AnimType } from "../../API/fields/unit/AnimType"

export abstract class AnimTypes {
    static readonly BIRTH = AnimType.convert(0)
    static readonly DEATH = AnimType.convert(1)
    static readonly DECAY = AnimType.convert(2)
    static readonly DISSIPATE = AnimType.convert(3)
    static readonly STAND = AnimType.convert(4)
    static readonly WALK = AnimType.convert(5)
    static readonly ATTACK = AnimType.convert(6)
    static readonly MORPH = AnimType.convert(7)
    static readonly SLEEP = AnimType.convert(8)
    static readonly SPELL = AnimType.convert(9)
    static readonly PORTRAIT = AnimType.convert(10)
}
