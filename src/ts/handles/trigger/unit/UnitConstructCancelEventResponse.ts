/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetCancelledStructure(): unit

export class UnitConstructCancelEventResponse extends UnitEventResponse {
    cancelledStructure = Unit.fromHandle(GetCancelledStructure())
}
