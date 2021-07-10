import { PlayerGameResult } from "../../API/fields/player/PlayerGameResult";

export abstract class PlayerGameResults {
  public static readonly VICTORY = new PlayerGameResult(0)
	public static readonly DEFEAT = new PlayerGameResult(1)
	public static readonly TIE = new PlayerGameResult(2)
	public static readonly NEUTRAL = new PlayerGameResult(3)
}