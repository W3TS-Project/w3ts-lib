/** @noSelfInFile **/
// @ts-nocheck

declare function SetCineFilterTexture(filename: string): void
declare function SetCineFilterBlendMode(whichMode: blendmode): void
declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): void
declare function SetCineFilterStartUV(minu: number, minv: number, maxu: number, maxv: number): void
declare function SetCineFilterEndUV(minu: number, minv: number, maxu: number, maxv: number): void
declare function SetCineFilterStartColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function SetCineFilterEndColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
): void
declare function SetCineFilterDuration(duration: number): void

export class CineFilter {
    private constructor() {}

    static setBlendMode(whichMode: blendmode) {
        SetCineFilterBlendMode(whichMode)
        return this
    }

    static setDuration(duration: number) {
        SetCineFilterDuration(duration)
        return this
    }

    static set visible(flag: boolean): void {
        DisplayCineFilter(flag)
    }

    static get visible(): boolean {
        return IsCineFilterDisplayed()
    }

    static setEndColor(red: number, green: number, blue: number, alpha: number) {
        SetCineFilterEndColor(red, green, blue, alpha)
        return this
    }

    static setEndUV(minU: number, minV: number, maxU: number, maxV: number) {
        SetCineFilterEndUV(minU, minV, maxU, maxV)
        return this
    }

    static setStartColor(red: number, green: number, blue: number, alpha: number) {
        SetCineFilterStartColor(red, green, blue, alpha)
        return this
    }

    static setStartUV(minU: number, minV: number, maxU: number, maxV: number) {
        SetCineFilterStartUV(minU, minV, maxU, maxV)
        return this
    }

    static setTexMapFlags(whichFlags: texmapflags) {
        SetCineFilterTexMapFlags(whichFlags)
        return this
    }

    static setTexture(fileName: string) {
        SetCineFilterTexture(fileName)
        return this
    }
}