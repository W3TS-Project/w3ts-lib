/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetConstructingStructure(): unit

export class PlayerUnitConstructStartEventResponse extends PlayerUnitEventResponse {
    constructingStructure = Unit.fromHandle(GetConstructingStructure())
}
