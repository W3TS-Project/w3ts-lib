import { BlendMode } from "../../API/fields/camera/BlendMode";

export abstract class BlendMods {
    public static readonly NONE = new BlendMode(0)
    public static readonly DONT_CARE = new BlendMode(0)
    public static readonly KEY_ALPHA = new BlendMode(1)
    public static readonly BLEND = new BlendMode(2)
    public static readonly ADDITIVE = new BlendMode(3)
    public static readonly MODULATE = new BlendMode(4)
    public static readonly MODULATE_2X = new BlendMode(5)
}