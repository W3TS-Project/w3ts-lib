import { DialogEvents } from "./DialogEvents";
import { GameEvents } from "./GameEvents";
import { LimitOperations } from "./LimitOperations";
import { PlayerEvents } from "./PlayerEvents";
import { PlayerUnitEvents } from "./PlayerUnitEvents";
import { UnitEvents } from "./UnitEvents";
import { WidgetEvents } from "./WidgetEvents";

export abstract class Events {
    public static readonly DIALOG_EVENTS = DialogEvents
    public static readonly GAME_EVENTS = GameEvents
    public static readonly LIMIT_OPERATIONS = LimitOperations
    public static readonly PLAYER_EVENTS = PlayerEvents
    public static readonly PLAYER_UNIT_EVENTS = PlayerUnitEvents
    public static readonly UNIT_EVENTS = UnitEvents
    public static readonly WIDGET_EVENTS = WidgetEvents
}