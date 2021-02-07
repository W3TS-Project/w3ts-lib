/** @noSelfInFile **/
// @ts-nocheck

declare function ConvertRace(i: number): race

const c = ConvertRace

export const Race = {
    Human: c(1),
    Orc: c(2),
    Undead: c(3),
    NightElf: c(4),
    Demon: c(5),
    Other: c(7)
}
