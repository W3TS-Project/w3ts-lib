/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertSoundType = (i: number) => soundtype

const c = ConvertSoundType

export const SoundType = {
    Effect: c(0),
    LoopedEffect: c(1)
}
