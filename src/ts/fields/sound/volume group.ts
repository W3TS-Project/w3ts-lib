/** @noSelfInFile **/
//@ts-nocheck

import { integer, real } from "../../Utils"

declare function ConvertVolumeGroup(i: integer): volumegroup
declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: real): void
declare function VolumeGroupReset(): void

const c = ConvertVolumeGroup

export const SoundVolumeGroup = {
    UnitMovement: c(0),
    UnitSounds: c(1),
    Combat: c(2),
    Spells: c(3),
    UI: c(4),
    Music: c(5),
    AmbientSounds: c(6),
    Fire: c(7),

    setVolume(vgroup: volumegroup, scale: real) {
        VolumeGroupSetVolume(vgroup, scale)
        return this
    },

    reset() {
        VolumeGroupReset()
        return this
    }
}
