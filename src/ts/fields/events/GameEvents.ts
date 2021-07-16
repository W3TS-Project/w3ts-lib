import { GameEvent } from "../../API/fields/events/GameEvent"

export abstract class GameEvents {
    public static readonly VICTORY = new GameEvent(0)
    public static readonly END_LEVEL = new GameEvent(1)

    public static readonly VARIABLE_LIMIT = new GameEvent(2)
    public static readonly STATE_LIMIT = new GameEvent(3)

    public static readonly TIMER_EXPIRED = new GameEvent(4)

    public static readonly ENTER_REGION = new GameEvent(5)
    public static readonly LEAVE_REGION = new GameEvent(6)

    public static readonly TRACKABLE_HIT = new GameEvent(7)
    public static readonly TRACKABLE_TRACK = new GameEvent(8)

    public static readonly SHOW_SKILL = new GameEvent(9)
    public static readonly BUILD_SUBMENU = new GameEvent(10)

    public static readonly LOADED = new GameEvent(256)
    public static readonly TOURNAMENT_FINISH_SOON = new GameEvent(257)
    public static readonly TOURNAMENT_FINISH_NOW = new GameEvent(258)
    public static readonly SAVE = new GameEvent(259)
    public static readonly CUSTOM_UI_FRAME = new GameEvent(310)
}
