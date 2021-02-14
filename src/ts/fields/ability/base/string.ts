/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertAbilityStringField = (i: number) => abilitystringfield

const c = (s: string): abilitystringfield => ConvertAbilityStringField(FourCC(s))

export const AbilityStringField = {
    Name: c("anam"),
    IconActivated: c("auar"),
    IconResearch: c("arar"),
    EffectSound: c("aefs"),
    EffectSoundLooping: c("aefl")
}
