import { DialogButton } from "../../DialogButton"
import { EventResponse } from "../Trigger"

export class DialogButtonEventResponse extends EventResponse {
    buttonClicked = DialogButton.getClicked()
}
