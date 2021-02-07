/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertDefenseType = (i: number) => defensetype

const c = ConvertDefenseType

export const DefenseType = {
    Light: c(0),
    Medium: c(1),
    Large: c(2),
    Fort: c(3),
    Normal: c(4),
    Hero: c(5),
    Divine: c(6),
    None: c(7)
}
