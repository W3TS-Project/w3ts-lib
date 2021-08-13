/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../../MapPlayer"
import { EventResponse } from "../../Trigger"

declare function GetTournamentScore(whichPlayer: player): integer
declare function GetTournamentFinishNowRule(): integer
declare function GetTournamentFinishNowPlayer(): player

export class GameTournamentFinishNowEventResponse extends EventResponse {
    getScore = (whichPlayer: MapPlayer): integer =>
        GetTournamentScore(whichPlayer.getHandle() as player)
    rule: integer = GetTournamentFinishNowRule()
    player = MapPlayer.fromHandle(GetTournamentFinishNowPlayer())
}
