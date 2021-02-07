/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertPlayerGameResult = (i: number) => playergameresult

const c = ConvertPlayerGameResult

export const PlayerGameResult = {
    Victory: c(0),
    Defeat: c(1),
    Tie: c(2),
    Neutral: c(3)
}
