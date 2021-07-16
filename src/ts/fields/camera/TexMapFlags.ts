import { TexMapFlag } from "../../API/fields/camera/TexMapFlag"

export abstract class TexMapFlags {
    public static readonly NONE = new TexMapFlag(0)
    public static readonly WRAP_U = new TexMapFlag(1)
    public static readonly WRAP_V = new TexMapFlag(2)
    public static readonly WRAP_UV = new TexMapFlag(3)
}
