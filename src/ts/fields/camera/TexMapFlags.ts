import { TexMapFlag } from "../../API/fields/camera/TexMapFlag"

export abstract class TexMapFlags {
    static readonly NONE = TexMapFlag.convert(0)
    static readonly WRAP_U = TexMapFlag.convert(1)
    static readonly WRAP_V = TexMapFlag.convert(2)
    static readonly WRAP_UV = TexMapFlag.convert(3)
}
