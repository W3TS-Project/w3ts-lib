import { ArmorType } from "../../API/fields/unit/ArmorType"

export abstract class ArmorTypes {
    static readonly WHOKNOWS = ArmorType.convert(0)
    static readonly FLESH = ArmorType.convert(1)
    static readonly METAL = ArmorType.convert(2)
    static readonly WOOD = ArmorType.convert(3)
    static readonly ETHREAL = ArmorType.convert(4)
    static readonly STONE = ArmorType.convert(5)
}
