import { MapPlayer } from "../../../MapPlayer";

export class GameVictoryEventResponse {
    protected winningPlayer: MapPlayer

    public constructor() {
        this.winningPlayer = MapPlayer.fromWinning()
    }

    public getWinningPlayer() {
        return this.winningPlayer
    }
}