import { DialogEvents } from "./DialogEvents";
import { GameEvents } from "./GameEvents";
import { LimitOperations } from "./LimitOperations";
import { PlayerEvents } from "./PlayerEvents";
import { PlayerUnitEvents } from "./PlayerUnitEvents";
import { UnitEvents } from "./UnitEvents";
import { WidgetEvents } from "./WidgetEvents";

export abstract class Events {
    static readonly DIALOG_EVENTS = DialogEvents
    static readonly GAME_EVENTS = GameEvents
    static readonly LIMIT_OPERATIONS = LimitOperations
    static readonly PLAYER_EVENTS = PlayerEvents
    static readonly PLAYER_UNIT_EVENTS = PlayerUnitEvents
    static readonly UNIT_EVENTS = UnitEvents
    static readonly WIDGET_EVENTS = WidgetEvents
}