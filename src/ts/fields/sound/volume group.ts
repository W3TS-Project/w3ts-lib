/** @noSelfInFile **/
// @ts-nocheck

declare const ConvertVolumeGroup = (i: number) => volumegroup

const c = ConvertVolumeGroup

export const SoundVolumeGroup = {
    UnitMovement: c(0),
    UnitSounds: c(1),
    Combat: c(2),
    Spells: c(3),
    UI: c(4),
    Music: c(5),
    AmbientSounds: c(6),
    Fire: c(7)
}
