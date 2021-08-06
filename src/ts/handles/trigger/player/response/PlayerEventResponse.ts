import { MapPlayer } from "../../../MapPlayer";

export class PlayerEventResponse {
    protected player: MapPlayer

    public constructor() {
        this.player = MapPlayer.fromEvent()
    }

    public getPlayer() {
        return this.player
    }
}