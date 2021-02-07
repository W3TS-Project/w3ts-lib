/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertMoveType = (i: number) => movetype

const c = ConvertMoveType

export const MoveType = {
    Unknown: c(0),
    Foot: c(1),
    Fly: c(2),
    Horse: c(4),
    Hover: c(8),
    Float: c(16),
    Amphibious: c(32),
    Unbuildable: c(64)
}
