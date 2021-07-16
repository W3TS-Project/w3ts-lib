import { UnitType } from "../../API/fields/unit/UnitType"

export abstract class UnitTypes {
    public static readonly HERO = new UnitType(0)
    public static readonly DEAD = new UnitType(1)
    public static readonly STRUCTURE = new UnitType(2)

    public static readonly FLYING = new UnitType(3)
    public static readonly GROUND = new UnitType(4)

    public static readonly ATTACKS_FLYING = new UnitType(5)
    public static readonly ATTACKS_GROUND = new UnitType(6)

    public static readonly MELLE_ATTACKER = new UnitType(7)
    public static readonly RANGED_ATTACKER = new UnitType(8)

    public static readonly GIANT = new UnitType(9)
    public static readonly SUMMONED = new UnitType(10)
    public static readonly STUNNED = new UnitType(11)
    public static readonly PLAGUED = new UnitType(12)
    public static readonly SNARED = new UnitType(13)

    public static readonly UNDEAD = new UnitType(14)
    public static readonly MECHANICAL = new UnitType(15)
    public static readonly PEON = new UnitType(16)
    public static readonly SAPPER = new UnitType(17)
    public static readonly TOWN_HALL = new UnitType(18)
    public static readonly ANCIENT = new UnitType(19)

    public static readonly TAUREN = new UnitType(20)
    public static readonly POISONED = new UnitType(21)
    public static readonly POLYMORPHED = new UnitType(22)
    public static readonly SLEEPING = new UnitType(23)
    public static readonly RESISTANT = new UnitType(24)
    public static readonly ETHEREAL = new UnitType(25)
    public static readonly MAGIC_IMMUNE = new UnitType(26)
}
