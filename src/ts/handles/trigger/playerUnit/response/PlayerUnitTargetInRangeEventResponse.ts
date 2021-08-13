/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { UnitEventResponse } from "../../unit/response/UnitEventResponse"

declare function GetEventTargetUnit(): unit

export class PlayerUnitTargetInRangeEventResponse extends UnitEventResponse {
    targetUnit = Unit.fromHandle(GetEventTargetUnit())
}
