import { GameDifficulty } from "../../API/fields/game/GameDifficulty";

export abstract class GameDifficulties {
  public static readonly EASY = new GameDifficulty(0)
  public static readonly NORMAL = new GameDifficulty(1)
  public static readonly HARD = new GameDifficulty(2)
  public static readonly INSANE = new GameDifficulty(3)
}