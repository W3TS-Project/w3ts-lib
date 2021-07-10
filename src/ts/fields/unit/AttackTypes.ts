import { AttackType } from "../../API/fields/unit/AttackType";

export abstract class AttackTypes {
    public static readonly NORMAL = new AttackType(0)
    public static readonly MELEE = new AttackType(1)
    public static readonly PIERCE = new AttackType(2)
    public static readonly SIEGE = new AttackType(3)
    public static readonly MAGIC = new AttackType(4)
    public static readonly CHAOS = new AttackType(5)
    public static readonly HERO = new AttackType(6)
}