/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAnimType = (i: number) => animtype

const c = ConvertAnimType

export const AnimType = {
    Birth: c(0),
    Death: c(1),
    Decay: c(2),
    Dissipate: c(3),
    Stand: c(4),
    Walk: c(5),
    Attack: c(6),
    Morph: c(7),
    Sleep: c(8),
    Spell: c(9),
    Portrait: c(10)
}
