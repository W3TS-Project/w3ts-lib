import { FramePointType } from "../../API/fields/frame/FramePointType"

export abstract class FramePointTypes {
    static readonly LEFT_TOP = FramePointType.convert(0)
    static readonly TOP = FramePointType.convert(1)
    static readonly TOP_RIGHT = FramePointType.convert(2)
    static readonly LEFT = FramePointType.convert(3)
    static readonly CENTER = FramePointType.convert(4)
    static readonly RIGHT = FramePointType.convert(5)
    static readonly LEFT_BOTTOM = FramePointType.convert(6)
    static readonly BOTTOM = FramePointType.convert(7)
    static readonly RIGHT_BOTTOM = FramePointType.convert(8)
}
