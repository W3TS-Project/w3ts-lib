import { UnitCategory } from "../../API/fields/unit/UnitCategory"

export abstract class UnitCategories {
    static readonly GIANT = UnitCategory.convert(1)
    static readonly UNDEAD = UnitCategory.convert(2)
    static readonly SUMMONED = UnitCategory.convert(4)
    static readonly MECHANICAL = UnitCategory.convert(8)
    static readonly PEON = UnitCategory.convert(16)
    static readonly SAPPER = UnitCategory.convert(32)
    static readonly TOWN_HALL = UnitCategory.convert(64)
    static readonly ANCIENT = UnitCategory.convert(128)
    static readonly NEUTRAL = UnitCategory.convert(256)
    static readonly WARD = UnitCategory.convert(512)
    static readonly STANDON = UnitCategory.convert(1024)
    static readonly TAUREN = UnitCategory.convert(2048)
}
