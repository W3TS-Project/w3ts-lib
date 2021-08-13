import { WeaponType } from "../../API/fields/unit/WeaponType"

export abstract class WeaponTypes {
    static readonly WHOKNOWS = WeaponType.convert(0)
    static readonly METAL_LIGHT_CHOP = WeaponType.convert(1)
    static readonly METAL_MEDIUM_CHOP = WeaponType.convert(2)
    static readonly METAL_HEAVY_CHOP = WeaponType.convert(3)
    static readonly METAL_LIGHT_SLICE = WeaponType.convert(4)
    static readonly METAL_MEDIUM_SLICE = WeaponType.convert(5)
    static readonly METAL_HEAVY_SLICE = WeaponType.convert(6)
    static readonly METAL_MEDIUM_BASH = WeaponType.convert(7)
    static readonly METAL_HEAVY_BASH = WeaponType.convert(8)
    static readonly METAL_MEDIUM_STAB = WeaponType.convert(9)
    static readonly METAL_HEAVY_STAB = WeaponType.convert(10)
    static readonly WOOD_LIGHT_SLICE = WeaponType.convert(11)
    static readonly WOOD_MEDIUM_SLICE = WeaponType.convert(12)
    static readonly WOOD_HEAVY_SLICE = WeaponType.convert(13)
    static readonly WOOD_LIGHT_BASH = WeaponType.convert(14)
    static readonly WOOD_MEDIUM_BASH = WeaponType.convert(15)
    static readonly WOOD_HEAVY_BASH = WeaponType.convert(16)
    static readonly WOOD_LIGHT_STAB = WeaponType.convert(17)
    static readonly WOOD_MEDIUM_STAB = WeaponType.convert(18)
    static readonly CLAW_LIGHT_SLICE = WeaponType.convert(19)
    static readonly CLAW_MEDIUM_SLICE = WeaponType.convert(20)
    static readonly CLAW_HEAVY_SLICE = WeaponType.convert(21)
    static readonly AXE_MEDIUM_CHOP = WeaponType.convert(22)
    static readonly ROCK_HEAVY_BASH = WeaponType.convert(23)
}
