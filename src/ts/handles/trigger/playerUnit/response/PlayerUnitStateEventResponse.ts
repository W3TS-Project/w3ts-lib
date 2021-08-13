/** @noSelfInFile **/
//@ts-nocheck

import { UnitState } from "../../../../API/fields/unit/UnitState"
import { UnitEventResponse } from "../../unit/response/UnitEventResponse"

declare function GetEventUnitState(): unitstate

export class PlayerUnitStateEventResponse extends UnitEventResponse {
    state = UnitState.fromHandle(GetEventUnitState())
}
