import { BlendMods } from "./fields/camera/BlendMods"
import { MapLocation } from "./handles/MapLocation"
import { Point } from "./handles/Point"

export type Position = MapLocation | Point

export abstract class Package {
    public static config() {
        
    }
}
