import { Placement } from "../../API/fields/mapSetup/Placement"

export abstract class Placements {
    static readonly RANDOM = Placement.convert(0)
    static readonly FIXED = Placement.convert(1)
    static readonly USE_MAP_SETTINGS = Placement.convert(2)
    static readonly TEAMS_TOGETHER = Placement.convert(3)
}
