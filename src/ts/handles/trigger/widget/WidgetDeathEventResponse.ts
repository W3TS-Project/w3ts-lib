import { Widget } from "../../Widget"
import { EventResponse } from "../Trigger"

export class WidgetDeathEventResponse extends EventResponse {
    widget = Widget.fromEvent()
}
