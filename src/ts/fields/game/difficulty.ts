/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertGameDifficulty = (i: number) => gamedifficulty

const c = ConvertGameDifficulty

export const GameDifficulty = {
    Easy: c(0),
    Normal: c(1),
    Hard: c(2),
    Insane: c(3)
}
