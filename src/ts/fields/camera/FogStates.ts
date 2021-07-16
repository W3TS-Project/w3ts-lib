import { FogState } from "../../API/fields/camera/FogState"

export abstract class FogStates {
    public static readonly MASKED = new FogState(1)
    public static readonly FOGGED = new FogState(2)
    public static readonly VISIBLE = new FogState(4)
}
