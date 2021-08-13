import { TextAlignType } from "../../API/fields/frame/TextAlignType"

export abstract class TextAlignTypes {
    static readonly TOP = TextAlignType.convert(0)
    static readonly MIDDLE = TextAlignType.convert(1)
    static readonly BOTTOM = TextAlignType.convert(2)
    static readonly LEFT = TextAlignType.convert(3)
    static readonly CENTER = TextAlignType.convert(4)
    static readonly RIGHT = TextAlignType.convert(5)
}
