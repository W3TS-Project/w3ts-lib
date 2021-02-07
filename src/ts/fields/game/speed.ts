/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertGameSpeed = (i: number) => gamespeed

const c = ConvertGameSpeed

export const GameSpeed = {
    Slowest: c(0),
    Slow: c(1),
    Normal: c(2),
    Fast: c(3),
    Fastest: c(4)
}
