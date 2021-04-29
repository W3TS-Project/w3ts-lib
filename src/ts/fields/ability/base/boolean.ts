/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAbilityBooleanField = (i: number) => abilitybooleanfield

const c = (s: string): abilitybooleanfield => ConvertAbilityBooleanField(FourCC(s))

export const AbilityBooleanField = {
    HeroAbility: c("aher"),
    ItemAbility: c("aite"),
    CheckDependencies: c("achd")
}
