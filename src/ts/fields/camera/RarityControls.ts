import { RarityControl } from "../../API/fields/camera/RarityControl";

export abstract class RarityControls {
    public static readonly FREQUENT = new RarityControl(0)
    public static readonly RARE = new RarityControl(1)
}