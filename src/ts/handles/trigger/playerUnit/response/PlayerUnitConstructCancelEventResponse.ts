/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetCancelledStructure(): unit

export class PlayerUnitConstructCancelEventResponse extends PlayerUnitEventResponse {
    cancelledStructure = Unit.fromHandle(GetCancelledStructure())
}
