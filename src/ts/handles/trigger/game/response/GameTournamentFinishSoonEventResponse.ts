/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../../MapPlayer"
import { EventResponse } from "../../Trigger"

declare function GetTournamentScore(whichPlayer: player): integer
declare function GetTournamentFinishSoonTimeRemaining(): real

export class GameTournamentFinishSoonEventResponse extends EventResponse {
    getScore = (whichPlayer: MapPlayer): integer =>
        GetTournamentScore(whichPlayer.getHandle() as player)
    timeRemaining: real = GetTournamentFinishSoonTimeRemaining()
}
