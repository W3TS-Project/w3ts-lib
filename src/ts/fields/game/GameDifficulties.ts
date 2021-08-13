import { GameDifficulty } from "../../API/fields/game/GameDifficulty"

export abstract class GameDifficulties {
    static readonly EASY = GameDifficulty.convert(0)
    static readonly NORMAL = GameDifficulty.convert(1)
    static readonly HARD = GameDifficulty.convert(2)
    static readonly INSANE = GameDifficulty.convert(3)
}
