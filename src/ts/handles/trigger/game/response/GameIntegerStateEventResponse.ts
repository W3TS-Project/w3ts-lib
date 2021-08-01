import { GameIntegerState } from "../../../../API/fields/game/GameIntegerState"

export class GameIntegerStateEventResponse {
    protected state: GameIntegerState

    public constructor() {
        this.state = GameIntegerState.fromEvent()
    }

    public getState() {
        return this.state
    }
}
