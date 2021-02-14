/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAbilityBooleanField = (i: number) => abilitybooleanfield

const c = (s: string): abilitybooleanfield => ConvertAbilityBooleanField(FourCC(s))

AbilityBooleanField = {
    HeroAbility: c("aher"),
    ItemAbility: c("aite"),
    CheckDependencies: c("achd")
}
