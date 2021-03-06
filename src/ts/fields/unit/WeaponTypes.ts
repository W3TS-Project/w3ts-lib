import { WeaponType } from "../../API/fields/unit/WeaponType"

export abstract class WeaponTypes {
    public static readonly WHOKNOWS = new WeaponType(0)
    public static readonly METAL_LIGHT_CHOP = new WeaponType(1)
    public static readonly METAL_MEDIUM_CHOP = new WeaponType(2)
    public static readonly METAL_HEAVY_CHOP = new WeaponType(3)
    public static readonly METAL_LIGHT_SLICE = new WeaponType(4)
    public static readonly METAL_MEDIUM_SLICE = new WeaponType(5)
    public static readonly METAL_HEAVY_SLICE = new WeaponType(6)
    public static readonly METAL_MEDIUM_BASH = new WeaponType(7)
    public static readonly METAL_HEAVY_BASH = new WeaponType(8)
    public static readonly METAL_MEDIUM_STAB = new WeaponType(9)
    public static readonly METAL_HEAVY_STAB = new WeaponType(10)
    public static readonly WOOD_LIGHT_SLICE = new WeaponType(11)
    public static readonly WOOD_MEDIUM_SLICE = new WeaponType(12)
    public static readonly WOOD_HEAVY_SLICE = new WeaponType(13)
    public static readonly WOOD_LIGHT_BASH = new WeaponType(14)
    public static readonly WOOD_MEDIUM_BASH = new WeaponType(15)
    public static readonly WOOD_HEAVY_BASH = new WeaponType(16)
    public static readonly WOOD_LIGHT_STAB = new WeaponType(17)
    public static readonly WOOD_MEDIUM_STAB = new WeaponType(18)
    public static readonly CLAW_LIGHT_SLICE = new WeaponType(19)
    public static readonly CLAW_MEDIUM_SLICE = new WeaponType(20)
    public static readonly CLAW_HEAVY_SLICE = new WeaponType(21)
    public static readonly AXE_MEDIUM_CHOP = new WeaponType(22)
    public static readonly ROCK_HEAVY_BASH = new WeaponType(23)
}
