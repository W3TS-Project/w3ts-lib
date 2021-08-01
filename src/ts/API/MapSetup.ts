/** @noSelfInFile **/
//@ts-nocheck

import { MapDensity } from "./fields/mapSetup/MapDensity"
import { MapFlag } from "./fields/mapSetup/MapFlag"

declare function SetMapName(name: string): void
declare function SetMapDescription(description: string): void
declare function SetTeams(teamcount: integer): void
declare function SetPlayers(playercount: integer): void
declare function SetResourceDensity(whichdensity: mapdensity): void
declare function SetCreatureDensity(whichdensity: mapdensity): void
declare function GetTeams(): integer
declare function GetPlayers(): integer
declare function IsMapFlagSet(whichMapFlag: mapflag): boolean

export abstract class MapSetup {
    public static setName(name: string) {
        SetMapName(name)
        return this
    }

    public static setDescription(description: string) {
        SetMapDescription(description)
        return this
    }

    public static setTeams(teamcount: integer) {
        SetTeams(Math.floor(teamcount))
        return this
    }

    public static setPlayers(playercount: integer) {
        SetPlayers(Math.floor(playercount))
        return this
    }

    public static getTeams(): integer {
        return GetTeams()
    }

    public static getPlayers(): integer {
        return GetPlayers()
    }

    public static isFlagSet(whichMapFlag: MapFlag): boolean {
        return IsMapFlagSet(whichMapFlag.getHandle() as mapflag)
    }

    public static setResourceDensity(whichDensity: MapDensity) {
        SetResourceDensity(whichDensity.getHandle() as mapdensity)
        return this
    }

    public static setCreatureDensity(whichDensity: MapDensity) {
        SetCreatureDensity(whichDensity.getHandle() as mapdensity)
        return this
    }
}
