import { RarityControl } from "../../API/fields/camera/RarityControl"

export abstract class RarityControls {
    static readonly FREQUENT = RarityControl.convert(0)
    static readonly RARE = RarityControl.convert(1)
}
