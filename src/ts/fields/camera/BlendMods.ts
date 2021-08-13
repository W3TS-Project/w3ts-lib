import { BlendMode } from "../../API/fields/camera/BlendMode"

export abstract class BlendMods {
    static readonly NONE = BlendMode.convert(0)
    static readonly DONT_CARE = BlendMode.convert(0)
    static readonly KEY_ALPHA = BlendMode.convert(1)
    static readonly BLEND = BlendMode.convert(2)
    static readonly ADDITIVE = BlendMode.convert(3)
    static readonly MODULATE = BlendMode.convert(4)
    static readonly MODULATE_2X = BlendMode.convert(5)
}
