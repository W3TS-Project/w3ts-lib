/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetRescuer(): unit

export class PlayerUnitRescuedEventResponse extends PlayerUnitEventResponse {
    rescuer = Unit.fromHandle(GetRescuer())
}
