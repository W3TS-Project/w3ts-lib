/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertTextAlignType = (i: number) => textaligntype

const c = ConvertTextAlignType

export const TypeTextAlign = {
    Top: c(0),
    Middle: c(1),
    Bottom: c(2),
    Left: c(3),
    Center: c(4),
    Right: c(5)
}
