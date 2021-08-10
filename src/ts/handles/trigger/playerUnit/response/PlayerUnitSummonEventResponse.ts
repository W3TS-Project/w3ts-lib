/** @noSelfInFile **/
//@ts-nocheck

import { Unit } from "../../../Unit"
import { PlayerUnitEventResponse } from "./PlayerUnitEventResponse"

declare function GetSummoningUnit(): unit
declare function GetSummonedUnit(): unit

export class PlayerUnitSummonEventResponse extends PlayerUnitEventResponse {
    summoning = Unit.fromHandle(GetSummoningUnit())
    summoned = Unit.fromHandle(GetSummonedUnit())
}
