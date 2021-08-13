/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetDecayingUnit(): unit

export class UnitDecayEventResponse extends UnitEventResponse {
    decaying = Unit.fromHandle(GetDecayingUnit())
}
