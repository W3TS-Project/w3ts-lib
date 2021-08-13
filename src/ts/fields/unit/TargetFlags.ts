import { TargetFlag } from "../../API/fields/unit/TargetFlag"

export abstract class TargetFlags {
    static readonly NONE = TargetFlag.convert(1)
    static readonly GROUND = TargetFlag.convert(2)
    static readonly AIR = TargetFlag.convert(4)
    static readonly STRUCTURE = TargetFlag.convert(8)
    static readonly WARD = TargetFlag.convert(16)
    static readonly ITEM = TargetFlag.convert(32)
    static readonly TREE = TargetFlag.convert(64)
    static readonly WALL = TargetFlag.convert(128)
    static readonly DEBRIS = TargetFlag.convert(256)
    static readonly DECORATION = TargetFlag.convert(512)
    static readonly BRIDGE = TargetFlag.convert(1024)
}
