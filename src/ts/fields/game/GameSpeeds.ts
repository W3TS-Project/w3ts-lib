import { GameSpeed } from "../../API/fields/game/GameSpeed"

export abstract class GameSpeeds {
    static readonly SLOWEST = GameSpeed.convert(0)
    static readonly SLOW = GameSpeed.convert(1)
    static readonly NORMAL = GameSpeed.convert(2)
    static readonly FAST = GameSpeed.convert(3)
    static readonly FASTEST = GameSpeed.convert(4)
}
