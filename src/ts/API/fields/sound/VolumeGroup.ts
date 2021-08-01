/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertVolumeGroup(i: integer): volumegroup
declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: real): void
declare function VolumeGroupReset(): void

export class VolumeGroup extends Field<volumegroup> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertVolumeGroup(id), id)
    }

    public setVolume(scale: real) {
        VolumeGroupSetVolume(this.getHandle() as volumegroup, scale)
        return this
    }

    public static reset() {
        VolumeGroupReset()
        return this
    }

    public static fromHandle(handle: volumegroup) {
        return this.getObject(handle) as VolumeGroup
    }
}
