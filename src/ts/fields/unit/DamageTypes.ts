import { DamageType } from "../../API/fields/unit/DamageType"

export abstract class DamageTypes {
    public static readonly UNKNOWN = new DamageType(0)
    public static readonly NORMAL = new DamageType(4)
    public static readonly ENHANCED = new DamageType(5)
    public static readonly FIRE = new DamageType(8)
    public static readonly COLD = new DamageType(9)
    public static readonly LIGHTNING = new DamageType(10)
    public static readonly POISON = new DamageType(11)
    public static readonly DISEASE = new DamageType(12)
    public static readonly DIVINE = new DamageType(13)
    public static readonly MAGIC = new DamageType(14)
    public static readonly SONIC = new DamageType(15)
    public static readonly ACID = new DamageType(16)
    public static readonly FORCE = new DamageType(17)
    public static readonly DEATH = new DamageType(18)
    public static readonly MIND = new DamageType(19)
    public static readonly PLANT = new DamageType(20)
    public static readonly DEFENSIVE = new DamageType(21)
    public static readonly DEMOLITION = new DamageType(22)
    public static readonly SLOW_POISON = new DamageType(23)
    public static readonly SPIRIT_LINK = new DamageType(24)
    public static readonly SHADOW_STRIKE = new DamageType(25)
    public static readonly UNIVERSAL = new DamageType(26)
}
