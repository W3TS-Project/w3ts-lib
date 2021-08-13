/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertVolumeGroup(i: integer): volumegroup
declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: real): void
declare function VolumeGroupReset(): void

export class VolumeGroup extends Field<volumegroup> {
    static convert(id: integer) {
        return this.proto_convert(ConvertVolumeGroup, id)
    }

    setVolume(scale: real) {
        VolumeGroupSetVolume(this.getHandle() as volumegroup, scale)
        return this
    }

    static reset() {
        VolumeGroupReset()
        return this
    }

    static fromHandle(handle: volumegroup) {
        return this.getObject(handle) as VolumeGroup
    }
}
