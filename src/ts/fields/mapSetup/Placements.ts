import { Placement } from "../../API/fields/mapSetup/Placement"

export abstract class Placements {
    public static readonly RANDOM = new Placement(0)
    public static readonly FIXED = new Placement(1)
    public static readonly USE_MAP_SETTINGS = new Placement(2)
    public static readonly TEAMS_TOGETHER = new Placement(3)
}
