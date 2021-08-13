import { PlayerGameResult } from "../../API/fields/player/PlayerGameResult"

export abstract class PlayerGameResults {
    static readonly VICTORY = PlayerGameResult.convert(0)
    static readonly DEFEAT = PlayerGameResult.convert(1)
    static readonly TIE = PlayerGameResult.convert(2)
    static readonly NEUTRAL = PlayerGameResult.convert(3)
}
