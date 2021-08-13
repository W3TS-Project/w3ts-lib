import { MapDensity } from "../../API/fields/mapSetup/MapDensity"

export abstract class MapDensities {
    static readonly NONE = MapDensity.convert(0)
    static readonly LIGHT = MapDensity.convert(1)
    static readonly MEDIUM = MapDensity.convert(2)
    static readonly HEAVY = MapDensity.convert(3)
}
