import { ArmorType } from "../../API/fields/unit/ArmorType"

export abstract class ArmorTypes {
    public static readonly WHOKNOWS = new ArmorType(0)
    public static readonly FLESH = new ArmorType(1)
    public static readonly METAL = new ArmorType(2)
    public static readonly WOOD = new ArmorType(3)
    public static readonly ETHREAL = new ArmorType(4)
    public static readonly STONE = new ArmorType(5)
}
