import { DialogEvent } from "../../API/fields/events/DialogEvent"

export abstract class DialogEvents {
    static readonly BUTTON_CLICK = DialogEvent.convert(90)
    static readonly DIALOG_CLICK = DialogEvent.convert(91)
}
