import { MapControl } from "../../API/fields/mapSetup/MapControl"

export abstract class MapControls {
    static readonly USER = MapControl.convert(0)
    static readonly COMPUTER = MapControl.convert(1)
    static readonly RESCUABLE = MapControl.convert(2)
    static readonly NEUTRAL = MapControl.convert(3)
    static readonly CREEP = MapControl.convert(4)
    static readonly NONE = MapControl.convert(5)
}
