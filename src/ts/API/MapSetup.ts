// /** @noSelfInFile **/
// //@ts-nocheck

import { GameDifficulty } from "./fields/game/GameDifficulty"
import { GameSpeed } from "./fields/game/GameSpeed"
import { MapDensity } from "./fields/mapSetup/MapDensity"
import { MapFlag } from "./fields/mapSetup/MapFlag"
import { Placement } from "./fields/mapSetup/Placement"

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
        return IsMapFlagSet(whichMapFlag.getHandle)
    }

    public static setResourceDensity(whichDensity: MapDensity) {
        SetResourceDensity(whichDensity.getHandle)
        return this
    }

    public static setCreatureDensity(whichDensity: MapDensity) {
        SetCreatureDensity(whichDensity.getHandle)
        return this
    }
}
