import { GameFloatState } from "../../API/fields/game/GameFloatState";
import { GameIntegerState } from "../../API/fields/game/GameIntegerState";

/**
 * For use with TriggerRegisterStateEvent
 */
export abstract class GameStates {
	public static readonly DIVINE_INTERVENTION = new GameIntegerState(0)
	public static readonly DISCONNECTED = new GameIntegerState(1)
	public static readonly TIME_OF_DAY = new GameFloatState(2)
}