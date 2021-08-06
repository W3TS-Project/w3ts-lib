/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../../MapPlayer"

declare function GetTournamentScore(whichPlayer: player): integer
declare function GetTournamentFinishSoonTimeRemaining(): real

export class GameTournamentFinishSoonEventResponse {
    public getScore: (whichPlayer: MapPlayer) => integer
    protected timeRemaining: real

    public constructor() {
        this.getScore = (whichPlayer: MapPlayer): integer =>
            GetTournamentScore(whichPlayer.getHandle() as player)
        this.timeRemaining = GetTournamentFinishSoonTimeRemaining()
    }

    public getTimeRemaining(): real {
        return this.timeRemaining
    }
}
