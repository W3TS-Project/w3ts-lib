import { UnitType } from "../../API/fields/unit/UnitType"

export abstract class UnitTypes {
    static readonly HERO = UnitType.convert(0)
    static readonly DEAD = UnitType.convert(1)
    static readonly STRUCTURE = UnitType.convert(2)

    static readonly FLYING = UnitType.convert(3)
    static readonly GROUND = UnitType.convert(4)

    static readonly ATTACKS_FLYING = UnitType.convert(5)
    static readonly ATTACKS_GROUND = UnitType.convert(6)

    static readonly MELLE_ATTACKER = UnitType.convert(7)
    static readonly RANGED_ATTACKER = UnitType.convert(8)

    static readonly GIANT = UnitType.convert(9)
    static readonly SUMMONED = UnitType.convert(10)
    static readonly STUNNED = UnitType.convert(11)
    static readonly PLAGUED = UnitType.convert(12)
    static readonly SNARED = UnitType.convert(13)

    static readonly UNDEAD = UnitType.convert(14)
    static readonly MECHANICAL = UnitType.convert(15)
    static readonly PEON = UnitType.convert(16)
    static readonly SAPPER = UnitType.convert(17)
    static readonly TOWN_HALL = UnitType.convert(18)
    static readonly ANCIENT = UnitType.convert(19)

    static readonly TAUREN = UnitType.convert(20)
    static readonly POISONED = UnitType.convert(21)
    static readonly POLYMORPHED = UnitType.convert(22)
    static readonly SLEEPING = UnitType.convert(23)
    static readonly RESISTANT = UnitType.convert(24)
    static readonly ETHEREAL = UnitType.convert(25)
    static readonly MAGIC_IMMUNE = UnitType.convert(26)
}
