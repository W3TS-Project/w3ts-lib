import { MouseButtonType } from "../../API/fields/player/MouseButtonType"

export abstract class MouseButtonTypes {
    static readonly LEFT = MouseButtonType.convert(1)
    static readonly MIDDLE = MouseButtonType.convert(2)
    static readonly RIGHT = MouseButtonType.convert(3)
}
