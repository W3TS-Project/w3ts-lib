/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertGameType = (i: number) => gametype

const c = ConvertGameType

export const GameType = {
    Melee: c(1),
    Ffa: c(2),
    UseMapSettings: c(4),
    Bliz: c(8),
    OneOnOne: c(16),
    TwoTeamPlay: c(32),
    ThreeTeamPlay: c(64),
    FourTeamPlay: c(128)
}
