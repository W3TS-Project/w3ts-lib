import { PathingType } from "../../API/fields/unit/PathingType"

export abstract class PathingTypes {
    static readonly ANY = PathingType.convert(0)
    static readonly WALKABILITY = PathingType.convert(1)
    static readonly FLYABILITY = PathingType.convert(2)
    static readonly BUILDABILITY = PathingType.convert(3)
    static readonly PEONHARVESTPATHING = PathingType.convert(4)
    static readonly BLIGHTPATHING = PathingType.convert(5)
    static readonly FLOATABILITY = PathingType.convert(6)
    static readonly AMPHIBIOUSPATHING = PathingType.convert(7)
}
