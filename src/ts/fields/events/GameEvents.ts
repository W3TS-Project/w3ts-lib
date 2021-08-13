import { GameEvent } from "../../API/fields/events/GameEvent"

export abstract class GameEvents {
    static readonly VICTORY = GameEvent.convert(0)
    static readonly END_LEVEL = GameEvent.convert(1)

    static readonly VARIABLE_LIMIT = GameEvent.convert(2)
    static readonly STATE_LIMIT = GameEvent.convert(3)

    static readonly TIMER_EXPIRED = GameEvent.convert(4)

    static readonly ENTER_REGION = GameEvent.convert(5)
    static readonly LEAVE_REGION = GameEvent.convert(6)

    static readonly TRACKABLE_HIT = GameEvent.convert(7)
    static readonly TRACKABLE_TRACK = GameEvent.convert(8)

    static readonly SHOW_SKILL = GameEvent.convert(9)
    static readonly BUILD_SUBMENU = GameEvent.convert(10)

    static readonly LOADED = GameEvent.convert(256)
    static readonly TOURNAMENT_FINISH_SOON = GameEvent.convert(257)
    static readonly TOURNAMENT_FINISH_NOW = GameEvent.convert(258)
    static readonly SAVE = GameEvent.convert(259)
    static readonly CUSTOM_UI_FRAME = GameEvent.convert(310)
}
