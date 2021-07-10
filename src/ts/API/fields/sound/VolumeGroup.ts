/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field";

declare function ConvertVolumeGroup(i: integer): volumegroup
declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: real): void
declare function VolumeGroupReset(): void

export class VolumeGroup extends Field<volumegroup> {
  public constructor(id: integer) {
    super(ConvertVolumeGroup(id), id)
  }

  public setVolume(scale: real) {
    VolumeGroupSetVolume(this.getHandle, scale)
    return this
  }

  public static reset() {
    VolumeGroupReset()
    return this
  }

  public static fromHandle(handle: volumegroup): VolumeGroup {
    return this.getObject(handle)
  }

  public static fromObject(object: VolumeGroup): volumegroup {
    return this.getHandle(object)
  }
}