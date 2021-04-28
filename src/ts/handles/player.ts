/** @noSelfInFile **/
//@ts-nocheck

import { formatCC, integer, RawCode, real } from "../utils"
import { Force } from "./force"
import { Handle } from "./handle"
import { Leaderboard } from "./leaderboard"
import { MapLocation } from "./location"
import { Point } from "./point"

declare function Player(number: integer): player
declare function GetLocalPlayer(): player
declare function IsPlayerAlly(whichPlayer: player, otherPlayer: player): boolean
declare function IsPlayerEnemy(whichPlayer: player, otherPlayer: player): boolean
declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean
declare function IsPlayerObserver(whichPlayer: player): boolean
declare function IsVisibleToPlayer(x: real, y: real, whichPlayer: player): boolean
declare function IsLocationVisibleToPlayer(whichLocation: location, whichPlayer: player): boolean
declare function IsFoggedToPlayer(x: real, y: real, whichPlayer: player): boolean
declare function IsLocationFoggedToPlayer(whichLocation: location, whichPlayer: player): boolean
declare function IsMaskedToPlayer(x: real, y: real, whichPlayer: player): boolean
declare function IsLocationMaskedToPlayer(whichLocation: location, whichPlayer: player): boolean
declare function GetPlayerRace(whichPlayer: player): race
declare function GetPlayerId(whichPlayer: player): integer
declare function GetPlayerUnitCount(whichPlayer: player, includeIncomplete: boolean): integer
declare function GetPlayerTypedUnitCount(
    whichPlayer: player,
    unitName: string,
    includeIncomplete: boolean,
    includeUpgrades: boolean
): integer
declare function GetPlayerStructureCount(whichPlayer: player, includeIncomplete: boolean): integer
declare function GetPlayerState(whichPlayer: player, whichPlayerState: playerstate): integer
declare function GetPlayerScore(whichPlayer: player, whichPlayerScore: playerscore): integer
declare function GetPlayerAlliance(
    sourcePlayer: player,
    otherPlayer: player,
    whichAllianceSetting: alliancetype
): boolean
declare function GetPlayerHandicap(whichPlayer: player): real
declare function GetPlayerHandicapXP(whichPlayer: player): real
declare function GetPlayerHandicapReviveTime(whichPlayer: player): real
declare function GetPlayerHandicapDamage(whichPlayer: player): real
declare function SetPlayerHandicap(whichPlayer: player, handicap: real): void
declare function SetPlayerHandicapXP(whichPlayer: player, handicap: real): void
declare function SetPlayerHandicapReviveTime(whichPlayer: player, handicap: real): void
declare function SetPlayerHandicapDamage(whichPlayer: player, handicap: real): void
declare function SetPlayerTechMaxAllowed(
    whichPlayer: player,
    techid: integer,
    maximum: integer
): void
declare function GetPlayerTechMaxAllowed(whichPlayer: player, techid: integer): integer
declare function AddPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    levels: integer
): void
declare function SetPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    setToLevel: integer
): void
declare function GetPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    specificonly: boolean
): boolean
declare function GetPlayerTechCount(
    whichPlayer: player,
    techid: integer,
    specificonly: boolean
): integer
declare function SetPlayerUnitsOwner(whichPlayer: player, newOwner: integer): void
declare function CripplePlayer(whichPlayer: player, toWhichPlayers: force, flag: boolean): void
declare function SetPlayerAbilityAvailable(
    whichPlayer: player,
    abilid: integer,
    avail: boolean
): void
declare function SetPlayerState(
    whichPlayer: player,
    whichPlayerState: playerstate,
    value: integer
): void
declare function RemovePlayer(whichPlayer: player, gameResult: playergameresult): void
declare function CachePlayerHeroData(whichPlayer: player): void
declare function SetPlayerColor(whichPlayer: player, color: playercolor): void
declare function SetPlayerAlliance(
    sourcePlayer: player,
    otherPlayer: player,
    whichAllianceSetting: alliancetype,
    value: boolean
): void
declare function SetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate,
    rate: real
): void
declare function SetPlayerRacePreference(
    whichPlayer: player,
    whichRacePreference: racepreference
): void
declare function SetPlayerRaceSelectable(whichPlayer: player, value: boolean): void
declare function SetPlayerController(whichPlayer: player, controlType: mapcontrol): void
declare function SetPlayerName(whichPlayer: player, name: string): void
declare function SetPlayerOnScoreScreen(whichPlayer: player, flag: boolean): void
declare function GetPlayerTeam(whichPlayer: player): integer
declare function GetPlayerStartLocation(whichPlayer: player): integer
declare function GetPlayerColor(whichPlayer: player): playercolor
declare function GetPlayerSelectable(whichPlayer: player): boolean
declare function GetPlayerController(whichPlayer: player): mapcontrol
declare function GetPlayerSlotState(whichPlayer: player): playerslotstate
declare function GetPlayerTaxRate(
    sourcePlayer: player,
    otherPlayer: player,
    whichResource: playerstate
): real
declare function IsPlayerRacePrefSet(whichPlayer: player, pref: racepreference): boolean
declare function GetPlayerName(whichPlayer: player): string
declare function GetStartLocationX(whichStartLocation: integer): real
declare function GetStartLocationY(whichStartLocation: integer): real
declare function GetStartLocationLoc(whichStartLocation: integer): location
declare function BlzGetPlayerTownHallCount(whichPlayer: player): integer
declare function BlzDecPlayerTechResearched(
    whichPlayer: player,
    techid: integer,
    levels: integer
): void
declare function RemoveAllGuardPositions(num: player): void
declare function GetTriggerPlayer(): player
declare function PlayerSetLeaderboard(toPlayer: player, lb: leaderboard): void
declare function PlayerGetLeaderboard(toPlayer: player): leaderboard
declare function GetWinningPlayer(): player
declare function GetFilterPlayer(): player
declare function GetEnumPlayer(): player

