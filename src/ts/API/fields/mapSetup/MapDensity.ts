/** @noSelfInFile **/
// @ts-nocheck

import { Field } from "../Field"

declare function ConvertMapDensity(i: integer): mapdensity

export class MapDensity extends Field<mapdensity> {
    public constructor(id: integer) {
        id = Math.round(id)
        super(ConvertMapDensity(id), id)
    }
}
