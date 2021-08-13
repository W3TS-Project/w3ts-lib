import { FogState } from "../../API/fields/camera/FogState"

export abstract class FogStates {
    static readonly MASKED = FogState.convert(1)
    static readonly FOGGED = FogState.convert(2)
    static readonly VISIBLE = FogState.convert(4)
}
