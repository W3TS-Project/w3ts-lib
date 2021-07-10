import { GameType } from "../../API/fields/game/GameType"

export abstract class GameTypes {
  public static readonly MELEE = new GameType(1)
	public static readonly FFA = new GameType(2)
	public static readonly USE_MAP_SETTINGS = new GameType(4)
	public static readonly BLIZ = new GameType(8)
	public static readonly ONE_ON_ONE = new GameType(16)
	public static readonly TWO_TEAM_PLAY = new GameType(32)
	public static readonly THREE_TEAM_PLAY = new GameType(64)
	public static readonly FOUR_TEAM_PLAY = new GameType(128)
}