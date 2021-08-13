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
    static setBlendMode(whichMode: BlendMode) {
        SetCineFilterBlendMode(whichMode.getHandle() as blendmode)
        return this
    }

    static setDuration(duration: real) {
        SetCineFilterDuration(duration)
        return this
    }

    static display(flag: boolean) {
        DisplayCineFilter(flag)
        return this
    }

    static isDisplayed(): boolean {
        return IsCineFilterDisplayed()
    }

    static setStartUV(minU: real, minV: real, maxU: real, maxV: real) {
        SetCineFilterStartUV(minU, minV, maxU, maxV)
        return this
    }

    static setEndUV(minU: real, minV: real, maxU: real, maxV: real) {
        SetCineFilterEndUV(minU, minV, maxU, maxV)
        return this
    }

    static setStartColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetCineFilterStartColor(
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    static setEndColor(red: integer, green: integer, blue: integer, alpha: integer) {
        SetCineFilterEndColor(
            Math.floor(red),
            Math.floor(green),
            Math.floor(blue),
            Math.floor(alpha)
        )
        return this
    }

    static setTexMapFlags(whichFlags: TexMapFlag) {
        SetCineFilterTexMapFlags(whichFlags.getHandle() as texmapflags)
        return this
    }

    static setTexture(fileName: string) {
        SetCineFilterTexture(fileName)
        return this
    }
}
