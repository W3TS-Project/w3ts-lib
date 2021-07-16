import { FramePointType } from "../../API/fields/frame/FramePointType"

export abstract class FramePointTypes {
    public static readonly LEFT_TOP = new FramePointType(0)
    public static readonly TOP = new FramePointType(1)
    public static readonly TOP_RIGHT = new FramePointType(2)
    public static readonly LEFT = new FramePointType(3)
    public static readonly CENTER = new FramePointType(4)
    public static readonly RIGHT = new FramePointType(5)
    public static readonly LEFT_BOTTOM = new FramePointType(6)
    public static readonly BOTTOM = new FramePointType(7)
    public static readonly RIGHT_BOTTOM = new FramePointType(8)
}
