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
    static setName(name: string) {
        SetMapName(name)
        return this
    }

    static setDescription(description: string) {
        SetMapDescription(description)
        return this
    }

    static setTeams(teamcount: integer) {
        SetTeams(Math.floor(teamcount))
        return this
    }

    static setPlayers(playercount: integer) {
        SetPlayers(Math.floor(playercount))
        return this
    }

    static getTeams(): integer {
        return GetTeams()
    }

    static getPlayers(): integer {
        return GetPlayers()
    }

    static isFlagSet(whichMapFlag: MapFlag): boolean {
        return IsMapFlagSet(whichMapFlag.getHandle() as mapflag)
    }

    static setResourceDensity(whichDensity: MapDensity) {
        SetResourceDensity(whichDensity.getHandle() as mapdensity)
        return this
    }

    static setCreatureDensity(whichDensity: MapDensity) {
        SetCreatureDensity(whichDensity.getHandle() as mapdensity)
        return this
    }
}
