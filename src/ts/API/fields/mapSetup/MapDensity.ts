/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapDensity(i: integer): mapdensity
declare function GetResourceDensity(): mapdensity
declare function GetCreatureDensity(): mapdensity

export class MapDensity extends Field<mapdensity> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertMapDensity(id), id)
    }

    public static fromHandle(handle: mapdensity): MapDensity {
        return this.getObject(handle)
    }

    public static fromObject(object: MapDensity): mapdensity {
        return this.getHandle(object)
    }

    public static getResource() {
        return this.fromHandle(GetResourceDensity())
    }

    public static getCreature() {
        return this.fromHandle(GetCreatureDensity())
    }
}