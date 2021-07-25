/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapControl(i: integer): mapcontrol

export class MapControl extends Field<mapcontrol> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertMapControl(id), id)
    }

    public static fromHandle(handle: mapcontrol): MapControl {
        return this.getObject(handle)
    }

    public static fromObject(object: MapControl): mapcontrol {
        return this.getHandle(object)
    }
}
