import { GameSpeed } from "../../API/fields/game/GameSpeed";

export abstract class GameSpeeds {
	public static readonly SLOWEST = new GameSpeed(0)
	public static readonly SLOW = new GameSpeed(1)
	public static readonly NORMAL = new GameSpeed(2)
	public static readonly FAST = new GameSpeed(3)
	public static readonly FASTEST = new GameSpeed(4)
}