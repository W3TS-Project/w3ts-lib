import { GameFloatState } from "../../../../API/fields/game/GameFloatState";

export class GameFloatStateEventResponse {
    protected state: GameFloatState

    public constructor() {
        this.state = GameFloatState.fromEvent()
    }

    public getState() {
        return this.state
    }
}