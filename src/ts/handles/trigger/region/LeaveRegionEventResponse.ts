import { Region } from "../../Region"
import { Unit } from "../../Unit"
import { EventResponse } from "../Trigger"

export class LeaveRegionEventResponse extends EventResponse {
    region = Region.fromEvent()
    unit = Unit.fromEvent()
}
