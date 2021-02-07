/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPathingFlag = (i: number) => pathingflag

const c = ConvertPathingFlag

export const PathingFlag = {
    Unwalkable: c(2),
    Unflyable: c(4),
    Unbuildable: c(8),
    Unpeonharvest: c(16),
    Blighted: c(32),
    Unfloatable: c(64),
    Unamphibious: c(128),
    Unitemplacable: c(256)
}
