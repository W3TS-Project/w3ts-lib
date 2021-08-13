import { RegenType } from "../../API/fields/unit/RegenType"

export abstract class RegenTypes {
    static readonly NONE = RegenType.convert(0)
    static readonly ALWAYS = RegenType.convert(1)
    static readonly BLIGHT = RegenType.convert(2)
    static readonly DAY = RegenType.convert(3)
    static readonly NIGHT = RegenType.convert(4)
}
