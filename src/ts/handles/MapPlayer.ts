// /** @noSelfInFile **/
// //@ts-nocheck

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
import { AbilityRawCode, AbilityRawCodeType } from "./rawCode/AbilityRawCode"
import { Force } from "./Force"
import { Handle } from "./Handle"
import { LeaderBoard } from "./LeaderBoard"
import { MapLocation } from "./MapLocation"
import { TechRawCode, TechRawCodeType } from "./rawCode/TechRawCode"
import { ObjectOptions } from "../ObjectOptions"
import { PlayerScores } from "../fields/player/PlayerScores"

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
    color = this.getColor()
    controller = this.getController()
    handicap = this.getHandicap()
    handicapReviveTime = this.getHandicapReviveTime()
    handicapXP = this.getHandicapXp()
    handicapDamage = this.getHandicapDamage()
    num = this.getId()
    name = this.getName()
    slotState = this.getSlotState()
    startLocation = this.getStartLocation()
    team = this.getTeam()
    townHallCount = this.getTownHallCount()
    techResearchedLevels = new Map<integer, integer>()
    scores = new Map<PlayerScore, integer>()
    states = new Map<PlayerState, integer>()
    structureCounts = new Map<boolean, integer>()

    constructor(handle: player) {
        super(handle)
        for (const value of ObjectOptions.values(PlayerScores)) {
            this.states.set(value, this.getScore(value))
        }
        this.structureCounts.set(false, this.getStructureCount(false))
        this.structureCounts.set(true, this.getStructureCount(true))
    }

    setColor(color: PlayerColor) {
        SetPlayerColor(this.getHandle() as player, color.getHandle() as playercolor)
        this.color = color
        return this
    }

    getColor(): PlayerColor {
        return PlayerColor.fromHandle(GetPlayerColor(this.getHandle() as player))
    }

    getController(): MapControl {
        return MapControl.fromHandle(GetPlayerController(this.getHandle() as player))
    }

    getHandicap(): real {
        return GetPlayerHandicap(this.getHandle() as player)
    }

    setHandicap(handicap: real) {
        SetPlayerHandicap(this.getHandle() as player, handicap)
        this.handicap = handicap
        return this
    }

    getHandicapReviveTime(): real {
        return GetPlayerHandicapReviveTime(this.getHandle() as player)
    }

    setHandicapReviveTime(handicap: real) {
        SetPlayerHandicapReviveTime(this.getHandle() as player, handicap)
        this.handicapReviveTime = handicap
        return this
    }

    getHandicapXp(): real {
        return GetPlayerHandicapXP(this.getHandle() as player)
    }

    setHandicapXp(handicap: real) {
        SetPlayerHandicapXP(this.getHandle() as player, handicap)
        this.handicapXP = handicap
        return this
    }

    getHandicapDamage(): real {
        return GetPlayerHandicapDamage(this.getHandle() as player)
    }

    setHandicapDamage(handicap: real) {
        SetPlayerHandicapDamage(this.getHandle() as player, handicap)
        this.handicapDamage = handicap
        return this
    }

    getId(): integer {
        return GetPlayerId(this.getHandle() as player)
    }

    getName(): string {
        return GetPlayerName(this.getHandle() as player)
    }

    setName(value: string) {
        SetPlayerName(this.getHandle() as player, value)
        this.name = value
        return this
    }

    getRace(): Race {
        return Race.fromHandle(GetPlayerRace(this.getHandle() as player))
    }

    getSlotState(): PlayerSlotState {
        return PlayerSlotState.fromHandle(GetPlayerSlotState(this.getHandle() as player))
    }

    getStartLocation(): StartLocation {
        return StartLocation.arr[GetPlayerStartLocation(this.getHandle() as player)]
    }

    getTeam(): integer {
        return GetPlayerTeam(this.getHandle() as player)
    }

    getTownHallCount(): integer {
        return BlzGetPlayerTownHallCount(this.getHandle() as player)
    }

    addTechResearched(techCode: TechRawCodeType, levels: integer) {
        techCode = TechRawCode.toId(techCode)
        levels = Math.floor(levels)
        AddPlayerTechResearched(
            this.getHandle() as player,
            techCode,
            levels
        )
        const map = this.techResearchedLevels
        const level = map.get(techCode)
        let result
        if (level) {
            result = level + levels
        } else {
            result = levels
        }
        map.set(techCode, result)
        return this
    }

    decTechResearched(techCode: TechRawCodeType, levels: integer) {
        techCode = TechRawCode.toId(techCode)
        levels = Math.floor(levels)
        BlzDecPlayerTechResearched(
            this.getHandle() as player,
            techCode,
            levels
        )
        const map = this.techResearchedLevels
        const level = map.get(techCode)
        let result
        if (level) {
            result = level - levels
            if (result < 0) {
                result = 0
            }
        } else {
            result = levels
        }
        map.set(techCode, result)
        return this
    }

    /**
     * Used to store hero level data for the scorescreen
     * before units are moved to neutral passive in melee games
     * @returns this
     */
    cacheHeroData() {
        CachePlayerHeroData(this.getHandle() as player)
        return this
    }

    isAlliance(otherPlayer: MapPlayer, whichAllianceSetting: AllianceType): boolean {
        return GetPlayerAlliance(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichAllianceSetting.getHandle() as alliancetype
        )
    }

    isFoggedCoords(x: real, y: real): boolean {
        return IsFoggedToPlayer(x, y, this.getHandle() as player)
    }

    isFoggedPos(p: Position): boolean {
        return this.isFoggedCoords(p.x, p.y)
    }

    isFoggedLoc(loc: MapLocation): boolean {
        return IsLocationFoggedToPlayer(loc.getHandle() as location, this.getHandle() as player)
    }

    isMaskedCoords(x: real, y: real): boolean {
        return IsMaskedToPlayer(x, y, this.getHandle() as player)
    }

    isMaskedPos(p: Position): boolean {
        return this.isMaskedCoords(p.x, p.y)
    }

    isMaskedLoc(loc: MapLocation): boolean {
        return IsLocationMaskedToPlayer(loc.getHandle() as location, this.getHandle() as player)
    }

    isVisibleCoords(x: real, y: real): boolean {
        return IsVisibleToPlayer(x, y, this.getHandle() as player)
    }

    isVisiblePos(p: Position): boolean {
        return this.isVisibleCoords(p.x, p.y)
    }

    isVisibleLoc(loc: MapLocation): boolean {
        return IsLocationVisibleToPlayer(loc.getHandle() as location, this.getHandle() as player)
    }

    cripple(toWhichPlayers: Force, flag: boolean) {
        CripplePlayer(this.getHandle() as player, toWhichPlayers.getHandle() as force, flag)
        return this
    }

    getScore(whichPlayerScore: PlayerScore): integer {
        return GetPlayerScore(
            this.getHandle() as player,
            whichPlayerScore.getHandle() as playerscore
        )
    }

    getState(whichPlayerState: PlayerState): integer {
        return GetPlayerState(
            this.getHandle() as player,
            whichPlayerState.getHandle() as playerstate
        )
    }

    getStructureCount(includeIncomplete: boolean): integer {
        return GetPlayerStructureCount(this.getHandle() as player, includeIncomplete)
    }

    getTaxRate(otherPlayer: MapPlayer, whichResource: PlayerState): real {
        return GetPlayerTaxRate(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichResource.getHandle() as playerstate
        )
    }

    getTechCount(techCode: TechRawCodeType, specificonly: boolean): integer {
        return GetPlayerTechCount(
            this.getHandle() as player,
            TechRawCode.toId(techCode),
            specificonly
        )
    }

    getTechMaxAllowed(techCode: TechRawCodeType): integer {
        return GetPlayerTechMaxAllowed(this.getHandle() as player, TechRawCode.toId(techCode))
    }

    getTechResearched(techCode: TechRawCodeType, specificonly: boolean): boolean {
        return GetPlayerTechResearched(
            this.getHandle() as player,
            TechRawCode.toId(techCode),
            specificonly
        )
    }

    getUnitCount(includeIncomplete: boolean): integer {
        return GetPlayerUnitCount(this.getHandle() as player, includeIncomplete)
    }

    getTypedUnitCount(
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

    inForce(whichForce: Force): boolean {
        return IsPlayerInForce(this.getHandle() as player, whichForce.getHandle() as force)
    }

    isObserver(): boolean {
        return IsPlayerObserver(this.getHandle() as player)
    }

    isAlly(otherPlayer: MapPlayer): boolean {
        return IsPlayerAlly(this.getHandle() as player, otherPlayer.getHandle() as player)
    }

    isEnemy(otherPlayer: MapPlayer): boolean {
        return IsPlayerEnemy(this.getHandle() as player, otherPlayer.getHandle() as player)
    }

    isRacePrefSet(pref: RacePref): boolean {
        return IsPlayerRacePrefSet(this.getHandle() as player, pref.getHandle() as racepreference)
    }

    isSelectable(): boolean {
        return GetPlayerSelectable(this.getHandle() as player)
    }

    remove(gameResult: PlayerGameResult) {
        RemovePlayer(this.getHandle() as player, gameResult.getHandle() as playergameresult)
        return this
    }

    removeAllGuardPositions() {
        RemoveAllGuardPositions(this.getHandle() as player)
        return this
    }

    setAbilityAvailable(abilCode: AbilityRawCodeType, avail: boolean) {
        SetPlayerAbilityAvailable(this.getHandle() as player, AbilityRawCode.toId(abilCode), avail)
        return this
    }

    setAlliance(otherPlayer: MapPlayer, whichAllianceSetting: AllianceType, value: boolean) {
        SetPlayerAlliance(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichAllianceSetting.getHandle() as alliancetype,
            value
        )
        return this
    }

    setOnScoreScreen(flag: boolean) {
        SetPlayerOnScoreScreen(this.getHandle() as player, flag)
        return this
    }

    setState(whichPlayerState: PlayerState, value: integer) {
        value = Math.floor(value)
        SetPlayerState(
            this.getHandle() as player,
            whichPlayerState.getHandle() as playerstate,
            value
        )
        this.states.set(whichPlayerState, value)
        return this
    }

    setTaxRate(otherPlayer: MapPlayer, whichResource: PlayerState, rate: real) {
        SetPlayerTaxRate(
            this.getHandle() as player,
            otherPlayer.getHandle() as player,
            whichResource.getHandle() as playerstate,
            rate
        )
        return this
    }

    setRacePreference(whichRacePreference: RacePref) {
        SetPlayerRacePreference(
            this.getHandle() as player,
            whichRacePreference.getHandle() as racepreference
        )
        return this
    }

    setRaceSelectable(value: boolean) {
        SetPlayerRaceSelectable(this.getHandle() as player, value)
        return this
    }

    setController(controlType: MapControl) {
        SetPlayerController(this.getHandle() as player, controlType.getHandle() as mapcontrol)
        return this
    }

    setTechMaxAllowed(techCode: TechRawCodeType, maximum: integer) {
        SetPlayerTechMaxAllowed(
            this.getHandle() as player,
            TechRawCode.toId(techCode),
            Math.floor(maximum)
        )
        return this
    }

    setTechResearched(techCode: TechRawCodeType, setToLevel: integer) {
        SetPlayerTechResearched(
            this.getHandle() as player,
            TechRawCode.toId(techCode),
            Math.floor(setToLevel)
        )
        return this
    }

    setUnitsOwner(newOwner: integer) {
        SetPlayerUnitsOwner(this.getHandle() as player, Math.floor(newOwner))
        return this
    }

    setLeaderboard(lb: LeaderBoard) {
        PlayerSetLeaderboard(this.getHandle() as player, lb.getHandle() as leaderboard)
        return this
    }

    getleaderboard(toPlayer: MapPlayer): LeaderBoard {
        return LeaderBoard.fromHandle(PlayerGetLeaderboard(toPlayer.getHandle() as player))
    }

    static fromHandle(handle: player) {
        return this.getObject(handle) as MapPlayer
    }

    static fromEnum(): MapPlayer {
        return this.fromHandle(GetEnumPlayer())
    }

    /**
     * EVENT_PLAYER_DEFEAT - EventPlayer.Defeat
     * EVENT_PLAYER_VICTORY - EventPlayer.Victory
     * @returns MapPlayer
     */
    static fromEvent(): MapPlayer {
        return this.fromHandle(GetTriggerPlayer())
    }

    static fromFilter(): MapPlayer {
        return this.fromHandle(GetFilterPlayer())
    }

    static fromIndex(index: integer): MapPlayer {
        return this.fromHandle(Player(math.floor(index)))
    }

    static fromLocal(): MapPlayer {
        return this.fromHandle(GetLocalPlayer())
    }

    static fromWinning(): MapPlayer {
        return this.fromHandle(GetWinningPlayer())
    }
}
