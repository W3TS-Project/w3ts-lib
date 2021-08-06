import { GameFloatState } from "../../../../API/fields/game/GameFloatState";
import { GameIntegerState } from "../../../../API/fields/game/GameIntegerState";
import { GameStates } from "../../../../fields/game/GameStates";

export class GameStateEventResponse {
    protected state: GameIntegerState | GameFloatState

    public constructor() {
        const integerState = GameIntegerState.fromEvent()
        const floatState = GameFloatState.fromEvent()
        if (
            integerState.getHandle() === GameStates.DISCONNECTED.getHandle() ||
            integerState.getHandle() === GameStates.DIVINE_INTERVENTION.getHandle()
        ) {
            this.state = integerState
        } else if (floatState.getHandle() === GameStates.TIME_OF_DAY.getHandle()) {
            this.state = floatState
        } else {
            this.state = integerState
        }
    }

    public getState() {
        return this.state
    }
}