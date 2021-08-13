/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapDensity(i: integer): mapdensity
declare function GetResourceDensity(): mapdensity
declare function GetCreatureDensity(): mapdensity

export class MapDensity extends Field<mapdensity> {
    static convert(id: integer) {
        return this.proto_convert(ConvertMapDensity, id)
    }

    static fromHandle(handle: mapdensity) {
        return this.getObject(handle) as MapDensity
    }

    static getResource() {
        return this.fromHandle(GetResourceDensity())
    }

    static getCreature() {
        return this.fromHandle(GetCreatureDensity())
    }
}
