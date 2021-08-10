/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetEventTargetUnit(): unit

export class UnitAcquiredTargetEventResponse extends UnitEventResponse {
    targetUnit = Unit.fromHandle(GetEventTargetUnit())
}
