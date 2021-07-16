import { AnimType } from "../../API/fields/unit/AnimType"

export abstract class AnimTypes {
    public static readonly BIRTH = new AnimType(0)
    public static readonly DEATH = new AnimType(1)
    public static readonly DECAY = new AnimType(2)
    public static readonly DISSIPATE = new AnimType(3)
    public static readonly STAND = new AnimType(4)
    public static readonly WALK = new AnimType(5)
    public static readonly ATTACK = new AnimType(6)
    public static readonly MORPH = new AnimType(7)
    public static readonly SLEEP = new AnimType(8)
    public static readonly SPELL = new AnimType(9)
    public static readonly PORTRAIT = new AnimType(10)
}
