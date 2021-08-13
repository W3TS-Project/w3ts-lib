import { Region } from "../../Region"
import { Unit } from "../../Unit"
import { EventResponse } from "../Trigger"

export class EnterRegionEventResponse extends EventResponse {
    region = Region.fromEvent()
    unit = Unit.fromEvent()
}
