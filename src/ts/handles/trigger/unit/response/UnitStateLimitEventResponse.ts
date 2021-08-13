/** @noSelfInFile **/
//@ts-nocheck

import { UnitState } from "../../../../API/fields/unit/UnitState"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetEventUnitState(): unitstate

export class UnitStateLimitEventResponse extends UnitEventResponse {
    state = UnitState.fromHandle(GetEventUnitState())
}
