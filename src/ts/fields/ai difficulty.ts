/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAIDifficulty = (i: number) => aidifficulty

const c = ConvertAIDifficulty

export const AIDifficulty = {
    Newbie: c(0),
    Normal: c(1),
    Insane: c(2)
}
