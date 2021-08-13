import { GameFloatState } from "../../API/fields/game/GameFloatState"
import { GameIntegerState } from "../../API/fields/game/GameIntegerState"

/**
 * For use with TriggerRegisterStateEvent
 */
export abstract class GameStates {
    static readonly DIVINE_INTERVENTION = GameIntegerState.convert(0)
    static readonly DISCONNECTED = GameIntegerState.convert(1)
    static readonly TIME_OF_DAY = GameFloatState.convert(2)
}
