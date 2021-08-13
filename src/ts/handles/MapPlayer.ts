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
    public setColor(color: PlayerColor) {
        SetPlayerColor(this.getHandle() as player, color.getHandle() as playercolor)
    }

    public getColor(): PlayerColor {
        return PlayerColor.fromHandle(GetPlayerColor(this.getHandle() as player))
    }

    public getController(): MapControl {
        return MapControl.fromHandle(GetPlayerController(this.getHandle() as player))
    }

    public getHandicap(): real {
        return GetPlayerHandicap(this.getHandle() as player)
    }

    public setHandicap(handicap: real) {
        SetPlayerHandicap(this.getHandle() as player, handicap)
        return this
    }

    public getHandicapReviveTime(): real {
        return GetPlayerHandicapReviveTime(this.getHandle() as player)
    }

    public setHandicapReviveTime(handicap: real) {
        SetPlayerHandicapReviveTime(this.getHandle() as player, handicap)
        return this
    }

    public getHandicapXp(): real {
        return GetPlayerHandicapXP(this.getHandle() as player)
    }

    public setHandicapXp(handicap: real) {
        SetPlayerHandicapXP(this.getHandle() as player, handicap)
        return this
    }

    public getHandicapDamage(): real {
        return GetPlayerHandicapDamage(this.getHandle() as player)
    }

    public setHandicapDamage(handicap: real) {
        SetPlayerHandicapDamage(this.getHandle() as player, handicap)
        return this
    }

    public getId(): integer {
        return GetPlayerId(this.getHandle() as player)
    }

    public getName(): string {
        return GetPlayerName(this.getHandle() as player)
    }

    public setName(value: string) {
        SetPlayerName(this.getHandle() as player, value)
        return this
    }

    public getRace(): Race {
        return Race.fromHandle(GetPlayerRace(this.getHandle() as player))
    }

    public getSlotState(): PlayerSlotState {
        return PlayerSlotState.fromHandle(GetPlayerSlotState(this.getHandle() as player))
    }

    public getStartLocation(): StartLocation {
        return StartLocation.arr[GetPlayerStartLocation(this.getHandle() as player)]
    }

    public getTeam(): integer {
        return GetPlayerTeam(this.getHandle() as player)
    }

    public getTownHallCount(): integer {
        return BlzGetPlayerTownHallCount(this.getHandle() as player)
    }

    public addTechResearched(techCode: TechRawCode, levels: integer) {
        AddPlayerTechResearched(this.getHandle() as player, techCode.getId(), Math.floor(levels))
        return this
    }

    public decTechResearched(techCode: TechRawCode, levels: integer) {
        BlzDecPlayerTechResearched(this.getHandle() as player, techCode.getId(), Math.floor(levels))
        return this
    }

    /**
     * Used to store hero level data for the scorescreen
     * before units are moved to neutral passive in melee games
     * @returns this
     */
    public cacheHeroData() {
        CachePlayerHeroData(this.getHandle() as player)
        return this
    }

    public isAlliance(otherPlayer: MapPlayer, whichAllianceSetting: AllianceType): boolean {
        return GetPlayerAlliance(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichAllianceSetting.getHandle() as alliancetype
        )
    }

    public isFoggedCoords(x: real, y: real): boolean {
        return IsFoggedToPlayer(x, y, this.getHandle() as player)
    }

    public isFoggedPos(p: Position): boolean {
        return this.isFoggedCoords(p.getX(), p.getY())
    }

    public isFoggedLoc(loc: MapLocation): boolean {
        return IsLocationFoggedToPlayer(loc.getHandle() as location, this.getHandle() as player)
    }

    public isMaskedCoords(x: real, y: real): boolean {
        return IsMaskedToPlayer(x, y, this.getHandle() as player)
    }

    public isMaskedPos(p: Position): boolean {
        return this.isMaskedCoords(p.getX(), p.getY())
    }

    public isMaskedLoc(loc: MapLocation): boolean {
        return IsLocationMaskedToPlayer(loc.getHandle() as location, this.getHandle() as player)
    }

    public isVisibleCoords(x: real, y: real): boolean {
        return IsVisibleToPlayer(x, y, this.getHandle() as player)
    }

    public isVisiblePos(p: Position): boolean {
        return this.isVisibleCoords(p.getX(), p.getY())
    }

    public isVisibleLoc(loc: MapLocation): boolean {
        return IsLocationVisibleToPlayer(loc.getHandle() as location, this.getHandle() as player)
    }

    public cripple(toWhichPlayers: Force, flag: boolean) {
        CripplePlayer(this.getHandle() as player, toWhichPlayers.getHandle() as force, flag)
        return this
    }

    public getScore(whichPlayerScore: PlayerScore): integer {
        return GetPlayerScore(
            this.getHandle() as player,
            whichPlayerScore.getHandle() as playerscore
        )
    }

    public getState(whichPlayerState: PlayerState): integer {
        return GetPlayerState(
            this.getHandle() as player,
            whichPlayerState.getHandle() as playerstate
        )
    }

    public getStructureCount(includeIncomplete: boolean): integer {
        return GetPlayerStructureCount(this.getHandle() as player, includeIncomplete)
    }

    public getTaxRate(otherPlayer: MapPlayer, whichResource: PlayerState): real {
        return GetPlayerTaxRate(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichResource.getHandle() as playerstate
        )
    }

    public getTechCount(techCode: TechRawCode, specificonly: boolean): integer {
        return GetPlayerTechCount(this.getHandle() as player, techCode.getId(), specificonly)
    }

    public getTechMaxAllowed(techCode: TechRawCode): integer {
        return GetPlayerTechMaxAllowed(this.getHandle() as player, techCode.getId())
    }

    public getTechResearched(techCode: TechRawCode, specificonly: boolean): boolean {
        return GetPlayerTechResearched(this.getHandle() as player, techCode.getId(), specificonly)
    }

    public getUnitCount(includeIncomplete: boolean): integer {
        return GetPlayerUnitCount(this.getHandle() as player, includeIncomplete)
    }

    public getTypedUnitCount(
        unitName: string,
        includeIncomplete: boolean,
        includeUpgrades: boolean
    ): integer {
        return GetPlayerTypedUnitCount(
            this.getHandle() as player,
            unitName,
            includeIncomplete,
            includeUpgrades
        )
    }

    public inForce(whichForce: Force): boolean {
        return IsPlayerInForce(this.getHandle() as player, whichForce.getHandle() as force)
    }

    public isObserver(): boolean {
        return IsPlayerObserver(this.getHandle() as player)
    }

    public isAlly(otherPlayer: MapPlayer): boolean {
        return IsPlayerAlly(this.getHandle() as player, otherPlayer.getHandle() as player)
    }

    public isEnemy(otherPlayer: MapPlayer): boolean {
        return IsPlayerEnemy(this.getHandle() as player, otherPlayer.getHandle() as player)
    }

    public isRacePrefSet(pref: RacePref): boolean {
        return IsPlayerRacePrefSet(this.getHandle() as player, pref.getHandle() as racepreference)
    }

    public isSelectable(): boolean {
        return GetPlayerSelectable(this.getHandle() as player)
    }

    public remove(gameResult: PlayerGameResult) {
        RemovePlayer(this.getHandle() as player, gameResult.getHandle() as playergameresult)
        return this
    }

    public removeAllGuardPositions() {
        RemoveAllGuardPositions(this.getHandle() as player)
        return this
    }

    public setAbilityAvailable(abilCode: AbilityRawCode, avail: boolean) {
        SetPlayerAbilityAvailable(this.getHandle() as player, abilCode.getId(), avail)
        return this
    }

    public setAlliance(otherPlayer: MapPlayer, whichAllianceSetting: AllianceType, value: boolean) {
        SetPlayerAlliance(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichAllianceSetting.getHandle() as alliancetype,
            value
        )
        return this
    }

    public setOnScoreScreen(flag: boolean) {
        SetPlayerOnScoreScreen(this.getHandle() as player, flag)
        return this
    }

    public setState(whichPlayerState: PlayerState, value: integer) {
        SetPlayerState(
            this.getHandle() as player,
            whichPlayerState.getHandle() as playerstate,
            Math.floor(value)
        )
        return this
    }

    public setTaxRate(otherPlayer: MapPlayer, whichResource: PlayerState, rate: real) {
        SetPlayerTaxRate(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichResource.getHandle() as playerstate,
            rate
        )
        return this
    }

    public setRacePreference(whichRacePreference: RacePref) {
        SetPlayerRacePreference(
            this.getHandle() as player,
            whichRacePreference.getHandle() as racepreference
        )
        return this
    }

    public setRaceSelectable(value: boolean) {
        SetPlayerRaceSelectable(this.getHandle() as player, value)
        return this
    }

    public setController(controlType: MapControl) {
        SetPlayerController(this.getHandle() as player, controlType.getHandle() as mapcontrol)
        return this
    }

    public setTechMaxAllowed(techCode: TechRawCode, maximum: integer) {
        SetPlayerTechMaxAllowed(this.getHandle() as player, techCode.getId(), Math.floor(maximum))
        return this
    }

    public setTechResearched(techCode: TechRawCode, setToLevel: integer) {
        SetPlayerTechResearched(
            this.getHandle() as player,
            techCode.getId(),
            Math.floor(setToLevel)
        )
        return this
    }

    public setUnitsOwner(newOwner: integer) {
        SetPlayerUnitsOwner(this.getHandle() as player, Math.floor(newOwner))
        return this
    }

    public setLeaderboard(lb: LeaderBoard) {
        PlayerSetLeaderboard(this.getHandle() as player, lb.getHandle() as leaderboard)
        return this
    }

    public getleaderboard(toPlayer: MapPlayer): LeaderBoard {
        return LeaderBoard.fromHandle(PlayerGetLeaderboard(toPlayer.getHandle() as player))
    }

    public static fromHandle(handle: player) {
        return this.getObject(handle) as MapPlayer
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
        return this.fromHandle(Player(math.floor(index)))
    }

    public static fromLocal(): MapPlayer {
        return this.fromHandle(GetLocalPlayer())
    }

    public static fromWinning(): MapPlayer {
        return this.fromHandle(GetWinningPlayer())
    }
}
