import { MoveType } from "../../API/fields/unit/MoveType"

export abstract class MoveTypes {
    static readonly UNKNOWN = MoveType.convert(0)
    static readonly FOOT = MoveType.convert(1)
    static readonly FLY = MoveType.convert(2)
    static readonly HORSE = MoveType.convert(4)
    static readonly HOVER = MoveType.convert(8)
    static readonly FLOAT = MoveType.convert(16)
    static readonly AMPHIBIOUS = MoveType.convert(32)
    static readonly UNBUILDABLE = MoveType.convert(64)
}
