/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../Unit"
import { UnitEventResponse } from "./UnitEventResponse"

declare function GetSummoningUnit(): unit
declare function GetSummonedUnit(): unit

export class UnitSummonEventResponse extends UnitEventResponse {
    summoning = Unit.fromHandle(GetSummoningUnit())
    summoned = Unit.fromHandle(GetSummonedUnit())
}
