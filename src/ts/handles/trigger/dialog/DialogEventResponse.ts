import { Dialog } from "../../Dialog"
import { EventResponse } from "../Trigger"

export class DialogEventResponse extends EventResponse {
    dialogClicked = Dialog.getClicked()
}
