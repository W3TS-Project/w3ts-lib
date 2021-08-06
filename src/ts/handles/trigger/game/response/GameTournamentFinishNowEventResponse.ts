/** @noSelfInFile **/
//@ts-nocheck

import { MapPlayer } from "../../../MapPlayer"

declare function GetTournamentScore(whichPlayer: player): integer
declare function GetTournamentFinishNowRule(): integer
declare function GetTournamentFinishNowPlayer(): player

export class GameTournamentFinishNowEventResponse {
    public getScore: (whichPlayer: MapPlayer) => integer
    protected rule: integer
    protected player: MapPlayer

    public constructor() {
        this.getScore = (whichPlayer: MapPlayer): integer =>
            GetTournamentScore(whichPlayer.getHandle() as player)
        this.rule = GetTournamentFinishNowRule()
        this.player = MapPlayer.fromHandle(GetTournamentFinishNowPlayer())
    }

    public getRule(): integer {
        return this.rule
    }

    public getPlayer() {
        return this.player
    }
}
