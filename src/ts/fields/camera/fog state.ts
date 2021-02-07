/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertFogState = (i: number) => fogstate

const c = ConvertFogState

export const FogState = {
    Masked: c(1),
    Fogged: c(2),
    Visible: c(4)
}