export class MapPlayer extends Handle<player> {
    private constructor(index: integer) {
        super(Player(index))
    }

    public set color(color: playercolor) {
        SetPlayerColor(this.getHandle, color)
    }

    public get color(): playercolor {
        return GetPlayerColor(this.getHandle)
    }

    public get controller(): mapcontrol {
        return GetPlayerController(this.getHandle)
    }

    public get handicap(): real {
        return GetPlayerHandicap(this.getHandle)
    }

    public set handicap(handicap: number) {
        SetPlayerHandicap(this.getHandle, handicap)
    }

    public get handicapReviveTime(): real {
        return GetPlayerHandicapReviveTime(this.getHandle)
    }

    public set handicapReviveTime(handicap: real) {
        SetPlayerHandicapReviveTime(this.getHandle, handicap)
    }

    public get handicapXp(): real {
        return GetPlayerHandicapXP(this.getHandle)
    }

    public set handicapXp(handicap: number) {
        SetPlayerHandicapXP(this.getHandle, handicap)
    }

    public get handicapDamage(): real {
        return GetPlayerHandicapDamage(this.getHandle)
    }

    public set handicapDamage(handicap: real) {
        SetPlayerHandicapDamage(this.getHandle, handicap)
    }

    public get id(): integer {
        return GetPlayerId(this.getHandle)
    }

    public get name(): string {
        return GetPlayerName(this.getHandle)
    }

    public set name(value: string) {
        SetPlayerName(this.getHandle, value)
    }

    public get race(): race {
        return GetPlayerRace(this.getHandle)
    }

    public get slotState(): playerslotstate {
        return GetPlayerSlotState(this.getHandle)
    }

    public get startLocation(): integer {
        return GetPlayerStartLocation(this.getHandle)
    }

    public get startLocationX(): real {
        return GetStartLocationX(this.startLocation)
    }

    public get startLocationY(): real {
        return GetStartLocationY(this.startLocation)
    }

    public get startLocationLoc(): MapLocation {
        return MapLocation.fromHandle(GetStartLocationLoc(this.startLocation))
    }

