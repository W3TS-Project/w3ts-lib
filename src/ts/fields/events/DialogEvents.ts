import { DialogEvent } from "../../API/fields/events/DialogEvent"

export abstract class DialogEvents {
    public static readonly BUTTON_CLICK = new DialogEvent(90)
    public static readonly DIALOG_CLICK = new DialogEvent(91)
}
