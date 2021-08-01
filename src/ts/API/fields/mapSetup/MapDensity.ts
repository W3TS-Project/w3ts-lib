/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapDensity(i: integer): mapdensity
declare function GetResourceDensity(): mapdensity
declare function GetCreatureDensity(): mapdensity

export class MapDensity extends Field<mapdensity> {
    public constructor(id: integer) {
        id = Math.floor(id)
        super(ConvertMapDensity(id), id)
    }

    public static fromHandle(handle: mapdensity) {
        return this.getObject(handle) as MapDensity
    }

    public static getResource() {
        return this.fromHandle(GetResourceDensity())
    }

    public static getCreature() {
        return this.fromHandle(GetCreatureDensity())
    }
}
