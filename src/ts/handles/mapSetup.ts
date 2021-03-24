/** @noSelfInFile **/
// @ts-nocheck

import { integer, Position, real } from "../main"
import { Handle } from "./handle"
import { Location } from "./location"

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

export class MapSetup {
    private constructor() {}

    static setName(name: string) {
        SetMapName(name)
        return this
    }

    static setDescription(description: string) {
        SetMapDescription(description)
        return this
    }

    static setTeams(teamcount: integer) {
        SetTeams(teamcount)
        return this
    }

    static setPlayers(playercount: integer) {
        SetPlayers(playercount)
        return this
    }

    static setFlag(whichMapFlag: mapflag, value: boolean) {
        SetMapFlag(whichMapFlag, value)
        return this
    }

    static setResourceDensity(whichdensity: mapdensity) {
        SetResourceDensity(whichdensity)
        return this
    }

    static setCreatureDensity(whichdensity: mapdensity) {
        SetCreatureDensity(whichdensity)
        return this
    }

    static getTeams(): integer {
        return GetTeams()
    }

    static getPlayers(): integer {
        return GetPlayers()
    }

    static isFlagSet(whichMapFlag: mapflag) {
        return IsMapFlagSet(whichMapFlag)
    }
}

export class GameSetup {
    private constructor() {}

    static setSpeed(whichspeed: gamespeed) {
        SetGameSpeed(whichspeed)
        return this
    }

    static setDifficulty(whichdifficulty: gamedifficulty) {
        SetGameDifficulty(whichdifficulty)
        return this
    }

    static get placement() {
        return GetGamePlacement()
    }

    static get speed() {
        return GetGameSpeed()
    }

    static get difficulty() {
        return GetGameDifficulty()
    }

    static get resourceDensity() {
        return GetResourceDensity()
    }

    static get creatureDensity() {
        return GetCreatureDensity()
    }
}

export class StartLocPrio {
    static defineCoords(whichStartLoc: integer, x: real, y: real) {
        DefineStartLocation(whichStartLoc, x, y)
        return this
    }

    static definePos(whichStartLoc: integer, p: Position) {
        return this.defineCoords(whichStartLoc, p.x, p.y)
    }

    static defineLoc(whichStartLoc: integer, whichLocation: Location) {
        DefineStartLocationLoc(whichStartLoc, whichLocation.handle)
        return this
    }

    static setCount(whichStartLoc: integer, prioSlotCount: integer) {
        SetStartLocPrioCount(whichStartLoc, prioSlotCount)
        return this
    }

    static set(
        whichStartLoc: integer,
        prioSlotIndex: integer,
        otherStartLocIndex: integer,
        priority: startlocprio
    ) {
        SetStartLocPrio(whichStartLoc, prioSlotIndex, otherStartLocIndex, priority)
        return this
    }

    static getSlot(whichStartLoc: integer, prioSlotIndex: integer): integer {
        return GetStartLocPrioSlot(whichStartLoc, prioSlotIndex)
    }

    static get(whichStartLoc: integer, prioSlotIndex: integer) {
        return GetStartLocPrio(whichStartLoc, prioSlotIndex)
    }

    static getX(whichStartLocation: integer): real {
        return GetStartLocationX(whichStartLocation)
    }

    static getY(whichStartLocation: integer): real {
        return GetStartLocationY(whichStartLocation)
    }

    static getLoc(whichStartLocation: integer): Location {
        return Location.fromHandle(GetStartLocationLoc(whichStartLocation))
    }
}

export class GameType extends Handle<gametype> {
    private constructor(handle: gametype) {
        super(Handle.initFromHandle() ? undefined : handle)
    }

    set supported(value: boolean) {
        SetGameTypeSupported(this.handle, value)
    }

    get supported() {
        return IsGameTypeSupported(this.handle)
    }

    static fromHandle(handle: gametype): GameType {
        return this.getObject(handle)
    }

    static selected() {
        return this.fromHandle(GetGameTypeSelected())
    }
}
