/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetRescuer(): unit

export class UnitRescuedEventResponse extends UnitEventResponse {
    rescuer = Unit.fromHandle(GetRescuer())
}
