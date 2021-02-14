/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAbilityRealField = (i: number) => abilityrealfield

const c = (s: string): abilityrealfield => ConvertAbilityRealField(FourCC(s))

export const AbilityRealField = {
    ArfMissileArc: c("amac")
}
