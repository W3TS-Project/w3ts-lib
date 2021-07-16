import { PathingFlag } from "../../API/fields/unit/PathingFlag"

export abstract class PathingFlags {
    public static readonly UNWALKABLE = new PathingFlag(2)
    public static readonly UNFLYABLE = new PathingFlag(4)
    public static readonly UNBUILDABLE = new PathingFlag(8)
    public static readonly UNPEONHARVEST = new PathingFlag(16)
    public static readonly BLIGHTED = new PathingFlag(32)
    public static readonly UNFLOATABLE = new PathingFlag(64)
    public static readonly UNAMPHIBIOUS = new PathingFlag(128)
    public static readonly UNITEMPLACABLE = new PathingFlag(256)
}
