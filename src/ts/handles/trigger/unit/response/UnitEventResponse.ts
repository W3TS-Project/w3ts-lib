import { Unit } from "../../../Unit"
import { EventResponse } from "../../Trigger"

export class UnitEventResponse extends EventResponse {
    unit = Unit.fromEvent()
}