    public get startLocationPoint(): Point {
        return new Point(this.startLocationX, this.startLocationY)
    }

    public get team(): integer {
        return GetPlayerTeam(this.getHandle)
    }

    public get townHallCount(): integer {
        return BlzGetPlayerTownHallCount(this.getHandle)
    }

    public addTechResearched(techId: RawCode, levels: integer) {
        AddPlayerTechResearched(this.getHandle, formatCC(techId), levels)
        return this
    }

    public decTechResearched(techId: RawCode, levels: integer) {
        BlzDecPlayerTechResearched(this.getHandle, formatCC(techId), levels)
        return this
    }

    // Used to store hero level data for the scorescreen
    // before units are moved to neutral passive in melee games
    public cacheHeroData() {
        CachePlayerHeroData(this.getHandle)
        return this
    }

    public compareAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype): boolean {
        return GetPlayerAlliance(this.getHandle, otherPlayer.getHandle, whichAllianceSetting)
    }

    public coordsFogged(x: real, y: real): boolean {
        return IsFoggedToPlayer(x, y, this.getHandle)
    }

    public pointFogged(p: Point): boolean {
        return this.coordsFogged(p.x, p.y)
    }

    public locFogged(loc: MapLocation): boolean {
        return IsLocationFoggedToPlayer(loc.getHandle, this.getHandle)
    }

    public coordsMasked(x: real, y: real): boolean {
        return IsMaskedToPlayer(x, y, this.getHandle)
    }

    public pointMasked(p: Point): boolean {
        return this.coordsMasked(p.x, p.y)
    }

    public locMasked(loc: MapLocation): boolean {
        return IsLocationMaskedToPlayer(loc.getHandle, this.getHandle)
    }

    public coordsVisible(x: real, y: real): boolean {
        return IsVisibleToPlayer(x, y, this.getHandle)
    }

    public pointVisible(p: Point): boolean {
        return this.coordsVisible(p.x, p.y)
    }

    public locVisible(loc: MapLocation): boolean {
        return IsLocationVisibleToPlayer(loc.getHandle, this.getHandle)
    }

    public cripple(toWhichPlayers: Force, flag: boolean) {
        CripplePlayer(this.getHandle, toWhichPlayers.getHandle, flag)
        return this
    }

    public getScore(whichPlayerScore: playerscore): integer {
        return GetPlayerScore(this.getHandle, whichPlayerScore)
    }

    public getState(whichPlayerState: playerstate): integer {
        return GetPlayerState(this.getHandle, whichPlayerState)
    }

    public getStructureCount(includeIncomplete: boolean): integer {
        return GetPlayerStructureCount(this.getHandle, includeIncomplete)
    }

    public getTaxRate(otherPlayer: player, whichResource: playerstate): real {
        return GetPlayerTaxRate(this.getHandle, otherPlayer, whichResource)
    }

    public getTechCount(techId: integer, specificonly: boolean): integer {
        return GetPlayerTechCount(this.getHandle, techId, specificonly)
    }

    public getTechMaxAllowed(techId: RawCode): integer {
        return GetPlayerTechMaxAllowed(this.getHandle, formatCC(techId))
    }

    public getTechResearched(techId: RawCode, specificonly: boolean): boolean {
        return GetPlayerTechResearched(this.getHandle, formatCC(techId), specificonly)
    }

    public getUnitCount(includeIncomplete: boolean): integer {
        return GetPlayerUnitCount(this.getHandle, includeIncomplete)
    }

    public getUnitCountByType(
        unitName: string,
        includeIncomplete: boolean,
        includeUpgrades: boolean
    ): integer {
        return GetPlayerTypedUnitCount(this.getHandle, unitName, includeIncomplete, includeUpgrades)
    }

    public inForce(whichForce: Force): boolean {
        return IsPlayerInForce(this.getHandle, whichForce.getHandle)
    }

    public isObserver(): boolean {
        return IsPlayerObserver(this.getHandle)
    }

    public isPlayerAlly(otherPlayer: MapPlayer): boolean {
        return IsPlayerAlly(this.getHandle, otherPlayer.getHandle)
    }

    public isPlayerEnemy(otherPlayer: MapPlayer): boolean {
        return IsPlayerEnemy(this.getHandle, otherPlayer.getHandle)
    }

    public isRacePrefSet(pref: racepreference): boolean {
        return IsPlayerRacePrefSet(this.getHandle, pref)
    }

    public isSelectable(): boolean {
        return GetPlayerSelectable(this.getHandle)
    }

    public remove(gameResult: playergameresult) {
        RemovePlayer(this.getHandle, gameResult)
    }

    public removeAllGuardPositions() {
        RemoveAllGuardPositions(this.getHandle)
        return this
    }

    public setAbilityAvailable(abilId: RawCode, avail: boolean) {
        SetPlayerAbilityAvailable(this.getHandle, formatCC(abilId), avail)
        return this
    }

    public setAlliance(otherPlayer: MapPlayer, whichAllianceSetting: alliancetype, value: boolean) {
        SetPlayerAlliance(this.getHandle, otherPlayer.getHandle, whichAllianceSetting, value)
        return this
    }

    public setOnScoreScreen(flag: boolean) {
        SetPlayerOnScoreScreen(this.getHandle, flag)
        return this
    }

    public setState(whichPlayerState: playerstate, value: integer) {
        SetPlayerState(this.getHandle, whichPlayerState, value)
        return this
    }

    public setTaxRate(otherPlayer: MapPlayer, whichResource: playerstate, rate: real) {
        SetPlayerTaxRate(this.getHandle, otherPlayer.getHandle, whichResource, rate)
        return this
    }

    public setRacePreference(whichRacePreference: racepreference) {
        SetPlayerRacePreference(this.getHandle, whichRacePreference)
        return this
    }

    public setRaceSelectable(value: boolean) {
        SetPlayerRaceSelectable(this.getHandle, value)
        return this
    }

    public setController(controlType: mapcontrol) {
        SetPlayerController(this.getHandle, controlType)
        return this
    }

    public setTechMaxAllowed(techId: RawCode, maximum: integer) {
        SetPlayerTechMaxAllowed(this.getHandle, formatCC(techId), maximum)
        return this
    }

    public setTechResearched(techId: RawCode, setToLevel: integer) {
        SetPlayerTechResearched(this.getHandle, formatCC(techId), setToLevel)
        return this
    }

    public setUnitsOwner(newOwner: integer) {
        SetPlayerUnitsOwner(this.getHandle, newOwner)
        return this
    }

    setLeaderboard(lb: Leaderboard) {
        PlayerSetLeaderboard(this.getHandle, lb.getHandle)
        return this
    }

    getleaderboard(toPlayer: MapPlayer): Leaderboard {
        return Leaderboard.fromHandle(PlayerGetLeaderboard(toPlayer.getHandle))
    }

    public static fromHandle(handle: player): MapPlayer {
        return this.getObject(handle)
    }

    public static fromEnum(): MapPlayer {
        return this.fromHandle(GetEnumPlayer())
    }

    /**
     * EVENT_PLAYER_DEFEAT - EventPlayer.Defeat
     * EVENT_PLAYER_VICTORY - EventPlayer.Victory
     * @returns MapPlayer
     */
    public static fromEvent(): MapPlayer {
        return this.fromHandle(GetTriggerPlayer())
    }

    public static fromFilter(): MapPlayer {
        return this.fromHandle(GetFilterPlayer())
    }

    public static fromIndex(index: integer): MapPlayer {
        return this.fromHandle(Player(index))
    }

    public static fromLocal(): MapPlayer {
        return this.fromHandle(GetLocalPlayer())
    }

    public static fromWinning(): MapPlayer {
        return this.fromHandle(GetWinningPlayer())
    }

    public static fromObject(object: MapPlayer): player {
        return this.getHandle(object)
    }
}
