/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertUnitCategory = (i: number) => unitcategory

const c = ConvertUnitCategory

export const UnitCategory = {
    Giant: c(1),
    Undead: c(2),
    Summoned: c(4),
    Mechanical: c(8),
    Peon: c(16),
    Sapper: c(32),
    TownHall: c(64),
    Ancient: c(128),
    Neutral: c(256),
    Ward: c(512),
    Standon: c(1024),
    Tauren: c(2048)
}
