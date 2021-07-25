/** @noSelfInFile **/
//@ts-nocheck

import { MapControl } from "../API/fields/mapSetup/MapControl"
import { RacePref } from "../API/fields/mapSetup/RacePref"
import { Race } from "../API/fields/other/Race"
import { AllianceType } from "../API/fields/player/AllianceType"
import { PlayerColor } from "../API/fields/player/PlayerColor"
import { PlayerGameResult } from "../API/fields/player/PlayerGameResult"
import { PlayerScore } from "../API/fields/player/PlayerScore"
import { PlayerSlotState } from "../API/fields/player/PlayerSlotState"
import { PlayerState } from "../API/fields/player/PlayerState"
import { StartLocation } from "../API/StartLocation"
import { Position } from "../Package"
import { AbilityRawCode } from "./rawCode/AbilityRawCode"
import { Force } from "./Force"
import { Handle } from "./Handle"
import { LeaderBoard } from "./LeaderBoard"
import { MapLocation } from "./MapLocation"
import { TechRawCode } from "./rawCode/TechRawCode"

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
        super(Player(Math.floor(index)))
    }

    public setColor(color: PlayerColor) {
        SetPlayerColor(this.getHandle, color.getHandle)
    }

    public getColor(): PlayerColor {
        return PlayerColor.fromHandle(GetPlayerColor(this.getHandle))
    }

    public getController(): MapControl {
        return MapControl.fromHandle(GetPlayerController(this.getHandle))
    }

    public getHandicap(): real {
        return GetPlayerHandicap(this.getHandle)
    }

    public setHandicap(handicap: real) {
        SetPlayerHandicap(this.getHandle, handicap)
        return this
    }

    public getHandicapReviveTime(): real {
        return GetPlayerHandicapReviveTime(this.getHandle)
    }

    public setHandicapReviveTime(handicap: real) {
        SetPlayerHandicapReviveTime(this.getHandle, handicap)
        return this
    }

    public getHandicapXp(): real {
        return GetPlayerHandicapXP(this.getHandle)
    }

    public setHandicapXp(handicap: real) {
        SetPlayerHandicapXP(this.getHandle, handicap)
        return this
    }

    public getHandicapDamage(): real {
        return GetPlayerHandicapDamage(this.getHandle)
    }

    public setHandicapDamage(handicap: real) {
        SetPlayerHandicapDamage(this.getHandle, handicap)
        return this
    }

    public getId(): integer {
        return GetPlayerId(this.getHandle)
    }

    public getName(): string {
        return GetPlayerName(this.getHandle)
    }

    public setName(value: string) {
        SetPlayerName(this.getHandle, value)
        return this
    }

    public getRace(): Race {
        return Race.fromHandle(GetPlayerRace(this.getHandle))
    }

    public getSlotState(): PlayerSlotState {
        return PlayerSlotState.fromHandle(GetPlayerSlotState(this.getHandle))
    }

    public getStartLocation(): StartLocation {
        return StartLocation.arr[GetPlayerStartLocation(this.getHandle)]
    }

    public getTeam(): integer {
        return GetPlayerTeam(this.getHandle)
    }

    public getTownHallCount(): integer {
        return BlzGetPlayerTownHallCount(this.getHandle)
    }

    public addTechResearched(techCode: TechRawCode, levels: integer) {
        AddPlayerTechResearched(this.getHandle, techCode.getId(), Math.floor(levels))
        return this
    }

    public decTechResearched(techCode: TechRawCode, levels: integer) {
        BlzDecPlayerTechResearched(this.getHandle, techCode.getId(), Math.floor(levels))
        return this
    }

    /**
     * Used to store hero level data for the scorescreen
     * before units are moved to neutral passive in melee games
     * @returns this
     */
    public cacheHeroData() {
        CachePlayerHeroData(this.getHandle)
        return this
    }

    public isAlliance(otherPlayer: MapPlayer, whichAllianceSetting: AllianceType): boolean {
        return GetPlayerAlliance(
            this.getHandle,
            otherPlayer.getHandle,
            whichAllianceSetting.getHandle
        )
    }

    public isFoggedCoords(x: real, y: real): boolean {
        return IsFoggedToPlayer(x, y, this.getHandle)
    }

    public isFoggedPos(p: Position): boolean {
        return this.isFoggedCoords(p.getX(), p.getY())
    }

    public isFoggedLoc(loc: MapLocation): boolean {
        return IsLocationFoggedToPlayer(loc.getHandle, this.getHandle)
    }

    public isMaskedCoords(x: real, y: real): boolean {
        return IsMaskedToPlayer(x, y, this.getHandle)
    }

    public isMaskedPos(p: Position): boolean {
        return this.isMaskedCoords(p.getX(), p.getY())
    }

    public isMaskedLoc(loc: MapLocation): boolean {
        return IsLocationMaskedToPlayer(loc.getHandle, this.getHandle)
    }

    public isVisibleCoords(x: real, y: real): boolean {
        return IsVisibleToPlayer(x, y, this.getHandle)
    }

    public isVisiblePos(p: Position): boolean {
        return this.isVisibleCoords(p.getX(), p.getY())
    }

    public isVisibleLoc(loc: MapLocation): boolean {
        return IsLocationVisibleToPlayer(loc.getHandle, this.getHandle)
    }

    public cripple(toWhichPlayers: Force, flag: boolean) {
        CripplePlayer(this.getHandle, toWhichPlayers.getHandle, flag)
        return this
    }

    public getScore(whichPlayerScore: PlayerScore): integer {
        return GetPlayerScore(this.getHandle, whichPlayerScore.getHandle)
    }

    public getState(whichPlayerState: PlayerState): integer {
        return GetPlayerState(this.getHandle, whichPlayerState.getHandle)
    }

    public getStructureCount(includeIncomplete: boolean): integer {
        return GetPlayerStructureCount(this.getHandle, includeIncomplete)
    }

    public getTaxRate(otherPlayer: MapPlayer, whichResource: PlayerState): real {
        return GetPlayerTaxRate(this.getHandle, otherPlayer.getHandle, whichResource.getHandle)
    }

    public getTechCount(techCode: TechRawCode, specificonly: boolean): integer {
        return GetPlayerTechCount(this.getHandle, techCode.getId(), specificonly)
    }

    public getTechMaxAllowed(techCode: TechRawCode): integer {
        return GetPlayerTechMaxAllowed(this.getHandle, techCode.getId())
    }

    public getTechResearched(techCode: TechRawCode, specificonly: boolean): boolean {
        return GetPlayerTechResearched(this.getHandle, techCode.getId(), specificonly)
    }

    public getUnitCount(includeIncomplete: boolean): integer {
        return GetPlayerUnitCount(this.getHandle, includeIncomplete)
    }

    public getTypedUnitCount(
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

    public isAlly(otherPlayer: MapPlayer): boolean {
        return IsPlayerAlly(this.getHandle, otherPlayer.getHandle)
    }

    public isEnemy(otherPlayer: MapPlayer): boolean {
        return IsPlayerEnemy(this.getHandle, otherPlayer.getHandle)
    }

    public isRacePrefSet(pref: RacePref): boolean {
        return IsPlayerRacePrefSet(this.getHandle, pref.getHandle)
    }

    public isSelectable(): boolean {
        return GetPlayerSelectable(this.getHandle)
    }

    public remove(gameResult: PlayerGameResult) {
        RemovePlayer(this.getHandle, gameResult.getHandle)
        return this
    }

    public removeAllGuardPositions() {
        RemoveAllGuardPositions(this.getHandle)
        return this
    }

    public setAbilityAvailable(abilCode: AbilityRawCode, avail: boolean) {
        SetPlayerAbilityAvailable(this.getHandle, abilCode.getId(), avail)
        return this
    }

    public setAlliance(otherPlayer: MapPlayer, whichAllianceSetting: AllianceType, value: boolean) {
        SetPlayerAlliance(
            this.getHandle,
            otherPlayer.getHandle,
            whichAllianceSetting.getHandle,
            value
        )
        return this
    }

    public setOnScoreScreen(flag: boolean) {
        SetPlayerOnScoreScreen(this.getHandle, flag)
        return this
    }

    public setState(whichPlayerState: PlayerState, value: integer) {
        SetPlayerState(this.getHandle, whichPlayerState.getHandle, Math.floor(value))
        return this
    }

    public setTaxRate(otherPlayer: MapPlayer, whichResource: PlayerState, rate: real) {
        SetPlayerTaxRate(this.getHandle, otherPlayer.getHandle, whichResource.getHandle, rate)
        return this
    }

    public setRacePreference(whichRacePreference: RacePref) {
        SetPlayerRacePreference(this.getHandle, whichRacePreference.getHandle)
        return this
    }

    public setRaceSelectable(value: boolean) {
        SetPlayerRaceSelectable(this.getHandle, value)
        return this
    }

    public setController(controlType: MapControl) {
        SetPlayerController(this.getHandle, controlType.getHandle)
        return this
    }

    public setTechMaxAllowed(techCode: TechRawCode, maximum: integer) {
        SetPlayerTechMaxAllowed(this.getHandle, techCode.getId(), Math.floor(maximum))
        return this
    }

    public setTechResearched(techCode: TechRawCode, setToLevel: integer) {
        SetPlayerTechResearched(this.getHandle, techCode.getId(), Math.floor(setToLevel))
        return this
    }

    public setUnitsOwner(newOwner: integer) {
        SetPlayerUnitsOwner(this.getHandle, Math.floor(newOwner))
        return this
    }

    public setLeaderboard(lb: LeaderBoard) {
        PlayerSetLeaderboard(this.getHandle, lb.getHandle)
        return this
    }

    public getleaderboard(toPlayer: MapPlayer): LeaderBoard {
        return LeaderBoard.fromHandle(PlayerGetLeaderboard(toPlayer.getHandle))
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
        return this.fromHandle(Player(Math.floor(index)))
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
