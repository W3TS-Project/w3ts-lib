/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertMapDensity = (i: number) => mapdensity

const c = ConvertMapDensity

export const MapDensity = {
    None: c(0),
    Light: c(1),
    Medium: c(2),
    Heavy: c(3)
}