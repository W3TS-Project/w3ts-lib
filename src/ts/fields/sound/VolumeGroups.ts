import { VolumeGroup } from "../../API/fields/sound/VolumeGroup"

export abstract class VolumeGroups {
    public static readonly UNIT_MOVEMENT = new VolumeGroup(0)
    public static readonly UNIT_SOUNDS = new VolumeGroup(1)
    public static readonly COMBAT = new VolumeGroup(2)
    public static readonly SPELLS = new VolumeGroup(3)
    public static readonly UI = new VolumeGroup(4)
    public static readonly MUSIC = new VolumeGroup(5)
    public static readonly AMBIENT_SOUNDS = new VolumeGroup(6)
    public static readonly FIRE = new VolumeGroup(7)
}
