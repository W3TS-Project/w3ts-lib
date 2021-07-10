/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPathingType = (i: number) => pathingtype

const c = ConvertPathingType

export const PathingType = {
    Any: c(0),
    Walkability: c(1),
    Flyability: c(2),
    Buildability: c(3),
    Peonharvestpathing: c(4),
    Blightpathing: c(5),
    Floatability: c(6),
    Amphibiouspathing: c(7)
}
