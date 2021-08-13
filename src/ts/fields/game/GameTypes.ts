import { GameType } from "../../API/fields/game/GameType"

export abstract class GameTypes {
    static readonly MELEE = GameType.convert(1)
    static readonly FFA = GameType.convert(2)
    static readonly USE_MAP_SETTINGS = GameType.convert(4)
    static readonly BLIZ = GameType.convert(8)
    static readonly ONE_ON_ONE = GameType.convert(16)
    static readonly TWO_TEAM_PLAY = GameType.convert(32)
    static readonly THREE_TEAM_PLAY = GameType.convert(64)
    static readonly FOUR_TEAM_PLAY = GameType.convert(128)
}
