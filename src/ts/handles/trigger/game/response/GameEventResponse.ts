/** @noSelfInFile **/
//@ts-nocheck

import { GameEvent } from "../../../../API/fields/events/GameEvent"
import { GameFloatState } from "../../../../API/fields/game/GameFloatState"
import { GameIntegerState } from "../../../../API/fields/game/GameIntegerState"
import { GameEvents } from "../../../../fields/events/GameEvents"
import { GameStates } from "../../../../fields/game/GameStates"
import { MapPlayer } from "../../../MapPlayer"
import { Region } from "../../../Region"
import { Trackable } from "../../../Trackable"
import { Unit } from "../../../Unit"

declare function GetTournamentFinishSoonTimeRemaining(): real
declare function GetTournamentFinishNowRule(): integer
declare function GetTournamentFinishNowPlayer(): player
declare function GetTournamentScore(whichPlayer: player): integer
declare function GetSaveBasicFilename(): string

export class GameEventResponse {
    protected winningPlayer?: MapPlayer
    protected tournamentFinishSoonTimeRemaining?: real
    protected tournamentFinishNowRule?: integer
    protected tournamentFinishNowPlayer?: MapPlayer
    public getTournamentScore?: (whichPlayer: MapPlayer) => integer
    protected saveBasicFilename?: string
    protected state?: GameIntegerState | GameFloatState
    protected region?: Region
    protected enteringUnit?: Unit
    protected leavingUnit?: Unit
    protected trackable?: Trackable

    public constructor(event: GameEvent) {
        if (event === GameEvents.VICTORY) {
            this.winningPlayer = MapPlayer.fromWinning()
        }
        const isNow = event === GameEvents.TOURNAMENT_FINISH_NOW
        const isSoon = event === GameEvents.TOURNAMENT_FINISH_SOON
        if (isNow || isSoon) {
            this.getTournamentScore = (whichPlayer: MapPlayer): integer => {
                return GetTournamentScore(whichPlayer.getHandle() as player)
            }
            if (isNow) {
                this.tournamentFinishNowRule = GetTournamentFinishNowRule()
                this.tournamentFinishNowPlayer = MapPlayer.fromHandle(
                    GetTournamentFinishNowPlayer()
                )
            }
            if (isSoon) {
                this.tournamentFinishSoonTimeRemaining = GetTournamentFinishSoonTimeRemaining()
            }
        }
        if (event === GameEvents.SAVE) {
            this.saveBasicFilename = GetSaveBasicFilename()
        }
        if (event === GameEvents.STATE_LIMIT) {
            const integerState = GameIntegerState.fromEvent()
            const floatState = GameFloatState.fromEvent()
            if (
                integerState.getHandle() === GameStates.DISCONNECTED.getHandle() ||
                integerState.getHandle() === GameStates.DIVINE_INTERVENTION.getHandle()
            ) {
                this.state = integerState
            } else if (floatState.getHandle() === GameStates.TIME_OF_DAY.getHandle()) {
                this.state = floatState
            }
        }
        const isEnter = event === GameEvents.ENTER_REGION
        const isLeave = event === GameEvents.LEAVE_REGION
        if (isEnter || isLeave) {
            this.region = Region.fromEvent()
            if (isEnter) {
                this.enteringUnit = Unit.getEntering()
            } else {
                this.leavingUnit = Unit.getLeaving()
            }
        }
        if (event === GameEvents.TRACKABLE_HIT || event === GameEvents.TRACKABLE_TRACK) {
            this.trackable = Trackable.fromEvent()
        }
    }

    public getWinningPlayer() {
        return this.winningPlayer
    }

    public getTournamentFinishSoonTimeRemaining(): real | undefined {
        return this.tournamentFinishSoonTimeRemaining
    }

    public getTournamentFinishNowRule(): integer | undefined {
        return this.tournamentFinishNowRule
    }

    public getTournamentFinishNowPlayer() {
        return this.tournamentFinishNowPlayer
    }

    public getSaveBasicFilename() {
        return this.saveBasicFilename
    }

    public getState() {
        return this.state
    }

    public getRegion() {
        return this.region
    }

    public getEnteringUnit() {
        return this.enteringUnit
    }

    public getLeavingUnit() {
        return this.leavingUnit
    }

    public getTrackable() {
        return this.trackable
    }
}
