/** @noSelfInFile **/
//@ts-nocheck

import { integer, Position, real } from "../Utils"
import { Handle } from "./Handle"
import { MapLocation } from "./MapLocation"

declare function SetMapName(name: string): void
declare function SetMapDescription(description: string): void
declare function SetTeams(teamcount: integer): void
declare function SetPlayers(playercount: integer): void
declare function DefineStartLocation(whichStartLoc: integer, x: real, y: real): void
declare function DefineStartLocationLoc(whichStartLoc: integer, whichLocation: location): void
declare function SetStartLocPrioCount(whichStartLoc: integer, prioSlotCount: integer): void
declare function SetStartLocPrio(
    whichStartLoc: integer,
    prioSlotIndex: integer,
    otherStartLocIndex: integer,
    priority: startlocprio
): void
declare function GetStartLocPrioSlot(whichStartLoc: integer, prioSlotIndex: integer): integer
declare function GetStartLocPrio(whichStartLoc: integer, prioSlotIndex: integer): startlocprio
declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void
declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void
declare function SetGamePlacement(whichPlacementType: placement): void
declare function SetGameSpeed(whichspeed: gamespeed): void
declare function SetGameDifficulty(whichdifficulty: gamedifficulty): void
declare function SetResourceDensity(whichdensity: mapdensity): void
declare function SetCreatureDensity(whichdensity: mapdensity): void
declare function GetTeams(): integer
declare function GetPlayers(): integer
declare function IsGameTypeSupported(whichGameType: gametype): boolean
declare function GetGameTypeSelected(): gametype
declare function IsMapFlagSet(whichMapFlag: mapflag): boolean
declare function GetGamePlacement(): placement
declare function GetGameSpeed(): gamespeed
declare function GetGameDifficulty(): gamedifficulty
declare function GetResourceDensity(): mapdensity
declare function GetCreatureDensity(): mapdensity
declare function GetStartLocationX(whichStartLocation: integer): real
declare function GetStartLocationY(whichStartLocation: integer): real
declare function GetStartLocationLoc(whichStartLocation: integer): location

export abstract class MapSetup {
    private constructor() {}

    public static setName(name: string) {
        SetMapName(name)
        return this
    }

    public static setDescription(description: string) {
        SetMapDescription(description)
        return this
    }

    public static setTeams(teamcount: integer) {
        SetTeams(teamcount)
        return this
    }

    public static setPlayers(playercount: integer) {
        SetPlayers(playercount)
        return this
    }

    public static setFlag(whichMapFlag: mapflag, value: boolean) {
        SetMapFlag(whichMapFlag, value)
        return this
    }

    public static setResourceDensity(whichdensity: mapdensity) {
        SetResourceDensity(whichdensity)
        return this
    }

    public static setCreatureDensity(whichdensity: mapdensity) {
        SetCreatureDensity(whichdensity)
        return this
    }

    public static getTeams(): integer {
        return GetTeams()
    }

    public static getPlayers(): integer {
        return GetPlayers()
    }

    public static isFlagSet(whichMapFlag: mapflag): boolean {
        return IsMapFlagSet(whichMapFlag)
    }
}

export class GameSetup {
    private constructor() {}

    public static setSpeed(whichspeed: gamespeed) {
        SetGameSpeed(whichspeed)
        return this
    }

    public static setDifficulty(whichdifficulty: gamedifficulty) {
        SetGameDifficulty(whichdifficulty)
        return this
    }

    public static get placement(): placement {
        return GetGamePlacement()
    }

    public static get speed(): gamespeed {
        return GetGameSpeed()
    }

    public static get difficulty(): gamedifficulty {
        return GetGameDifficulty()
    }

    public static get resourceDensity(): mapdensity {
        return GetResourceDensity()
    }

    public static get creatureDensity(): mapdensity {
        return GetCreatureDensity()
    }
}

// export class StartLocPrio {
//     public static defineCoords(whichStartLoc: integer, x: real, y: real) {
//         DefineStartLocation(whichStartLoc, x, y)
//         return this
//     }

//     public static definePos(whichStartLoc: integer, p: Position) {
//         return this.defineCoords(whichStartLoc, p.x, p.y)
//     }

//     public static defineLoc(whichStartLoc: integer, whichLocation: MapLocation) {
//         DefineStartLocationLoc(whichStartLoc, whichLocation.getHandle)
//         return this
//     }

//     public static setCount(whichStartLoc: integer, prioSlotCount: integer) {
//         SetStartLocPrioCount(whichStartLoc, prioSlotCount)
//         return this
//     }

//     public static set(
//         whichStartLoc: integer,
//         prioSlotIndex: integer,
//         otherStartLocIndex: integer,
//         priority: startlocprio
//     ) {
//         SetStartLocPrio(whichStartLoc, prioSlotIndex, otherStartLocIndex, priority)
//         return this
//     }

//     public static getSlot(whichStartLoc: integer, prioSlotIndex: integer): integer {
//         return GetStartLocPrioSlot(whichStartLoc, prioSlotIndex)
//     }

//     public static get(whichStartLoc: integer, prioSlotIndex: integer) {
//         return GetStartLocPrio(whichStartLoc, prioSlotIndex)
//     }

//     public static getX(whichStartLocation: integer): real {
//         return GetStartLocationX(whichStartLocation)
//     }

//     public static getY(whichStartLocation: integer): real {
//         return GetStartLocationY(whichStartLocation)
//     }

//     static getLoc(whichStartLocation: integer): MapLocation {
//         return MapLocation.fromHandle(GetStartLocationLoc(whichStartLocation))
//     }
// }

// export class GameType extends Handle<gametype> {
//     public set supported(value: boolean) {
//         SetGameTypeSupported(this.getHandle, value)
//     }

//     public get supported(): boolean {
//         return IsGameTypeSupported(this.getHandle)
//     }

//     public static fromHandle(handle: gametype): GameType {
//         return this.getObject(handle)
//     }

//     public static selected() {
//         return this.fromHandle(GetGameTypeSelected())
//     }

//     public static fromObject(object: GameType): gametype {
//         return this.getHandle(object)
//     }
// }
