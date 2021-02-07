/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertRacePref: (i: number) => racepreference

const c = ConvertRacePref

export const PrefRace = {
    Human: c(1),
    Orc: c(2),
    NightElf: c(4),
    Undead: c(8),
    Demon: c(16),
    Random: c(32),
    UserSelectable: c(64)
}
