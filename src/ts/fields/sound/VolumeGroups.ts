import { VolumeGroup } from "../../API/fields/sound/VolumeGroup"

export abstract class VolumeGroups {
    static readonly UNIT_MOVEMENT = VolumeGroup.convert(0)
    static readonly UNIT_SOUNDS = VolumeGroup.convert(1)
    static readonly COMBAT = VolumeGroup.convert(2)
    static readonly SPELLS = VolumeGroup.convert(3)
    static readonly UI = VolumeGroup.convert(4)
    static readonly MUSIC = VolumeGroup.convert(5)
    static readonly AMBIENT_SOUNDS = VolumeGroup.convert(6)
    static readonly FIRE = VolumeGroup.convert(7)
}
