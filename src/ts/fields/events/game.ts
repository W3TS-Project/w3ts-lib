/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../handles/player"
import { integer, real } from "../../utils"

declare function ConvertGameEvent(i: number): gameevent
declare function GetEventGameState(): gamestate
declare function GetTournamentFinishSoonTimeRemaining(): real
declare function GetTournamentFinishNowRule(): integer
declare function GetTournamentFinishNowPlayer(): player
declare function GetTournamentScore(whichPlayer: player): integer
declare function GetSaveBasicFilename(): string

const c = ConvertGameEvent

export const GameEvent = {
    Victory: c(0),
    EndLevel: c(1),

    VariableLimit: c(2),
    StateLimit: c(3),

    TimerExpired: c(4),

    EnterRegion: c(5),
    LeaveRegion: c(6),

    TrackableHit: c(7),
    TrackableTrack: c(8),

    ShowSkill: c(9),
    BuildSubmenu: c(10),

    Loaded: c(256),
    TournamentFinishSoon: c(257),
    TournamentFinishNow: c(258),
    Save: c(259),
    CustomUIFrame: c(310),

    getState() {
        return GetEventGameState()
    },

    /**
     * EVENT_GAME_TOURNAMENT_FINISH_SOON
     * GameEvent.TournamentFinishSoon
     * @returns real
     */
    getTournamentFinishSoonTimeRemaining(): real {
        return GetTournamentFinishSoonTimeRemaining()
    },

    getTournamentFinishNowRule(): integer {
        return GetTournamentFinishNowRule()
    },

    getTournamentFinishNowPlayer(): MapPlayer {
        return MapPlayer.fromHandle(GetTournamentFinishNowPlayer())
    },

    getTournamentScore(whichPlayer: MapPlayer): integer {
        return GetTournamentScore(whichPlayer.getHandle)
    },

    /**
     * EVENT_GAME_SAVE
     * GameEvent.Save
     * @returns string
     */
    getSaveBasicFilename(): string {
        return GetSaveBasicFilename()
    }
}
