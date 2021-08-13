import { PathingFlag } from "../../API/fields/unit/PathingFlag"

export abstract class PathingFlags {
    static readonly UNWALKABLE = PathingFlag.convert(2)
    static readonly UNFLYABLE = PathingFlag.convert(4)
    static readonly UNBUILDABLE = PathingFlag.convert(8)
    static readonly UNPEONHARVEST = PathingFlag.convert(16)
    static readonly BLIGHTED = PathingFlag.convert(32)
    static readonly UNFLOATABLE = PathingFlag.convert(64)
    static readonly UNAMPHIBIOUS = PathingFlag.convert(128)
    static readonly UNITEMPLACABLE = PathingFlag.convert(256)
}
