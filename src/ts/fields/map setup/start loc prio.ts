/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertStartLocPrio = (i: number) => startlocprio

const c = ConvertStartLocPrio

export const StartLocPrio = {
    Low: c(0),
    High: c(1),
    Not: c(2)
}
