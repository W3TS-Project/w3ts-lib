/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertMouseButtonType = (i: number) => mousebuttontype

const c = ConvertMouseButtonType

export const MouseButtonType = {
    Left: c(1),
    Middle: c(2),
    Right: c(3)
}
