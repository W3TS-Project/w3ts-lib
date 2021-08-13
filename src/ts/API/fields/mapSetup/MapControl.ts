/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapControl(i: integer): mapcontrol

export class MapControl extends Field<mapcontrol> {
    static convert(id: integer) {
        return this.proto_convert(ConvertMapControl, id)
    }

    static fromHandle(handle: mapcontrol) {
        return this.getObject(handle) as MapControl
    }
}
