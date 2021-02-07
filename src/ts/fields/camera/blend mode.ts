/** @noSelfInFile **/
// @ts-nocheck

declare function ConvertBlendMode(i: number): blendmode

const c = ConvertBlendMode

export const BlendMode = {
    None: c(0),
    DontCare: c(0),
    KeyAlpha: c(1),
    Blend: c(2),
    Additive: c(3),
    Modulate: c(4),
    Modulate2x: c(5)
}
