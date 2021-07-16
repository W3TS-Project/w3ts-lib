/** @noSelfInFile **/
// @ts-nocheck

import { BlendMode } from "./fields/camera/BlendMode"
import { TexMapFlag } from "./fields/camera/TexMapFlag"

declare function SetCineFilterTexture(filename: string): void
declare function SetCineFilterBlendMode(whichMode: blendmode): void
declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): void
declare function SetCineFilterStartUV(minu: real, minv: real, maxu: real, maxv: real): void
declare function SetCineFilterEndUV(minu: real, minv: real, maxu: real, maxv: real): void
declare function SetCineFilterStartColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function SetCineFilterEndColor(
    red: integer,
    green: integer,
    blue: integer,
    alpha: integer
): void
declare function SetCineFilterDuration(duration: real): void
declare function DisplayCineFilter(flag: boolean): void
declare function IsCineFilterDisplayed(): boolean

export abstract class CineFilter {
    public static setBlendMode(whichMode: BlendMode) {
        SetCineFilterBlendMode(whichMode.getHandle)
        return this
    }

    public static setDuration(duration: real) {
        SetCineFilterDuration(duration)
        return this
    }

    public static display(flag: boolean) {
        DisplayCineFilter(flag)
        return this
    }

    public static isDisplayed(): boolean {
        return IsCineFilterDisplayed()
    }

    public static setStartUV(minU: real, minV: real, maxU: real, maxV: real) {
        SetCineFilterStartUV(minU, minV, maxU, maxV)
        return this
    }

    public static setEndUV(minU: real, minV: real, maxU: real, maxV: real) {
        SetCineFilterEndUV(minU, minV, maxU, maxV)
        return this
    }

    public static setStartColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetCineFilterStartColor(
            Math.round(red),
            Math.round(green),
            Math.round(blue),
            Math.round(alpha)
        )
        return this
    }

    public static setEndColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetCineFilterEndColor(
            Math.round(red),
            Math.round(green),
            Math.round(blue),
            Math.round(alpha)
        )
        return this
    }

    public static setTexMapFlags(whichFlags: TexMapFlag) {
        SetCineFilterTexMapFlags(whichFlags.getHandle)
        return this
    }

    public static setTexture(fileName: string) {
        SetCineFilterTexture(fileName)
        return this
    }
}
