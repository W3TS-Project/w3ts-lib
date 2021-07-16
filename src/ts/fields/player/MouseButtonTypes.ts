import { MouseButtonType } from "../../API/fields/player/MouseButtonType"

export abstract class MouseButtonTypes {
    public static readonly LEFT = new MouseButtonType(1)
    public static readonly MIDDLE = new MouseButtonType(2)
    public static readonly RIGHT = new MouseButtonType(3)
}
