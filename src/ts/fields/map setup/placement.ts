/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPlacement = (i: number) => placement

const c = ConvertPlacement

export const MapPlacement = {
    Random: c(0),
    Fixed: c(1),
    UseMapSettings: c(2),
    TeamsTogether: c(3)
}
