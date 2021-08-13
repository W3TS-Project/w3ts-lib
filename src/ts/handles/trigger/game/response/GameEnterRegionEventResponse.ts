import { Region } from "../../../Region"
import { Unit } from "../../../Unit"
import { EventResponse } from "../../Trigger"

export class GameEnterRegionEventResponse extends EventResponse {
    region = Region.fromEvent()
    unit = Unit.getEntering()
}
