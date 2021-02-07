/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertHeroAttribute = (i: number) => heroattribute

const c = ConvertHeroAttribute

export const HeroAttribute = {
    Str: c(1),
    Int: c(2),
    Agi: c(3)
}
