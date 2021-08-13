import { HeroAttribute } from "../../API/fields/unit/HeroAttribute"

export abstract class HeroAttributes {
    static readonly STR = HeroAttribute.convert(1)
    static readonly INT = HeroAttribute.convert(2)
    static readonly AGI = HeroAttribute.convert(3)
}
